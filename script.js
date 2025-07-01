function firstNonRepeatedChar(str) {
  let map = {};

  // Count each character's frequency
  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }

  // Find the first character with frequency 1
  for (let char of str) {
    if (map[char] === 1) {
      return char;
    }
  }

  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
