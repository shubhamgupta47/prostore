import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert prisma object to a regular javascript object
export function covertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// Format number with decimal places
export function formatNumberWithDecimal(num: number): string {
  const [integerPart, decimalPart] = num.toString().split('.');
  return decimalPart
    ? `${integerPart}.${decimalPart.padEnd(2, '0')}`
    : `${integerPart}.00`;
}
