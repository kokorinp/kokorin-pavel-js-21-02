export const DateToString = (d: string): string => {
  const o: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(d).toLocaleString('ru', o);
};
