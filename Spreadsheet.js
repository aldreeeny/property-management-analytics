const writeToSpreadsheet = (sheetData) => {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Unit Vacancy");
  Logger.log(sheet);
  sheet.getRange("A2:O").clearContent();
  sheet.getRange(2, 1, sheetData.length, sheetData[0].length).setValues(sheetData);
}

const writeToSpreadsheet2 = (sheetData) => {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Rental Applications");
  Logger.log(sheet);
  sheet.getRange("A2:O").clearContent();
  sheet.getRange(2, 1, sheetData.length, sheetData[0].length).setValues(sheetData);
}

const writeToSpreadsheet3 = (sheetData) => {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Unit Vacancy Daily Count");
  Logger.log(sheet);
  sheet.getRange("A2:O").clearContent();
  sheet.getRange(2, 1, sheetData.length, sheetData[0].length).setValues(sheetData);
}

const writeToSpreadsheet4 = (sheetData) => {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Unit Status Daily Count");
  Logger.log(sheet);
  sheet.getRange("A2:O").clearContent();
  sheet.getRange(2, 1, sheetData.length, sheetData[0].length).setValues(sheetData);
}

const writeToSpreadsheet5 = (sheetData) => {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Applications Per Manager Daily Count");
  Logger.log(sheet);
  sheet.getRange("A2:O").clearContent();
  sheet.getRange(2, 1, sheetData.length, sheetData[0].length).setValues(sheetData);
}

const writeToSpreadsheet6 = (sheetData) => {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Applications Per Lead Source Daily Count");
  Logger.log(sheet);
  sheet.getRange("A2:O").clearContent();
  sheet.getRange(2, 1, sheetData.length, sheetData[0].length).setValues(sheetData);
}