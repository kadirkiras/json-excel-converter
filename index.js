/**
 * @file index.js
 * @description Main module for converting between JSON and Excel formats
 * @author Kadir Kiraş
 * @license MIT
 */

const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");

/**
 * Converts JSON data to Excel format
 * @param {Object|Array} jsonData - The JSON data to convert (object or array)
 * @param {string} outputPath - Path to save the Excel file
 * @returns {Promise<void>} A promise that resolves when the Excel file is created
 * @throws {Error} If the conversion process fails
 */
async function convertJsonToExcel(jsonData, outputPath) {
  try {
    // Create a new Excel workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet 1");

    // If jsonData is an array, process it directly
    // If it's an object, wrap it in an array
    const dataArray = Array.isArray(jsonData) ? jsonData : [jsonData];

    if (dataArray.length === 0) {
      console.log("No data to convert");
      return;
    }

    // Extract headers from the first object
    const headers = Object.keys(dataArray[0]);

    // Add headers to the worksheet
    worksheet.addRow(headers);

    // Add data rows
    dataArray.forEach((item) => {
      const row = [];
      headers.forEach((header) => {
        row.push(item[header] !== undefined ? item[header] : "");
      });
      worksheet.addRow(row);
    });

    // Apply some formatting to the header row
    worksheet.getRow(1).font = { bold: true };

    // Auto-fit columns
    worksheet.columns.forEach((column) => {
      let maxLength = 0;
      column.eachCell({ includeEmpty: true }, (cell) => {
        const columnLength = cell.value ? cell.value.toString().length : 10;
        if (columnLength > maxLength) {
          maxLength = columnLength;
        }
      });
      column.width = maxLength < 10 ? 10 : maxLength + 2;
    });

    // Save the Excel file
    await workbook.xlsx.writeFile(outputPath);
    console.log(`Excel file created successfully at: ${outputPath}`);
  } catch (error) {
    console.error("Error converting JSON to Excel:", error);
    throw error; // Re-throw the error for better error handling
  }
}

/**
 * Converts Excel file to JSON format
 * @param {string} excelPath - Path to the Excel file
 * @returns {Promise<Array>} A promise that resolves with the JSON data
 * @throws {Error} If the conversion process fails
 */
async function convertExcelToJson(excelPath) {
  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelPath);
    
    const worksheet = workbook.getWorksheet(1); // Get the first worksheet
    if (!worksheet) {
      throw new Error("No worksheet found in the Excel file");
    }

    const headers = [];
    const jsonData = [];

    // Get headers from the first row
    worksheet.getRow(1).eachCell((cell) => {
      headers.push(cell.value);
    });

    // Process each row starting from the second row
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return; // Skip header row

      const rowData = {};
      row.eachCell((cell, colNumber) => {
        const header = headers[colNumber - 1];
        if (header) {
          rowData[header] = cell.value;
        }
      });
      jsonData.push(rowData);
    });

    return jsonData;
  } catch (error) {
    console.error("Error converting Excel to JSON:", error);
    throw error;
  }
}

// Example usage when this file is run directly
if (require.main === module) {
  // Sample JSON data
  const sampleData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      age: 30,
      city: "New York",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      age: 25,
      city: "London",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      age: 35,
      city: "Paris",
    },
  ];

  // Output file paths
  const excelOutputFile = path.join(__dirname, "output.xlsx");
  const jsonOutputFile = path.join(__dirname, "output.json");

  // Convert JSON to Excel
  convertJsonToExcel(sampleData, excelOutputFile)
    .then(() => {
      // Convert Excel back to JSON
      return convertExcelToJson(excelOutputFile);
    })
    .then((jsonData) => {
      // Save JSON data to file
      fs.writeFileSync(jsonOutputFile, JSON.stringify(jsonData, null, 2));
      console.log(`JSON file created successfully at: ${jsonOutputFile}`);
    })
    .catch((error) => {
      console.error("Error in conversion process:", error);
    });
}

module.exports = { convertJsonToExcel, convertExcelToJson };
