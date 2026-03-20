import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getServerSession } from "next-auth";
import BookingForm from "@/components/BookingForm";
import { authOptions } from "@/libs/authOptions";
import getUserProfile from "@/libs/getUserProfile";

export default async function BookingPage() {
  const session = await getServerSession(authOptions);
  const profile = session?.user?.token ? await getUserProfile(session.user.token) : null;
  const user = (profile?.data as Record<string, unknown> | undefined) ?? null;

  return (
    <main className="page-shell !pt-10">
      <section className="mx-auto flex w-full max-w-3xl flex-col gap-10">
        {user ? (
          <Box className="rounded-[24px] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-sm)]">
            <Typography
              variant="overline"
              sx={{
                color: "var(--accent)",
                fontWeight: 600,
                letterSpacing: "0.22em",
                fontSize: "0.75rem",
              }}
            >
              Signed In
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 600,
                color: "var(--foreground)",
                mt: 1,
                fontSize: { xs: "2rem", sm: "2.5rem" },
                letterSpacing: "-0.03em",
              }}
            >
              Welcome {String(user.name ?? "")}
            </Typography>
            <Box
              sx={{
                mt: 3,
                display: "grid",
                gap: 1.5,
                color: "var(--muted-foreground)",
              }}
            >
              <Typography variant="body1">Name: {String(user.name ?? "")}</Typography>
              <Typography variant="body1">Email: {String(user.email ?? "")}</Typography>
              <Typography variant="body1">Tel.: {String(user.tel ?? "")}</Typography>
              <Typography variant="body1">
                Member Since:{" "}
                {user.createdAt ? new Date(String(user.createdAt)).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }) : ""}
              </Typography>
            </Box>
          </Box>
        ) : null}

        <Box className="text-center">
          <Typography
            variant="overline"
            sx={{
              color: "var(--accent)",
              fontWeight: 600,
              letterSpacing: "0.22em",
              fontSize: "0.75rem",
            }}
          >
            Reservation
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 600,
              color: "var(--foreground)",
              mt: 1,
              fontSize: { xs: "2rem", sm: "2.5rem" },
              letterSpacing: "-0.03em",
            }}
          >
            Book Your Venue
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "var(--muted-foreground)",
              mt: 1.5,
              maxWidth: "500px",
              mx: "auto",
            }}
          >
            Select your preferred venue and date to reserve your perfect event space
          </Typography>
        </Box>

        <BookingForm />
      </section>
    </main>
  );
}
