import { fallbackVenueData } from "@/libs/venueFallbackData";

const VENUE_API_BASE_URLS = [
  "https://a08-venue-explorer-backend.vercel.app/api/v1/venues",
  "https://a08-venue-explorer-backend-2.vercel.app/api/v1/venues",
  "https://a08-venue-explorer-backend-3.vercel.app/api/v1/venues",
];

type VenueByIdJson = {
  success: boolean;
  data: VenueItem;
};

export default async function getVenue(vid: string): Promise<VenueByIdJson> {
  try {
    return await Promise.any(
      VENUE_API_BASE_URLS.map(async (baseUrl) => {
        const response = await fetch(`${baseUrl}/${vid}`, { cache: "no-store" });

        if (!response.ok) {
          throw new Error(`Failed to fetch venue ${vid} from ${baseUrl}`);
        }

        return (await response.json()) as VenueByIdJson;
      }),
    );
  } catch {
    const venue = fallbackVenueData.find((item) => item.id === vid);

    if (!venue) {
      throw new Error("Failed to fetch venue");
    }

    return {
      success: true,
      data: venue,
    };
  }
}
