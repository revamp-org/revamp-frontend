"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isJournalOpen, setIsJournalOpen] = useState<boolean>(false);
  return (
    <aside
      className={`relative h-[100dvh] ${isOpen ? "w-[var(--sidebar-width)]" : "w-20"
        }  bg-background shadow-md duration-300`}
    >
      <button
        className="absolute -right-3 top-9"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon
          icon="mingcute:right-line"
          className={` h-8 w-8  cursor-pointer rounded-full border-2 border-card bg-secondary p-1 shadow-sm ${isOpen && "rotate-180 "
            }`}
        />
      </button>
      <div className="flex  items-center gap-4  p-4 pt-6">
        <Image
          alt="LogiSync Logo"
          src="/assets/logo.svg"
          height={1000}
          width={1000}
          className="h-12 w-12"
        />
        <p
          className={`text-2xl font-semibold tracking-wider duration-200 ${!isOpen && "scale-0"
            }`}
        >
          REVAMP
        </p>
      </div>

      <ul className="space-y-4 pt-8">
        <li>
          <Link href="/" className={`link  ${!isOpen && "link-notext"} `}>
            <div>
              <Icon icon="octicon:goal-16" />
              <p>Goal</p>
            </div>

            <Icon
              icon="typcn:plus"
              className="rounded-icon h-8 w-8  p-1 font-semibold"
            />
          </Link>
        </li>
        <li>
          <Link
            href="/routines"
            className={`link  ${!isOpen && "link-notext"} `}
          >
            <div>
              <Icon icon="ri:time-line" />
              <p>Routines</p>
            </div>
            <Icon
              icon="typcn:plus"
              className="rounded-icon h-8 w-8  p-1 font-semibold"
            />
          </Link>
        </li>

        <li>
          <Link href="/tasks" className={`link  ${!isOpen && "link-notext"} `}>
            <div>
              <Icon icon="ph:notepad" />
              <p>Tasks</p>
            </div>

            <Icon
              icon="typcn:plus"
              className="rounded-icon h-8 w-8  p-1 font-semibold"
            />
          </Link>
        </li>

        <li>
          <div
            className={`link  ${!isOpen && "link-notext"
              } flex w-full items-center justify-between `}
            onClick={() => setIsJournalOpen(!isJournalOpen)}
          >
            <Link
              href="/journals"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <Icon icon="mdi:journal-outline" />
              <p>Journals</p>
            </Link>
            <button className={`${!isOpen && "scale-0"}`}>
              <Icon
                icon="grommet-icons:down"
                className="rounded-icon h-8 w-8  font-semibold"
              />
              <span className="sr-only">Toggle</span>
            </button>
          </div>

          {isJournalOpen && (
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
        <li>
          <Link href="/stats" className={`link  ${!isOpen && "link-notext"} `}>
            <div>
              <Icon icon="octicon:graph-24" />
              <p>Analytics</p>
            </div>
          </Link>
        </li>

        <li>
          <Link
            href="/community"
            className={`link  ${!isOpen && "link-notext"} `}
          >
            <div>
              <Icon icon="bi:people" />
              <p>Community</p>
            </div>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;