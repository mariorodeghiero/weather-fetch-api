/**
 * convert temperature in kelvin
 */
function celsius(tempKelvin) {
  const celsius = Math.round(tempKelvin - 273.15);
  return celsius;
}

function fahrenheit(tempKelvin) {
  const fahrenheit = Math.round((tempKelvin - 273.15) * 1.8 + 32);
  return fahrenheit;
}

export { celsius, fahrenheit };
