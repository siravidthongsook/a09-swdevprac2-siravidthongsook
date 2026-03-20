"use client";

import { ReactNode, useState } from "react";

type InteractiveCardProps = {
  children: ReactNode;
  onClick?: () => void;
};

export default function InteractiveCard({ children, onClick }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`overflow-hidden rounded-lg transition-colors transition-shadow duration-200 cursor-pointer ${
        isHovered ? "bg-neutral-200 shadow-2xl" : "bg-white shadow-lg"
      }`}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      {children}
    </div>
  );
}
