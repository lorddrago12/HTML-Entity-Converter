# 🔤 HTML Entity Converter

A lightweight JavaScript utility that escapes special HTML characters in a string by replacing them with their safe HTML entity equivalents — preventing XSS vulnerabilities and ensuring correct rendering in HTML documents.

---

## ✨ Features

- Converts all 5 reserved HTML characters to their entity equivalents
- Passes all non-special characters through unchanged
- Zero dependencies — pure vanilla JavaScript
- Runs in any environment (browser or Node.js)

---

## 🚀 Usage

```js
function convertHTML(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if      (str[i] === "&")  result += "&amp;";
    else if (str[i] === "<")  result += "&lt;";
    else if (str[i] === ">")  result += "&gt;";
    else if (str[i] === "\"") result += "&quot;";
    else if (str[i] === "'")  result += "&apos;";
    else                      result += str[i];
  }
  return result;
}
```

```js
convertHTML("Dolce & Gabbana");               // → "Dolce &amp; Gabbana"
convertHTML("<h1>Hello</h1>");                // → "&lt;h1&gt;Hello&lt;/h1&gt;"
convertHTML("<script>alert('xss')</script>"); // → "&lt;script&gt;alert(&apos;xss&apos;)&lt;/script&gt;"
convertHTML('He said "Hello"');               // → "He said &quot;Hello&quot;"
convertHTML("No special chars here");         // → "No special chars here"
```

---

## 🧠 How It Works

The function scans each character of the input string one by one and checks it against the 5 reserved HTML characters. Matches are replaced with their entity; everything else is appended as-is.

| Character | HTML Entity | Reason |
|-----------|-------------|--------|
| `&`       | `&amp;`     | Starts all HTML entities — must be escaped |
| `<`       | `&lt;`      | Opens HTML tags |
| `>`       | `&gt;`      | Closes HTML tags |
| `"`       | `&quot;`    | Delimits attribute values |
| `'`       | `&apos;`    | Delimits attribute values (single-quote form) |

Example: `convertHTML("<b>Hi & Bye</b>")`

```
'<'  →  &lt;
'b'  →  b
'>'  →  &gt;
'H'  →  H
'i'  →  i
' '  →  (space)
'&'  →  &amp;
...

Result: "&lt;b&gt;Hi &amp; Bye&lt;/b&gt;" ✓
```

---

## 🧪 Test Cases

| Input | Expected Output |
|-------|----------------|
| `"Dolce & Gabbana"` | `"Dolce &amp; Gabbana"` |
| `"<h1>Hello</h1>"` | `"&lt;h1&gt;Hello&lt;/h1&gt;"` |
| `"She said \"hi\""` | `"She said &quot;hi&quot;"` |
| `"it's fine"` | `"it&apos;s fine"` |
| `"No special chars"` | `"No special chars"` |

---

## 📁 Project Structure

```
.
└── main.js   # Core converter function with example usage
```

---

## 🛠️ Getting Started

Clone the repo:

```bash
git clone https://github.com/lorddrago12/HTML-Entity-Converter.git
cd HTML-Entity-Converter
```

Run it (Node.js):

```bash
node main.js
```

No dependencies. No build step. Just plain JavaScript.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your branch: `git checkout -b feature/my-change`
3. Commit your changes: `git commit -m 'Add my change'`
4. Push to the branch: `git push origin feature/my-change`
5. Open a Pull Request
