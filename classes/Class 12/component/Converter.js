export function toCelsius(farhenheit) {
  return ((farhenheit - 32) * 5) / 9;
}
export function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
export function convert(Temperature, convertTo) {
  const temp = parseFloat(Temperature);
  if (Number.isNaN(temp)) {
    return '';
  }

  const output = convertTo(temp);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
