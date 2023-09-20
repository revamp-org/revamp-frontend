"use client";
import { UserButton } from "@clerk/nextjs";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/redux/features/navbarSlice";
import { AppDispatch } from "@/redux/store";

const Navbar = () => {
  const { user } = useUser();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <nav className="flex items-center justify-between bg-secondary p-2">
      <Icon
        icon="material-symbols:menu"
        className="block h-10 w-10 cursor-pointer rounded-sm p-1 hover:bg-gray-600 hover:bg-opacity-30 md:scale-0"
        onClick={() => dispatch(toggleMenu())}
      />
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
