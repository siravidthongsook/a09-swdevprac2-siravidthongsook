"use client";

import Rating from "@mui/material/Rating";

type CardProps = {
  venueName: string;
  imgSrc: string;
  description?: string;
  imageAlt?: string;
  rating?: number;
  onRatingChange?: (venueName: string, rating: number) => void;
};

export default function Card({
  venueName,
  imgSrc,
  description,
  imageAlt,
  rating,
  onRatingChange,
}: CardProps) {
  const ratingFieldName = `${venueName} Rating`;
  const shouldShowRating = typeof rating === "number" && !!onRatingChange;

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[hsl(0_0%_100%_/_0.78)] shadow-[var(--shadow-sm)] backdrop-blur-[18px] transition duration-200 hover:-translate-y-1 hover:border-[hsl(28_30%_74%)] hover:bg-[hsl(0_0%_100%_/_0.92)] hover:shadow-[var(--shadow-md)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imgSrc}
          alt={imageAlt ?? venueName}
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex-1 p-5">
        <h2 className="text-lg font-semibold leading-6 tracking-[-0.02em] text-[var(--foreground)]">
          {venueName}
        </h2>
        {description ? (
          <p className="mt-2 text-[13px] font-normal leading-[1.6] text-[var(--muted-foreground)]">
            {description}
          </p>
        ) : null}
        {shouldShowRating ? (
          <div
            id={ratingFieldName}
            data-testid={ratingFieldName}
            className="mt-4"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
            }}
          >
            <Rating
              name={ratingFieldName}
              value={rating}
              onChange={(_, newValue) => onRatingChange(venueName, newValue ?? 0)}
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}
