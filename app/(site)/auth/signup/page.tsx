import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account | NovaFlow",

  // other metadata
  description: "Create your NovaFlow account to get started.",
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
