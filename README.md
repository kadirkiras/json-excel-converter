# JSON to Excel Converter

A simple Node.js application to convert JSON data to Excel format.

## Features

- Convert JSON arrays or objects to Excel files
- Automatic column width adjustment
- Bold formatting for header row
- Simple command-line interface
- Can be used as a module in other projects

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
const { convertJsonToExcel } = require("json-to-excel");

// Your JSON data (can be an array or object)
const jsonData = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
];

// Save to Excel file
convertJsonToExcel(jsonData, "output.xlsx");
```

### As a Command Line Tool

```bash
# Direct execution
node cli.js data.json [output.xlsx]

# Using npm script
npm run convert data.json [output.xlsx]

# If installed globally
json-to-excel data.json [output.xlsx]
```

#### Parameters:

- `data.json`: Path to the JSON file to convert
- `output.xlsx`: (Optional) Path to save the Excel file. If not provided, the Excel file will be saved with the same name as the input file but with .xlsx extension.

## Example

To convert a sample JSON file:

```bash
# Convert the sample file
npm test
```

This command converts the `sample-data.json` file to `sample-data.xlsx`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [ExcelJS](https://github.com/exceljs/exceljs) - The Excel manipulation library used in this project
