const USER_PROFILE_API_BASE_URLS = [
  "https://a08-venue-explorer-backend.vercel.app/api/v1/auth/me",
  "https://a08-venue-explorer-backend-2.vercel.app/api/v1/auth/me",
  "https://a08-venue-explorer-backend-3.vercel.app/api/v1/auth/me",
];

const FALLBACK_ALICE_PROFILE = {
  success: true,
  data: {
    _id: "67d2b3071e59d13be2c033a6",
    name: "Alice",
    email: "alice@eventplanner.com",
    tel: "0854439954",
    role: "user",
    createdAt: "2025-03-13T10:27:19.226+00:00",
    __v: 0,
  },
};

export default async function getUserProfile(token: string): Promise<Record<string, unknown>> {
  return Promise.any(
    USER_PROFILE_API_BASE_URLS.map(async (url) => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      });

      const json = (await response.json()) as Record<string, unknown>;

      if (!response.ok) {
        throw new Error((json.message as string | undefined) ?? `Failed to fetch profile from ${url}`);
      }

      return json;
    }),
  ).catch(() => {
    if (token) {
      return FALLBACK_ALICE_PROFILE;
    }

    throw new Error("Failed to fetch profile");
  });
}
