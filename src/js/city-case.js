/**
 * Convert the name of the city to Upercase
 */

function cityCase(str) {
  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

export { cityCase };
