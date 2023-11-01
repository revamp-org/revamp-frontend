"use client";
import { SignInButton, SignUpButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Landing = () => {
  const router = useRouter();
  const { getToken } = useAuth();
  const [tokens, setTokens] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const gettoken = async () => {
      setIsLoading(true);
      const token = await getToken();
      if (token) {
        setTokens(token);
        console.log(token);
      }
      console.log("no token");
      setIsLoading(false);
    };

    gettoken();
  }, [getToken]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (tokens) {
    router.push("/");
  } else {
    return (
      <div>
        <h1>Landing</h1>
        <div className="bg-slate-500 px-4 py-2">
          <Link href="/sign-in">Sign in</Link>
        </div>
        <div className="bg-slate-500 px-4 py-2">
          <Link href="/sign-up">Sign up</Link>
        </div>
      </div>
    );
  }

  return null;
};

export default Landing;
