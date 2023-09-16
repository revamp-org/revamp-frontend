"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { AiOutlineDown, AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { BiNotepad } from "@react-icons/all-files/bi/BiNotepad";
import { BsPeople } from "@react-icons/all-files/bs/BsPeople";

import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="relative h-[100dvh] w-[var(--sidebar-width)]  px-6">
      <div className="flex items-center gap-4 pt-4">
        <Image
          alt="LogiSync Logo"
          src="/assets/logo.svg"
          height={1000}
          width={1000}
          className="h-12 w-12"
        />
        <p className="text-2xl font-semibold tracking-wider ">REVAMP</p>
      </div>

      <ul className="mt-8 space-y-4">
        <li className="link">
          <Link href="/">
            <Icon icon="octicon:goal-16" className="h-7 w-7" />
            Goal
          </Link>
          <Icon icon="typcn:plus" className="h-6 w-6" />
        </li>
        <li className="link">
          <Link href="/sales">
            <Icon icon="ri:time-line" className="h-7 w-7" />
            Routine
          </Link>
          <Icon icon="typcn:plus" className="h-6 w-6" />
        </li>

        <li className="link">
          <Link href="/orders">
            <BiNotepad className="h-7 w-7" />
            Tasks
          </Link>
          <Icon icon="typcn:plus" className="h-6 w-6" />
        </li>

        <li>
          <div
            className="link flex w-full items-center justify-between  "
            onClick={() => setIsOpen(!isOpen)}
          >
            <Link
              href="/products"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <Icon icon="mdi:journal-outline" className="h-6 w-6" />
              <h4 className=" ">Journals</h4>
            </Link>
            <button>
              <AiOutlineDown className="rounded-icon h-8 w-8  font-semibold" />
              <span className="sr-only">Toggle</span>
            </button>
          </div>

          {isOpen && (
            <section className="mt-2">
              <div className="rounded-md  px-4 py-1 font-mono text-sm shadow-sm">
                T-shirts
              </div>
              <div className="rounded-md  px-4 py-1 font-mono text-sm shadow-sm">
                Jackets
              </div>
            </section>
          )}
        </li>
        <li className="link">
          <Link href="/records">
            <Icon icon="icomoon-free:stats-dots" />
            Analytics
          </Link>
        </li>

        <li className="link">
          <Link href="/customers">
            <BsPeople className="h-7 w-7" />
            Community
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
