/**
 * Convert the name of the city to Upercase
 */

function titleCase(str) {
  return str
    .split(" ")
    .map(function(word) {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}

export { titleCase };
