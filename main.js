function convertHTML(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if      (str[i] === "&")  result += "&amp;";
    else if (str[i] === "<")  result += "&lt;";
    else if (str[i] === ">")  result += "&gt;";
    else if (str[i] === "\"") result += "&quot;";
    else if (str[i] === "'")  result += "&apos;";
    else                      result += str[i]; // pass non-special chars through
  }
  return result; 
}

console.log(convertHTML("Dolce & Gabbana")); // "Dolce &amp; Gabbana"
