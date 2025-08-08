const getUnitVacancyData = () => {
  let sheetData = SpreadsheetApp.openById(UNIT_VACANCY_SHEET_ID).getSheetByName("Sheet1").getDataRange().getValues();

  sheetData.shift(); sheetData.shift(); sheetData.shift(); sheetData.shift(); sheetData.shift(); sheetData.shift(); sheetData.shift();
  let data = [];
  sheetData.forEach(row => {
    if(row[1] != "") {
      let hold = {
        address: row[0],
        unit: row[1],
        city: row[2],
        state: row[3],
        zip: row[4],
        bed_bath: row[5],
        sqft: row[6],
        unitStatus: row[7],
        daysVacant: row[8],
        scheduledRent: row[9],
        rentReady: row[10],
        lastMoveOut: row[11],
        availableOn: row[12],
        nextMoveIn: row[13],
      };
      data.push(hold);
    }
    
  });

  return data;
}

const getRentalApplicationsData = () => {
  let sheetData = SpreadsheetApp.openById(RENTAL_APPLICATIONS_SHEET_ID).getSheetByName("Sheet1").getDataRange().getValues();

  sheetData.shift(); sheetData.shift(); sheetData.shift(); sheetData.shift(); sheetData.shift(); sheetData.shift(); sheetData.shift(); sheetData.shift(); sheetData.shift();
  let data = [];
  sheetData.forEach(row => {
    if(row[2] != "") {
      let hold = {
        address: row[0],
        unit: row[1],
        city: row[2],
        state: row[3],
        zip: row[4],
        receivedDate: row[5],
        desiredMoveIn: row[6],
        assignedUser: row[7],
        leadSource: row[8],
        petKinds: row[9],
      };
      data.push(hold);
    }

  });

  return data;
}

const getPropertyDirectoryData = () => {
  let sheetData = SpreadsheetApp.openById(PROPERTY_DIRECTORY_SHEET_ID).getSheetByName("Sheet1").getDataRange().getValues();

  sheetData.shift(); sheetData.shift(); sheetData.shift(); sheetData.shift(); sheetData.shift(); sheetData.shift();
  let data = [];
  sheetData.forEach(row => {
    if(row[2] != "") {
      let hold = {
        address: row[0],
        city: row[1],
        state: row[2],
        zip: row[3],
        units: row[4],
        siteManager: row[5],
      };
      data.push(hold);
    }
    
  });

  return data;
}

const getUnitVacancyDataSpreadsheetData = () => {
  let sheetData = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Unit Vacancy").getDataRange().getValues();
  sheetData.shift();
  let data = [];
  sheetData.forEach(row => {
    let hold = {
      address: row[0],
      city: row[1],
      state: row[2],
      zip: row[3],
      bed_bath: row[4],
      sqft: row[5],
      unitStatus: row[6],
      daysVacant: row[7],
      scheduledRent: row[8],
      rentReady: row[9],
      lastMoveOut: row[10],
      availableOn: row[11],
      nextMoveIn: row[12],
      siteManager: row[13]
    };
    data.push(hold);
  });
  return data;
}

const getRentalApplicationsDataSpreadsheetData = () => {
  let sheetData = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Rental Applications").getDataRange().getValues();
  sheetData.shift();
  let data = [];
  sheetData.forEach(row => {
    let hold = {
      address: row[0],
      unit: row[1],
      city: row[2],
      state: row[3],
      zip: row[4],
      receivedDate: row[5],
      desiredMoveIn: row[6],
      assignedUser: row[7],
      leadSource: row[8],
      petKinds: row[9],
      siteManager: row[10]
    };
    data.push(hold);
  });
  return data;
}