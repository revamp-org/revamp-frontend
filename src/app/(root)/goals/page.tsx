"use client";
import Image from "next/image";
import GoalDetail from "@/app/components/GoalDetail";

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

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
