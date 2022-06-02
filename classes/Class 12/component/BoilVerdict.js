export default function BoilVerdict({ celsius }) {
  if (celsius >= 100) {
    return <p>The temperatur is boil</p>;
  }
  return <p>The temperatur is not boil</p>;
}
