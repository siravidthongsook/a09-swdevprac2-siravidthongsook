"use client";

import Image from "next/image";
import Link from "next/link";
import TopMenuItem from "@/components/TopMenuItem";
import { useSession } from "next-auth/react";

export default function TopMenu() {
  const { data: session } = useSession();
  const authTitle = session?.user?.name ? "Sign Out" : "Sign In";
  const authHref = session?.user?.name ? "/signout" : "/signin";

  return (
    <header className="sticky top-0 z-40 w-full px-0 pt-0">
      <div className="flex w-full items-center justify-between border-b border-[var(--border)] bg-[hsl(0_0%_100%_/_0.9)] px-6 py-3 backdrop-blur-xl max-sm:px-4">
        <div className="flex flex-1 items-center">
          <TopMenuItem title={authTitle} href={authHref} />
        </div>

        <div className="flex flex-1 items-center justify-center gap-2 sm:gap-3">
          <TopMenuItem title="Home" href="/" />
          <TopMenuItem title="Booking" href="/booking" />
          <TopMenuItem title="Venue" href="/venue" />
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Link href="/" className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--secondary)] shadow-[var(--shadow-sm)]">
            <Image
              src="/img/logo.png"
              alt="Venue Explorer logo"
              width={38}
              height={38}
              priority
              className="h-full w-full object-contain"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
