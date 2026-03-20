"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function SignOutPage() {
  const router = useRouter();

  useEffect(() => {
    void signOut({ callbackUrl: "/" }).then(() => {
      router.replace("/");
      router.refresh();
    });
  }, [router]);

  return (
    <main className="page-shell">
      <section className="mx-auto max-w-md rounded-[28px] border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-md)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Sign Out</p>
        <h1 className="mt-4 text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--foreground)]">
          Signing you out
        </h1>
        <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
          Your session is being cleared and you will be returned to the home page.
        </p>
      </section>
    </main>
  );
}
