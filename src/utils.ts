export function formatPostDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

const pluralize = (count: number, unit: string): string => `${count} ${unit}${count === 1 ? '' : 's'}`;

// Whole calendar months from start to end. Uses UTC so the result does not depend on the build machine's timezone.
function monthsBetween(start: Date, end: Date): number {
  const months = (end.getUTCFullYear() - start.getUTCFullYear()) * 12 + end.getUTCMonth() - start.getUTCMonth();
  return end.getUTCDate() < start.getUTCDate() ? months - 1 : months;
}

export function formatDuration(start: Date, end: Date): string {
  const totalMonths = monthsBetween(start, end);
  if (totalMonths < 1) return 'less than a month';

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [years > 0 && pluralize(years, 'year'), months > 0 && pluralize(months, 'month')];
  return parts.filter(Boolean).join(', ');
}
