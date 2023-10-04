import { UserButton } from "@clerk/nextjs";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const Li = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <li className="flex items-center justify-between text-primary-foreground">
      <div className="flex items-center">
        <Icon icon={icon} className="text-3xl" />
        <span>{text}</span>
      </div>

      <Icon icon={"typcn:plus"} />
    </li>
  );
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid-template-column grid w-full grid-cols-2">
      <section className="col-span-2 flex h-16 w-full items-center justify-between bg-topbar p-2 text-topbar-foreground">
        <div className="flex h-full items-center gap-4">
          <button>
            <Icon icon="eva:arrowhead-left-fill" className="text-5xl" />
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
      <aside className="h-[calc(100dvh_-_4rem)] w-72 overflow-y-auto bg-sidebar">
        <ul role="navigation">
          <Li icon="octicon:goal-16" text="Goal" />
        </ul>
      </aside>
      <section className="h-[100dvh_-_4rem] text-primary-foreground">
        {children}
      </section>
    </div>
  );
};

const Home = () => {
  return (
    <HomeLayout>
      <div>Hello world</div>
    </HomeLayout>
  );
};

export default Home;
