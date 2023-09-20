import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <main className="flex w-full">
      <Sidebar />
      <div className="h-full w-full bg-secondary">
        <Navbar />
        hello world
      </div>
    </main>
  );
};

export default HomePage;
