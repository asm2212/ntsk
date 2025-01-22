import LoginForm from "@/components/Forms/LoginForm";
import { authOptions } from "@/config/auth";
import { Lock, Mail } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <section>
      <LoginForm />
    </section>
  );
}
