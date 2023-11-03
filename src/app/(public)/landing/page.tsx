import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Landing = () => {
  return (
    <div>
      <h1>Landing</h1>
      <SignedOut>
        <div className="bg-slate-500 px-4 py-2">
          <Link href="/sign-in">Sign in</Link>
        </div>
        <div className="bg-slate-500 px-4 py-2">
          <Link href="/sign-up">Sign up</Link>
        </div>
      </SignedOut>
      <SignedIn>
        <Link href="/goals">Go To Dashboard</Link>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  );
};

export default Landing;
