/**
 * Utility to calculate real-time open status of SPARK Unisex Salon
 * Timings:
 * - Tuesday through Sunday: 9:30 AM - 9:00 PM (09:30 - 21:00)
 * - Monday: 10:00 AM - 8:00 PM (10:00 - 20:00)
 */

export interface SalonStatus {
  isOpen: boolean;
  statusText: string;
  badgeLabel: string;
  color: "open" | "closingSoon" | "closed";
}

export function getSalonLiveStatus(date = new Date()): SalonStatus {
  const day = date.getDay(); // 0 is Sunday, 1 is Monday, etc.
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentTime = hours * 60 + minutes;

  // Monday
  if (day === 1) {
    const openTime = 10 * 60; // 10:00 AM
    const closeTime = 20 * 60; // 8:00 PM

    if (currentTime >= openTime && currentTime < closeTime) {
      const minutesToClose = closeTime - currentTime;
      if (minutesToClose <= 45) {
        return {
          isOpen: true,
          statusText: `Closing soon at 8:00 PM (${minutesToClose}m left)`,
          badgeLabel: "Closing Soon",
          color: "closingSoon",
        };
      }
      return {
        isOpen: true,
        statusText: "Open Now • Closes at 8:00 PM",
        badgeLabel: "Open Now",
        color: "open",
      };
    } else {
      return {
        isOpen: false,
        statusText: "Closed • Opens Tuesday at 9:30 AM",
        badgeLabel: "Closed",
        color: "closed",
      };
    }
  }

  // Tuesday – Sunday
  const openTime = 9 * 60 + 30; // 9:30 AM
  const closeTime = 21 * 60; // 9:00 PM

  if (currentTime >= openTime && currentTime < closeTime) {
    const minutesToClose = closeTime - currentTime;
    if (minutesToClose <= 45) {
      return {
        isOpen: true,
        statusText: `Closing soon at 9:00 PM (${minutesToClose}m left)`,
        badgeLabel: "Closing Soon",
        color: "closingSoon",
      };
    }
    return {
      isOpen: true,
      statusText: "Open Now • Closes at 9:00 PM",
      badgeLabel: "Open Now",
      color: "open",
    };
  } else {
    // If before opening today
    if (currentTime < openTime) {
      return {
        isOpen: false,
        statusText: "Closed • Opens today at 9:30 AM",
        badgeLabel: "Closed",
        color: "closed",
      };
    }
    // After closing today
    const tomorrowOpen = day === 0 ? "Monday at 10:00 AM" : "Tomorrow at 9:30 AM";
    return {
      isOpen: false,
      statusText: `Closed • Opens ${tomorrowOpen}`,
      badgeLabel: "Closed",
      color: "closed",
    };
  }
}
