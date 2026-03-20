import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      _id?: string;
      name?: string | null;
      email?: string | null;
      tel?: string;
      role?: string;
      token?: string;
      createdAt?: string;
    };
  }

  interface User {
    _id?: string;
    tel?: string;
    role?: string;
    token?: string;
    createdAt?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId?: string;
    tel?: string;
    role?: string;
    token?: string;
    createdAt?: string;
  }
}
