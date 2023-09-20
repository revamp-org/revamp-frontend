"use client";
import { UserButton } from "@clerk/nextjs";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useDispatch } from "react-redux";
import { menu, toggleMenu } from "@/redux/features/navbarSlice";
import { AppDispatch } from "@/redux/store";

const Navbar = () => {
  const { user } = useUser();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <nav className="flex items-center justify-between bg-secondary p-2">
      <div className="flex items-center gap-2">
        <Icon
          icon="material-symbols:menu"
          className="h-10 w-10 cursor-pointer rounded-sm p-1 hover:bg-gray-600 hover:bg-opacity-30"
          onClick={() => dispatch(toggleMenu())}
        />
        <Image
          alt="Revamp Logo"
          src="/assets/logo.svg"
          height={1000}
          width={1000}
          className="h-10 w-10"
        />
        <p className="text-2xl font-semibold tracking-wider ">REVAMP</p>
      </div>

      <div className="flex items-center gap-4">
        <Icon
          icon="basil:notification-outline"
          className="rounded-icon h-10 w-10"
        />
        <UserButton
          afterSignOutUrl="/sign-in"
          appearance={{
            elements: {
              avatarBox: "h-10 w-10",
            },
          }}
        />
        <p>{user?.fullName}</p>
      </div>
    </nav>
  );
};

export default Navbar;
