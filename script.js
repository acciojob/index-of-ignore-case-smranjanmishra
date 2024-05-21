function indexOfIgnoreCase(str, subStr) {
  // Convert both the input string and the substring to lower case
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Use the indexOf method to find the first occurrence of the lowercased substring
  const index = lowerStr.indexOf(lowerSubStr);

  // Return the index found, or -1 if not found
  return index;
}


// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
