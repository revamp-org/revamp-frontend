"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  if (isSignedIn) {
    router.push("/");
  }

  return (
    <main className=" grid h-[100dvh] w-full place-items-center">
      {children}
    </main>
  );
};

export default AuthProvider;
