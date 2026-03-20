import Link from "next/link";
import Card from "@/components/Card";
import getDriveImageUrl from "@/libs/getDriveImageUrl";

type VenueCatalogProps = {
  venuesJson: Promise<VenueJson> | VenueJson;
};

export default async function VenueCatalog({ venuesJson }: VenueCatalogProps) {
  const resolvedVenuesJson = await venuesJson;

  return (
    <section className="bg-[linear-gradient(180deg,hsl(35_32%_96%_/_0.64),hsl(0_0%_100%_/_0.3))] p-10 max-sm:p-5">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          Featured Venue
        </p>
        <h2 className="max-w-[15ch] text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--foreground)]">
          Elegant spaces for weddings, launches, and private gatherings
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {resolvedVenuesJson.data.map((venue: VenueItem) => (
          <Link key={venue.id} href={`/venue/${venue.id}`} className="group block text-[inherit] no-underline">
            <Card
              venueName={venue.name}
              imgSrc={getDriveImageUrl(venue.picture)}
              imageAlt={venue.name}
              description={`${venue.address}, ${venue.district}, ${venue.province} ${venue.postalcode}`}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
