type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, { params }: RouteContext) {
  const { id } = await params;
  const imageUrl = `https://drive.usercontent.google.com/download?id=${id}`;

  const response = await fetch(imageUrl, {
    cache: "no-store",
    headers: {
      accept: "image/*,*/*;q=0.8",
    },
  });

  if (!response.ok) {
    return new Response("Image not found", { status: response.status });
  }

  const contentType = response.headers.get("content-type") ?? "image/jpeg";
  const imageBuffer = await response.arrayBuffer();

  return new Response(imageBuffer, {
    status: 200,
    headers: {
      "content-type": contentType,
      "cache-control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
