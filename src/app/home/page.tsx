import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <main className="w-full">
      <Sidebar />
      <div className="h-full w-[var(--container-width)] bg-secondary">
        {/* <Navbar /> */}
        hello world
      </div>
    </main>
  );
};

export default HomePage;
