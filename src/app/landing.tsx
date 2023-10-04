import { SignInButton, SignUpButton } from "@clerk/nextjs";

const Landing = () => {
  return (
    <div>
      <h1>Landing</h1>
      <div className="bg-slate-500 px-4 py-2">
        <SignInButton />
      </div>
      <div className="bg-slate-500 px-4 py-2">
        <SignUpButton />
      </div>
    </div>
  );
};

export default Landing;
