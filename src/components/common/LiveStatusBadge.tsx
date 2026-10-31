"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { getSalonLiveStatus, SalonStatus } from "@/utils/salonHours";

interface LiveStatusBadgeProps {
  showFullText?: boolean;
  className?: string;
}

export const LiveStatusBadge: React.FC<LiveStatusBadgeProps> = ({
  showFullText = false,
  className = "",
}) => {
  const [status, setStatus] = useState<SalonStatus | null>(null);

  useEffect(() => {
    setStatus(getSalonLiveStatus());
    const interval = setInterval(() => {
      setStatus(getSalonLiveStatus());
    }, 60000); // refresh every minute

    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  const dotColor = {
    open: "bg-emerald-400",
    closingSoon: "bg-amber-400",
    closed: "bg-neutral-500",
  }[status.color];

  const textColor = {
    open: "text-emerald-300",
    closingSoon: "text-amber-300",
    closed: "text-neutral-400",
  }[status.color];

  const borderColor = {
    open: "border-emerald-500/30 bg-emerald-950/40",
    closingSoon: "border-amber-500/30 bg-amber-950/40",
    closed: "border-white/10 bg-neutral-900/60",
  }[status.color];

  return (
    <div
      className={`inline-flex items-center space-x-2 px-2.5 py-1 rounded-full border text-[10px] sm:text-[11px] font-sans font-medium tracking-wider uppercase backdrop-blur-md ${borderColor} ${className}`}
      title={status.statusText}
    >
      <span className="relative flex h-2 w-2">
        {status.isOpen && (
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColor}`}
          />
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`} />
      </span>

      <span className={textColor}>
        {showFullText ? status.statusText : status.badgeLabel}
      </span>
    </div>
  );
};
