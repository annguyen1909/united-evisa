import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Generates a unique application ID for visa applications
 * Format: [CountryCode][UniqueNumber]
 * Example: US123456, GB789012
 * 
 * @param destinationId - Country slug or code (e.g., "united-states" or "US")
 * @returns A unique application ID
 */
export function generateApplicationId(destinationId: string): string {
  // Extract country code - either use the first 2 chars if it's already a code,
  // or extract from slug like "united-states" -> "US"
  let countryCode = '';
  
  if (destinationId.length <= 2) {
    // Already a code
    countryCode = destinationId.toUpperCase();
  } else if (destinationId.includes('-')) {
    // It's a slug, try to get first letters of each word
    countryCode = destinationId
      .split('-')
      .map(word => word[0]?.toUpperCase() || '')
      .join('')
      .slice(0, 2); // Take first 2 chars
  } else {
    // Just use first 2 chars
    countryCode = destinationId.slice(0, 2).toUpperCase();
  }
  
  // Ensure we have a valid code - default to "XX" if not
  if (!countryCode || countryCode.length < 2) {
    countryCode = "XX";
  }
  
  // Generate a timestamp-based unique number
  // Using the last 6 digits of the current timestamp + a random offset
  const timestamp = Date.now();
  const lastSixOfTimestamp = timestamp % 1000000; // Last 6 digits of timestamp
  const randomOffset = Math.floor(Math.random() * 1000); // Add some randomness
  
  // Combine timestamp and random offset, ensuring it's 6 digits with leading zeros
  let uniqueNum = (lastSixOfTimestamp + randomOffset) % 1000000;
  const uniqueNumStr = uniqueNum.toString().padStart(6, '0');
  
  // Combine to create the application ID
  return `${countryCode}${uniqueNumStr}`;
}