"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import DateReserve from "@/components/DateReserve";

const venues = [
  { value: "The Sunbeam Pavilion", label: "The Sunbeam Pavilion", description: "A sunlit garden hall with elegant atmosphere" },
  { value: "The Bloom Pavilion", label: "The Bloom Pavilion", description: "Elegant garden venue for weddings" },
  { value: "Spark Space", label: "Spark Space", description: "Modern industrial loft for corporate events" },
  { value: "The Grand Table", label: "The Grand Table", description: "Classic ballroom for formal gatherings" },
];

function BookingFormContent() {
  const searchParams = useSearchParams();
  const venueParam = searchParams?.get("venue") || "";
  const [selectedVenue, setSelectedVenue] = useState(venueParam);
  const adornmentSx = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    minWidth: 20,
    height: 20,
    borderRadius: "999px",
    border: "1px solid var(--border)",
    color: "var(--muted-foreground)",
    fontSize: "0.75rem",
    fontWeight: 600,
    mr: 1,
    flexShrink: 0,
  };
  const fieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      backgroundColor: "hsl(0 0% 100% / 0.78)",
      "& fieldset": { borderColor: "var(--input)" },
      "&:hover fieldset": { borderColor: "hsl(32 18% 74%)" },
      "&.Mui-focused fieldset": { borderColor: "var(--ring)", borderWidth: 1 },
    },
    "& .MuiInputLabel-root.Mui-focused": { color: "var(--foreground)" },
  };

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "12px",
        border: "1px solid var(--border)",
        overflow: "hidden",
        background: "hsl(0 0% 100% / 0.76)",
        backdropFilter: "blur(18px)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <Box sx={{ p: { xs: 3, sm: 5 } }}>
        <form>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "var(--foreground)",
              mb: 3,
              fontSize: "1.125rem",
            }}
          >
            Contact Information
          </Typography>

          <Box sx={{ display: "grid", gap: 3, mb: 4 }}>
            <TextField
              name="Name-Lastname"
              label="Name-Lastname"
              variant="outlined"
              fullWidth
              slotProps={{
                htmlInput: {
                  className: "MuiInput-input",
                },
                input: {
                  startAdornment: (
                    <Box component="span" sx={adornmentSx}>
                      N
                    </Box>
                  ),
                },
              }}
              sx={fieldSx}
            />
            <TextField
              name="Contact-Number"
              label="Contact-Number"
              variant="outlined"
              fullWidth
              slotProps={{
                htmlInput: {
                  className: "MuiInput-input",
                },
                input: {
                  startAdornment: (
                    <Box component="span" sx={adornmentSx}>
                      T
                    </Box>
                  ),
                },
              }}
              sx={fieldSx}
            />
          </Box>

          <Divider sx={{ my: 3, borderColor: "var(--border)" }} />

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "var(--foreground)",
              mb: 3,
              fontSize: "1.125rem",
            }}
          >
            Event Details
          </Typography>

          <Box sx={{ display: "grid", gap: 3, mb: 4 }}>
            <FormControl fullWidth>
              <InputLabel
                id="venue-label"
                sx={{
                  "&.Mui-focused": { color: "var(--foreground)" },
                }}
              >
                Select Venue
              </InputLabel>
              <Select
                labelId="venue-label"
                id="venue"
                value={selectedVenue}
                label="Select Venue"
                onChange={(e) => setSelectedVenue(e.target.value)}
                startAdornment={
                  <Box component="span" sx={{ ...adornmentSx, ml: 1, mr: 1 }}>
                    V
                  </Box>
                }
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "hsl(0 0% 100% / 0.78)",
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "var(--input)" },
                  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "hsl(32 18% 74%)" },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "var(--ring)", borderWidth: 1 },
                }}
              >
                {venues.map((venue) => (
                  <MenuItem key={venue.value} value={venue.value}>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {venue.label}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "var(--muted-foreground)" }}>
                        {venue.description}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box
              sx={{
                p: 3,
                borderRadius: "12px",
                border: "1px solid var(--border)",
                backgroundColor: "hsl(35 30% 97% / 0.7)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Box component="span" sx={adornmentSx}>
                  D
                </Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "var(--foreground)" }}>
                  Event Date
                </Typography>
              </Box>
              <DateReserve />
            </Box>
          </Box>

          <Divider sx={{ my: 3, borderColor: "var(--border)" }} />

          <Button
            name="Book Venue"
            variant="contained"
            type="submit"
            fullWidth
            size="large"
            sx={{
              mt: 1,
              py: 1.5,
              borderRadius: "8px",
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              fontWeight: 600,
              fontSize: "1rem",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "hsl(24 20% 22%)",
                boxShadow: "none",
              },
              "&:active": {
                backgroundColor: "var(--primary)",
              },
            }}
          >
            Book Venue
          </Button>
        </form>
      </Box>

      <Box
        sx={{
          p: 3,
          backgroundColor: "hsl(35 30% 95% / 0.85)",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--accent)" }} />
          <Typography variant="caption" sx={{ color: "var(--muted-foreground)" }}>
            Instant Confirmation
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--accent)" }} />
          <Typography variant="caption" sx={{ color: "var(--muted-foreground)" }}>
            Free Cancellation
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--accent)" }} />
          <Typography variant="caption" sx={{ color: "var(--muted-foreground)" }}>
            24/7 Support
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default function BookingForm() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingFormContent />
    </Suspense>
  );
}
