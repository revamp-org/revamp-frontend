import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto w-[var(--container-width)]">
      <h1 className="text-4xl text-primary">Revamp Landing Page</h1>

      <Link href="/sign-in" className="btn">
        Sign In
      </Link>

      <Link href="/sign-up" className="btn">
        Sign Up
      </Link>
    </div>
  );
}
