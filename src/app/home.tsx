import { UserButton } from "@clerk/nextjs";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Li = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <li className="flex items-center justify-between">
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
    <div className="grid w-full">
      <section className="flex h-16 w-full items-center justify-between bg-[#213645] p-2 text-[#8CA9C8]">
        <div className="flex h-full items-center gap-4">
          <button>
            <Icon icon="eva:arrowhead-left-fill" className="text-5xl" />
          </button>
          <Image
            src="/assets/logo3-dark.svg"
            alt="REVAMP"
            height={80}
            width={280}
            className="h-full w-full"
          />
        </div>
        <UserButton />
      </section>
      <aside className="w-[var(--sidebar-width)]">
        <ul role="navigation">
          <Li icon="octicon:goal-16" text="Goal" />
        </ul>
      </aside>
      {children}
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
