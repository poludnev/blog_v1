import { getFormatedMonth } from 'src/libs/tiemDate';

const pluralise = (string: string, number: number) => {
  if (number > 2) return `${string}s`;
  return string;
};

export const getElapsedTime = (
  prevTimestamp: number,
  currentTimestamp: number,
): string => {
  const milleseconds = currentTimestamp - prevTimestamp;
  if (milleseconds < 0) return 'Back to the future';
  const minutes = milleseconds / 60000;

  const minutesPerYear = 365 * 24 * 60;
  const years = minutes / minutesPerYear;
  if (years >= 1) return `${Math.round(years)} ${pluralise('year', years)}`;

  const minutesPerMonth = 30 * 24 * 60;
  const months = minutes / minutesPerMonth;
  if (months >= 1) return `${Math.round(months)} ${pluralise('month', months)}`;

  const minutesPerWeek = 7 * 24 * 60;
  const weeks = minutes / minutesPerWeek;
  if (weeks >= 1) return `${Math.round(weeks)} ${pluralise('week', weeks)}`;

  const minutesPerDay = 24 * 60;
  const days = minutes / minutesPerDay;
  if (days >= 1) return `${Math.round(days)} ${pluralise('day', days)}`;

  const minutesPerHour = 60;
  const hours = minutes / minutesPerHour;
  if (hours >= 1) return `${Math.round(hours)} ${pluralise('hour', hours)}`;

  if (minutes >= 1)
    return `${Math.round(minutes)} ${pluralise('minute', minutes)}`;

  return 'Less than minute';
};

export const getFormatedDate = (timestamp: number): string => {
  const date = new Date(timestamp);

  const localHours: string = date.getHours().toString().padStart(2, '0');
  const localMinutes: string = date.getMinutes().toString().padStart(2, '0');
  const localTime: string = `${localHours}:${localMinutes}`;

  const day: number = date.getDate();
  const month: number = date.getMonth();
  const year: number = date.getFullYear();

  const formatedMonth: string = getFormatedMonth(month);
  const localDate: string = `${formatedMonth} ${day}, ${year}`;

  return `${localDate} at ${localTime}`;
};

const timeDateService = { getElapsedTime, getFormatedDate };
export default timeDateService;
