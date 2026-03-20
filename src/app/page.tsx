import Banner from "@/components/Banner";

import Link from "next/link";

const trustPoints = [
  {
    title: "Curated venue quality",
    copy:
      "Each featured space is selected for atmosphere, guest comfort, and event readiness so teams can book with less uncertainty.",
  },
  {
    title: "Faster planning flow",
    copy:
      "Browse venues, compare options, and move from inspiration to reservation without jumping between scattered spreadsheets or chats.",
  },
  {
    title: "Support that stays present",
    copy:
      "From first shortlist to final booking, organizers get clear information and dependable coordination at every step.",
  },
];

const journeySteps = [
  {
    step: "01",
    title: "Discover the right setting",
    copy:
      "Start with venues that already match the tone of your event, from refined ceremonies to polished corporate evenings.",
  },
  {
    step: "02",
    title: "Compare with confidence",
    copy:
      "Review images, descriptions, and venue feel in one place so decision makers can align faster.",
  },
  {
    step: "03",
    title: "Reserve with clarity",
    copy:
      "Move into booking with a streamlined form and dependable support built for real event planning workflows.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full pb-0">
      <main className="w-full overflow-hidden bg-white">
        <section className="mx-auto w-full max-w-7xl px-6 py-6 max-sm:px-4 max-sm:py-4">
          <Banner />
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-[72px] max-sm:px-4 max-sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                Built for trust
              </p>
              <h2 className="mt-4 text-[clamp(2.1rem,4vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--foreground)]">
                A venue platform that feels as polished as the events it helps create
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted-foreground)]">
                Great events begin with confidence. That means clear choices, reliable quality, and a booking experience that respects the pace of professional planning.
              </p>
            </div>

            <div className="rounded-[24px] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-sm)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                Booking advantages
              </p>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <p className="text-sm leading-6 text-[var(--foreground)]">Browse venues with faster decision-ready information</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <p className="text-sm leading-6 text-[var(--foreground)]">Move directly from discovery to booking without friction</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <p className="text-sm leading-6 text-[var(--foreground)]">Present a premium experience from the first click onward</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {trustPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-sm)]"
              >
                <div className="mb-5 h-10 w-10 rounded-full bg-[var(--secondary)]" />
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                  {point.copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[var(--border)] bg-[hsl(0_0%_98%)]">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-[72px] md:grid-cols-[1.05fr_0.95fr] md:items-center max-sm:px-4 max-sm:py-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                Why teams choose us
              </p>
              <h2 className="mt-4 text-[clamp(2rem,3.6vw,3.1rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--foreground)]">
                We help businesses and hosts book spaces that reflect their standards
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted-foreground)]">
                The best venue search experience balances inspiration with assurance. Our approach is designed to make premium spaces easier to discover, compare, and trust.
              </p>
            </div>

            <div className="grid gap-4 rounded-[28px] border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-md)]">
              <div className="rounded-xl border border-[var(--border)] bg-[hsl(0_0%_98%)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">Search confidence</p>
                <p className="mt-2 text-base font-medium text-[var(--foreground)]">Clear venue details that help teams compare quickly</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[hsl(0_0%_98%)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">Premium service</p>
                <p className="mt-2 text-base font-medium text-[var(--foreground)]">Elegant spaces for weddings, launches, and private gatherings</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[hsl(0_0%_98%)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">Reliable booking flow</p>
                <p className="mt-2 text-base font-medium text-[var(--foreground)]">A booking experience designed to feel smooth and dependable</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-20 max-sm:px-4 max-sm:py-14">
          <div className="flex flex-col gap-4 md:max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Booking journey
            </p>
            <h2 className="text-[clamp(2rem,3.8vw,3.4rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-[var(--foreground)]">
              Designed like a premium booking product, built for real event decisions
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {journeySteps.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-sm)]"
              >
                <p className="text-sm font-semibold tracking-[0.18em] text-[var(--accent)]">
                  {item.step}
                </p>
                <h3 className="mt-5 text-2xl font-semibold leading-8 tracking-[-0.03em] text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24 max-sm:px-4 max-sm:pb-16">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center rounded-[32px] border border-[var(--border)] bg-white px-8 py-16 text-center text-[var(--foreground)] shadow-[var(--shadow-md)] max-sm:px-5 max-sm:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
              Ready to explore
            </p>
            <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
              Bring confidence, trust, and quality into the way your next event gets booked
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted-foreground)]">
              Explore our venue collection and move from idea to reservation with a platform that feels dependable from the very first click.
            </p>
            <Link
              href="/venue"
              className="mt-8 inline-flex h-14 items-center justify-center rounded-[10px] !bg-black px-8 text-base font-semibold !text-white shadow-[var(--shadow-sm)] transition hover:-translate-y-px hover:!bg-[hsl(0_0%_14%)]"
            >
              Select Venue
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
