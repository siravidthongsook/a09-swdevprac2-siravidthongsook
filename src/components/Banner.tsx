"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Banner() {
  const { data: session } = useSession();
  const bannerImages = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg", "/img/cover4.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBannerClick = () => {
    setCurrentImageIndex((currentIndex) => (currentIndex + 1) % bannerImages.length);
  };

  return (
    <section className="group relative isolate overflow-hidden rounded-[28px] border border-[var(--border)] bg-black shadow-[var(--shadow-md)]">
      {session?.user?.name ? (
        <div className="absolute right-6 top-5 z-20 rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(0,0,0,0.48)] px-4 py-2 text-sm font-medium text-white backdrop-blur-md max-sm:right-4 max-sm:top-4">
          Welcome {session.user.name}
        </div>
      ) : null}
      <Image
        src={bannerImages[currentImageIndex]}
        alt="Colorful event lights above a lively venue crowd"
        fill
        priority
        className="cursor-pointer object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        onClick={handleBannerClick}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(0_0%_0%_/_0.82)_0%,hsl(0_0%_0%_/_0.64)_45%,hsl(0_0%_0%_/_0.18)_100%)]" />
      <div className="relative z-10 grid min-h-[36rem] grid-cols-[minmax(0,1.15fr)_minmax(320px,420px)] items-center gap-8 px-8 py-8 text-white max-lg:grid-cols-1 max-lg:px-6 max-lg:py-10 max-sm:min-h-[32rem] max-sm:px-5">
        <div className="max-w-[640px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.72)]">
            Premium booking concierge
          </p>
          <h1 className="mt-4 max-w-[11ch] text-[clamp(2.7rem,5.2vw,4.8rem)] font-bold leading-[0.94] tracking-[-0.045em] lowercase">
            where every event finds its venue
          </h1>
          <p className="mt-5 max-w-[34rem] text-base leading-7 text-[rgba(255,248,238,0.9)]">
            Finding the perfect venue has never been easier. Whether it&apos;s a wedding, corporate event, or private party, we connecting people to the perfect place.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 max-sm:flex-col max-sm:items-stretch">
            <Link
              href="/venue"
              className="inline-flex h-14 items-center justify-center rounded-[10px] bg-black px-10 text-[17px] font-semibold text-white shadow-[var(--shadow-md)] transition hover:-translate-y-px hover:bg-[hsl(0_0%_14%)]"
            >
              Select Venue
            </Link>
            <Link
              href="/booking"
              className="inline-flex h-14 items-center justify-center rounded-[10px] border border-[rgba(255,255,255,0.28)] bg-[rgba(255,255,255,0.08)] px-8 text-base font-medium text-white backdrop-blur-sm transition hover:bg-[rgba(255,255,255,0.14)]"
            >
              Start Booking
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-[rgba(255,248,238,0.82)] max-sm:grid max-sm:grid-cols-1 max-sm:gap-3">
            <div>
              <p className="text-[26px] font-semibold tracking-[-0.04em] text-white">500+</p>
              <p>event planners served</p>
            </div>
            <div>
              <p className="text-[26px] font-semibold tracking-[-0.04em] text-white">24/7</p>
              <p>booking support coverage</p>
            </div>
            <div>
              <p className="text-[26px] font-semibold tracking-[-0.04em] text-white">Fast</p>
              <p>shortlisting for busy teams</p>
            </div>
          </div>
        </div>

        <div className="ml-auto w-full max-w-[420px] rounded-[24px] border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.08)] p-6 backdrop-blur-md max-lg:ml-0 max-lg:max-w-full">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.72)]">
            Quick booking overview
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.05)] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[rgba(255,255,255,0.6)]">Best for</p>
              <p className="mt-2 text-base font-medium text-white">Weddings, launches, private gatherings</p>
            </div>
            <div className="rounded-xl border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.05)] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[rgba(255,255,255,0.6)]">Experience</p>
              <p className="mt-2 text-base font-medium text-white">Curated venues with a smoother booking flow</p>
            </div>
            <div className="rounded-xl border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.05)] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[rgba(255,255,255,0.6)]">Trust signal</p>
              <p className="mt-2 text-base font-medium text-white">Clear details, concierge support, premium presentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
