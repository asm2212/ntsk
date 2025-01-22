import NextAuth from "next-auth";
import { UserRole } from "@prisma/client";
import type { User } from "next-auth";
import "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: UserRole;
    firstName: string;
    lastName: string;
    phone: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: UserRole;
      firstName: string;
      lastName: string;
      phone: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: UserRole;
    firstName: string;
    lastName: string;
    phone: string;
  }
}
