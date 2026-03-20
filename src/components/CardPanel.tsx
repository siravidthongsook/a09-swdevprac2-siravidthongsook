"use client";

import Link from "next/link";
import { useReducer, useState } from "react";
import { venueList } from "@/data/venues";
import Card from "./Card";

type RatingState = Map<string, number>;

type RatingAction =
  | { type: "set"; venueName: string; rating: number }
  | { type: "remove"; venueName: string };

const initialRatings = new Map<string, number>(
  venueList.map((venue) => [venue.venueName, 0]),
);

function ratingReducer(state: RatingState, action: RatingAction): RatingState {
  const nextState = new Map(state);

  if (action.type === "set") {
    nextState.set(action.venueName, action.rating);
    return nextState;
  }

  nextState.delete(action.venueName);
  return nextState;
}

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(ratingReducer, initialRatings);
  const [selectedRatings, setSelectedRatings] = useState<Record<string, number>>(
    Object.fromEntries(venueList.map((venue) => [venue.venueName, 0])),
  );

  const handleRatingChange = (venueName: string, rating: number) => {
    setSelectedRatings((current) => ({
      ...current,
      [venueName]: rating,
    }));
    dispatch({ type: "set", venueName, rating });
  };

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
        {venueList.map((venue) => (
          <Link key={venue.vid} href={`/venue/${venue.vid}`} className="group block text-[inherit] no-underline">
            <Card
              venueName={venue.venueName}
              imgSrc={venue.imgSrc}
              description={venue.description}
              rating={selectedRatings[venue.venueName] ?? 0}
              onRatingChange={handleRatingChange}
            />
          </Link>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-[var(--border)] bg-[hsl(0_0%_100%_/_0.6)] p-6 shadow-[var(--shadow-sm)]">
        <p className="mb-3 text-base font-semibold tracking-[-0.01em] text-[var(--foreground)]">
          Venue List with Ratings : {ratings.size}
        </p>
        {[...ratings.entries()].map(([venueName, rating]) => (
          <p
            key={venueName}
            data-testid={venueName}
            className="mt-2 w-fit cursor-pointer rounded-full border border-[var(--border)] bg-[var(--muted)] px-[10px] py-[6px] text-[var(--foreground)] hover:bg-[hsl(34_26%_88%)]"
            onClick={() => dispatch({ type: "remove", venueName })}
          >
            {venueName} : {rating}
          </p>
        ))}
      </div>
    </section>
  );
}
