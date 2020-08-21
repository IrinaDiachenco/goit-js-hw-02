function formatString(string, maxLength = 40) {
  // Write code under this line
  if (stringLength.length > maxLength) {
    stringLength.length = maxLength + "...";
    return stringLength.split(0, maxLength) + "...";
  }
  return stringLength;
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
