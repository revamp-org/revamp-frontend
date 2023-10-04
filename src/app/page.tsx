"use client";
import { useAuth } from "@clerk/nextjs";
import HomePage from "./home";
import Landing from "./landing";

export default function Home() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Landing />;
  } else {
    return <HomePage />;
  }
}
