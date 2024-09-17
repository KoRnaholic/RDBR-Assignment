import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr) {
  const date = new Date(dateStr);

  // Extract month, day, and year
  const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth is zero-based, so add 1
  const day = String(date.getDate()).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year

  const formattedDate = `${month}/${day}/${year}`;

  return formattedDate;
}
