export function kelvinToCelcius(val: string | number) {
  const num = typeof val === "string" ? parseFloat(val) : val;
  return (num - 273.15).toFixed(1);
}

export function getDayName(
  dateStr: string,
  locale: Intl.LocalesArgument,
  length?: "long" | "short" | "narrow",
) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: length || "long" });
}
