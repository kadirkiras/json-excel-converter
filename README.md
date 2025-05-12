# JSON and Excel Converter

[![npm version](https://badge.fury.io/js/%40kadirkiras%2Fjson-excel-converter.svg)](https://badge.fury.io/js/%40kadirkiras%2Fjson-excel-converter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A powerful Node.js application that provides bidirectional conversion between JSON and Excel formats. This tool is perfect for data analysts, developers, and anyone who needs to work with both JSON and Excel files.

## ✨ Features

- 🔄 Bidirectional conversion (JSON ↔ Excel)
- 📊 Automatic column width adjustment
- 🎨 Bold formatting for header rows
- 📝 Support for both .xlsx and .xls formats
- 🔍 Automatic format detection
- 🛠️ Simple command-line interface
- 📦 Can be used as a module in other projects
- 🚀 High performance with large datasets
- 💪 Error handling and validation

## 📦 Installation

```bash
# Install globally
npm install -g @kadirkiras/json-excel-converter

# Install as a project dependency
npm install @kadirkiras/json-excel-converter
```

## 🚀 Usage

### Command Line Interface

```bash
# Convert JSON to Excel
json-excel-converter data.json [output.xlsx]
json-excel-converter data.json output.xlsx --to-excel

# Convert Excel to JSON
json-excel-converter data.xlsx [output.json]
json-excel-converter data.xlsx output.json --to-json
```

#### Command Line Options

| Option       | Description                      |
| ------------ | -------------------------------- |
| `--to-excel` | Force conversion to Excel format |
| `--to-json`  | Force conversion to JSON format  |
| `--help`     | Show help message                |
| `--version`  | Show version number              |

### As a Module

```javascript
const {
  convertJsonToExcel,
  convertExcelToJson,
} = require("@kadirkiras/json-excel-converter");

// Convert JSON to Excel
const jsonData = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
];
await convertJsonToExcel(jsonData, "output.xlsx");

// Convert Excel to JSON
const jsonData = await convertExcelToJson("input.xlsx");
```

## 📝 Examples

### JSON to Excel

```javascript
const data = [
  { name: "John", age: 30, city: "New York" },
  { name: "Jane", age: 25, city: "London" },
];
await convertJsonToExcel(data, "output.xlsx");
```

### Excel to JSON

```javascript
const jsonData = await convertExcelToJson("input.xlsx");
console.log(jsonData);
// Output:
// [
//   { name: "John", age: 30, city: "New York" },
//   { name: "Jane", age: 25, city: "London" }
// ]
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate.

## 🧪 Development

```bash
# Clone the repository
git clone https://github.com/kadirkiras/json-excel-converter.git

# Install dependencies
npm install

# Run tests
npm test

```

## 📚 Documentation

For more detailed documentation, please visit our [GitHub Wiki](https://github.com/kadirkiras/json-excel-converter/wiki).

## 🐛 Known Issues

- Large Excel files (>100MB) might take longer to process
- Complex Excel formulas are not supported in conversion

## 🔜 Roadmap

- [ ] Support for Excel formulas
- [ ] Custom styling options
- [ ] Multiple sheet support
- [ ] Progress bar for large files
- [ ] Web interface

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [ExcelJS](https://github.com/exceljs/exceljs) - The Excel manipulation library used in this project
- All contributors who have helped shape this project

## 📞 Support

If you find this project helpful, please consider giving it a star on GitHub. For issues and feature requests, please use the [GitHub issue tracker](https://github.com/kadirkiras/json-excel-converter/issues).

## 🤝 Connect

- GitHub: [@kadirkiras](https://github.com/kadirkiras)
- Twitter: [@kadirkiras](https://twitter.com/kadirkiras)
- LinkedIn: [Kadir Kiraş](https://linkedin.com/in/kadirkiras)
