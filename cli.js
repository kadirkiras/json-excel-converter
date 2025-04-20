#!/usr/bin/env node

/**
 * @file cli.js
 * @description Command line interface for JSON to Excel converter
 * @author Kadir Kiraş
 * @license MIT
 */

const fs = require('fs');
const path = require('path');
const { convertJsonToExcel } = require('./index');

/**
 * Display help message for the CLI
 */
function showHelp() {
  console.log(`
JSON to Excel Converter

Usage:
  json-to-excel <input.json> [output.xlsx]

Arguments:
  input.json    Path to the JSON file to convert
  output.xlsx   (Optional) Path to save the Excel file. If not provided, 
                the Excel file will be saved with the same name as the input file

Examples:
  json-to-excel data.json
  json-to-excel data.json output.xlsx
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

  // Validate input file
  if (!fs.existsSync(inputPath)) {
    console.error(`Error: Input file "${inputPath}" does not exist.`);
    process.exit(1);
  }

  try {
    // If output path is not provided, use input path with xlsx extension
    if (!outputPath) {
      const inputParsed = path.parse(inputPath);
      outputPath = path.join(inputParsed.dir, `${inputParsed.name}.xlsx`);
    }

    // Read and parse the JSON file
    const jsonData = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
    
    // Convert JSON to Excel
    await convertJsonToExcel(jsonData, outputPath);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Run the main function
main();