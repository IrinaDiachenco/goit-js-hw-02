function formatString(string, maxLength = 40) {
  // Write code under this line
  const stringLength = string.split("");
  if (stringLength.length > maxLength) {
    stringLength.length = maxLength;
    return stringLength.join("") + "...";
  } else if (
    (stringLength.length = maxLength || stringLength.length < maxLength)
  ) {
    return stringLength.join("");
  }
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
