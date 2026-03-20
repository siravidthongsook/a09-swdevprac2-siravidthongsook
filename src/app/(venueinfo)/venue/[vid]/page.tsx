import { notFound } from "next/navigation";
import getDriveImageUrl from "@/libs/getDriveImageUrl";
import getVenue from "@/libs/getVenue";

type VenueDetailPageProps = {
  params: Promise<{ vid: string }>;
};

export default async function VenueDetailPage({ params }: VenueDetailPageProps) {
  const { vid } = await params;

  try {
    const venueJson = await getVenue(vid);
    const venue = venueJson.data;

    return (
      <main className="page-shell">
        <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[hsl(0_0%_100%_/_0.78)] shadow-[var(--shadow-md)] backdrop-blur-xl">
          <div className="relative aspect-[16/9] w-full">
            <img
              src={getDriveImageUrl(venue.picture)}
              alt={venue.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-3 px-6 py-6 sm:px-8 sm:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Venue {venue.id}
            </p>
            <h1 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-4xl">
              {venue.name}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-[var(--muted-foreground)]">
              {venue.address}, {venue.district}, {venue.province} {venue.postalcode}
            </p>
            <p className="text-base leading-7 text-[var(--muted-foreground)]">
              Tel: {venue.tel}
            </p>
            <p className="text-base leading-7 text-[var(--muted-foreground)]">
              Daily rate: {venue.dailyrate.toLocaleString()} THB
            </p>
          </div>
        </div>
      </main>
    );
  } catch {
    notFound();
  }
}
