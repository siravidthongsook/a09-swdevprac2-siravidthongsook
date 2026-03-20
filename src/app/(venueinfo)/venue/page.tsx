import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";

export default async function VenuePage() {
  const venuesJson = Promise.resolve(await getVenues());

  return <VenueCatalog venuesJson={venuesJson} />;
}
