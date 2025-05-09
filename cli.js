#!/usr/bin/env node

/**
 * @file cli.js
 * @description Command line interface for JSON and Excel converter
 * @author Kadir Kiraş
 * @license MIT
 */

const fs = require('fs');
const path = require('path');
const { convertJsonToExcel, convertExcelToJson } = require('./index');

/**
 * Display help message for the CLI
 */
function showHelp() {
  console.log(`
JSON and Excel Converter

Usage:
  json-to-excel <input> [output] [--to-excel|--to-json]

Arguments:
  input         Path to the input file (JSON or Excel)
  output        (Optional) Path to save the output file. If not provided, 
                the output file will be saved with the same name as the input file
  --to-excel    Convert JSON to Excel (default if input is JSON)
  --to-json     Convert Excel to JSON (default if input is Excel)

Examples:
  json-to-excel data.json
  json-to-excel data.json output.xlsx
  json-to-excel data.xlsx output.json --to-json
  json-to-excel data.json output.xlsx --to-excel
  `);
}

/**
 * Main function that orchestrates the CLI operation
 */
async function main() {
  const args = process.argv.slice(2);
  
  // Show help if no arguments or help flag
  if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
    showHelp();
    process.exit(0);
  }

  // Get input and output paths
  const inputPath = args[0];
  let outputPath = args[1];
  const toExcel = args.includes('--to-excel');
  const toJson = args.includes('--to-json');

  // Validate input file
  if (!fs.existsSync(inputPath)) {
    console.error(`Error: Input file "${inputPath}" does not exist.`);
    process.exit(1);
  }

  try {
    const inputExt = path.extname(inputPath).toLowerCase();
    const isExcel = inputExt === '.xlsx' || inputExt === '.xls';
    const isJson = inputExt === '.json';

    // Determine conversion direction
    let shouldConvertToExcel = toExcel || (!toJson && isJson);
    let shouldConvertToJson = toJson || (!toExcel && isExcel);

    if (!shouldConvertToExcel && !shouldConvertToJson) {
      console.error('Error: Could not determine conversion direction. Please specify --to-excel or --to-json');
      process.exit(1);
    }

    // If output path is not provided, use input path with appropriate extension
    if (!outputPath) {
      const inputParsed = path.parse(inputPath);
      outputPath = path.join(
        inputParsed.dir,
        `${inputParsed.name}${shouldConvertToExcel ? '.xlsx' : '.json'}`
      );
    }

    if (shouldConvertToExcel) {
      // Read and parse the JSON file
      const jsonData = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
      // Convert JSON to Excel
      await convertJsonToExcel(jsonData, outputPath);
    } else {
      // Convert Excel to JSON
      const jsonData = await convertExcelToJson(inputPath);
      // Save JSON data to file
      fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2));
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Run the main function
main();