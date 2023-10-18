"use client";
import { UserButton } from "@clerk/nextjs";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import GoalDetail from "./components/GoalDetail";
import { useState } from "react";

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
      <div className="flex w-full items-center gap-2">
        <Icon icon={icon} className="text-3xl" />
        <span className="text-xl ">{text}</span>
      </div>

      {canAdd && <Icon icon={"typcn:plus"} className="text-2xl" />}
    </li>
  );
};

const GoalItem = ({ goal, priority }: { goal: string; priority: string }) => {
  return (
    <div className="flex h-12 cursor-pointer  items-center justify-between bg-topbar pr-4 text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-[#446288]">
      <div className="flex h-full items-center gap-4">
        <span className="priority after:bg-white "></span>
        <p>{goal}</p>
      </div>
      <span className="flex items-center text-2xl font-semibold">
        <Image
          src="/assets/fire.png"
          alt="streak"
          height={36}
          width={36}
          className="p-2"
        />
        12
      </span>
    </div>
  );
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  return (
    <div className=" w-full ">
      {/* Appbar */}

      <section className="col-span-2 flex h-16 w-full items-center justify-between bg-topbar p-2 text-topbar-foreground">
        <div className="flex h-full items-center gap-4">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Icon
              icon="eva:arrowhead-left-fill"
              className={`text-5xl ${isSidebarOpen ? "" : "rotate-180"
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
          className={`${isSidebarOpen ? "w-[var(--sidebar-width)]" : "w-0"
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

const Home = () => {
  return (
    <HomeLayout>
      <section className="space-y-2">
        <GoalItem goal="DO DE Practice set" priority="high" />
        <GoalItem goal="DO DE Practice set" priority="high" />
      </section>
      <GoalDetail
        title="DO DE Practice set"
        description="DO de practice set question for Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam velit at ex placeat facere sapiente amet laboriosam sunt nostrum nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore itaque, ipsam numquam optio, perferendis culpa vel voluptates a fugit quas maxime dicta facilis odio velit fugiat deserunt ratione illo voluptate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, assumenda sunt animi dolor, quis nostrum nisi autem consequatur reprehenderit corporis placeat culpa voluptas aliquam, alias voluptatem natus nobis aperiam cupiditate. "
        date="2021-09-12"
        goalId={1}
      />
    </HomeLayout>
  );
};

export default Home;
