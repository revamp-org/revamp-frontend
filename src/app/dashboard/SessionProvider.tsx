"use client";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserButton, useAuth } from "@clerk/nextjs";

const Li = ({
  icon,
  text,
  canAdd,
  className,
}: {
  icon: string;
  text: string;
  canAdd: boolean;
  className?: string;
}) => {
  return (
    <li
      className={cn(
        "flex items-center justify-between text-primary-foreground hover:cursor-pointer",
        className,
      )}
    >
      <Link
        href={text.toLowerCase()}
        className="flex w-full items-center gap-2"
      >
        <Icon icon={icon} className="text-3xl" />
        <span className="text-xl ">{text}</span>
      </Link>

      {canAdd && <Icon icon={"typcn:plus"} className="text-2xl" />}
    </li>
  );
};

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  return (
    <div className=" w-full ">
      {/* Appbar */}

      <section className="col-span-2 flex h-16 w-full items-center justify-between bg-topbar p-2 text-topbar-foreground">
        <div className="flex h-full items-center gap-4">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Icon
              icon="eva:arrowhead-left-fill"
              className={`text-5xl ${
                isSidebarOpen ? "" : "rotate-180"
              } duration-300`}
            />
          </button>
          <Link href="/" className="h-full w-full">
            <Image
              src="/assets/logo3-dark.svg"
              alt="REVAMP"
              height={80}
              width={280}
              className="h-full w-full"
            />
          </Link>
        </div>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-10 w-10",
            },
          }}
        />
      </section>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? "w-[var(--sidebar-width)]" : "w-0"
          } h-[calc(100dvh_-_4rem)]  overflow-y-auto  bg-sidebar duration-300 ease-in-out  `}
        >
          <ul role="navigation" className="relative h-full space-y-4 p-4">
            <Li icon="octicon:goal-16" text="Goals" canAdd={true} />
            <Li icon="ri:time-line" text="Routines" canAdd={true} />
            <Li icon="ph:notepad" text="Tasks" canAdd={true} />
            <Li icon="mdi:journal-outline" text="Journals" canAdd={false} />
            <Li icon="octicon:graph-24" text="Analytics" canAdd={false} />
            <Li icon="bi:people" text="Community" canAdd={false} className="" />
          </ul>
        </aside>

        {/* Main */}
        <section className="grid h-[100dvh_-_4rem] w-full grid-cols-2 gap-2  p-2 text-primary-foreground">
          {children}
        </section>
      </div>
    </div>
  );
};

export default SessionProvider;
