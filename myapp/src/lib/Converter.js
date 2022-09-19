export function toCelsius(farhenheit) {
  return ((farhenheit - 32) * 5) / 9;
}

export function toFarhenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function convert(temperature, converTo) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = converTo(input);
  const round = Math.round(output * 1000) / 1000;
  return round.toString();
}
