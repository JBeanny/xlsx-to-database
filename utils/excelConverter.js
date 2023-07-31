const XLSX = require("xlsx");

const excelDataConverter = (fileBuffer) => {
  let data = [];
  if (fileBuffer) {
    // Load the Excel file
    const workbook = XLSX.read(fileBuffer, { type: "buffer" });

    // Select the first sheet (You can use specific sheet names as well)
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert the sheet data to JSON format
    data = XLSX.utils.sheet_to_json(sheet);
  }
  return data;
};

module.exports = excelDataConverter;
