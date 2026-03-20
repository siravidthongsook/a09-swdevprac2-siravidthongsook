"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";

export default function SignInPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (session?.user?.name) {
      router.replace("/");
    }
  }, [router, session?.user?.name]);

  return (
    <main className="page-shell">
      <section className="mx-auto max-w-md rounded-[28px] border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-md)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Sign In</p>
        <h1 className="mt-4 text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--foreground)]">
          Use your venue account
        </h1>
        <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
          Sign in with the backend account provided in the assignment to unlock the session-aware banner and booking profile.
        </p>

        <form
          className="mt-8 grid gap-4"
          onSubmit={async (event) => {
            event.preventDefault();
            setError("");
            setIsSubmitting(true);

            const result = await signIn("credentials", {
              email,
              password,
              redirect: false,
              callbackUrl: "/",
            });

            setIsSubmitting(false);

            if (result?.ok) {
              router.push(result.url ?? "/");
              router.refresh();
              return;
            }

            setError(result?.error ?? "Sign in failed");
          }}
        >
          <label className="grid gap-2 text-sm font-medium text-[var(--foreground)]">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-12 rounded-xl border border-[var(--border)] px-4 text-base outline-none focus:border-[var(--ring)]"
              placeholder="alice@eventplanner.com"
              autoComplete="email"
              required
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-[var(--foreground)]">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="h-12 rounded-xl border border-[var(--border)] px-4 text-base outline-none focus:border-[var(--ring)]"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </label>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-black px-5 text-sm font-semibold text-white transition hover:bg-[hsl(0_0%_14%)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </section>
    </main>
  );
}
