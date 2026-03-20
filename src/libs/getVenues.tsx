import { fallbackVenueJson } from "@/libs/venueFallbackData";

const VENUE_API_BASE_URLS = [
  "https://a08-venue-explorer-backend.vercel.app/api/v1/venues",
  "https://a08-venue-explorer-backend-2.vercel.app/api/v1/venues",
  "https://a08-venue-explorer-backend-3.vercel.app/api/v1/venues",
];

export default async function getVenues(): Promise<VenueJson> {
  try {
    return await Promise.any(
      VENUE_API_BASE_URLS.map(async (url) => {
        const response = await fetch(url, { cache: "no-store" });

        if (!response.ok) {
          throw new Error(`Failed to fetch venues from ${url}`);
        }

        return (await response.json()) as VenueJson;
      }),
    );
  } catch {
    return fallbackVenueJson;
  }
}
