# JSON and Excel Converter

A simple Node.js application to convert between JSON and Excel formats. This is an open-source project that provides bidirectional conversion capabilities.

## Features

- Convert JSON arrays or objects to Excel files
- Convert Excel files to JSON format
- Automatic column width adjustment
- Bold formatting for header row
- Simple command-line interface
- Can be used as a module in other projects
- Supports both .xlsx and .xls formats
- Automatic format detection based on file extension

## Installation

```bash
# Clone the repository
git clone https://github.com/kadirkiras/json-to-excel.git

# Navigate to the directory
cd json-to-excel

# Install dependencies
npm install

# Optional: Install globally
npm install -g .
```

## Usage

### As a Module

```javascript
const { convertJsonToExcel, convertExcelToJson } = require("json-to-excel");

// Convert JSON to Excel
const jsonData = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
];
await convertJsonToExcel(jsonData, "output.xlsx");

// Convert Excel to JSON
const jsonData = await convertExcelToJson("input.xlsx");
```

### As a Command Line Tool

```bash
# Convert JSON to Excel
json-to-excel data.json [output.xlsx]
json-to-excel data.json output.xlsx --to-excel

# Convert Excel to JSON
json-to-excel data.xlsx [output.json]
json-to-excel data.xlsx output.json --to-json
```

#### Parameters:

- `input`: Path to the input file (JSON or Excel)
- `output`: (Optional) Path to save the output file. If not provided, the output file will be saved with the same name as the input file but with appropriate extension
- `--to-excel`: Force conversion to Excel format
- `--to-json`: Force conversion to JSON format

If neither `--to-excel` nor `--to-json` is specified, the conversion direction is automatically determined based on the input file extension.

## Example

To convert sample files:

```bash
# Convert JSON to Excel
npm run convert sample-data.json

# Convert Excel to JSON
npm run convert sample-data.xlsx
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. This is an open-source project, and we appreciate any help in making it better.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development

To set up the development environment:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run linting
npm run lint
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [ExcelJS](https://github.com/exceljs/exceljs) - The Excel manipulation library used in this project

## Support

If you find this project helpful, please consider giving it a star on GitHub. For issues and feature requests, please use the GitHub issue tracker.
