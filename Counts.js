const unitVacancyCountSheet = () => {
  let unitVacancyDataSpreadsheetData = getUnitVacancyDataSpreadsheetData();

  let vacantCount = [
    {
      name: "MANAGER_NAME_1",
      count: 0,
    },
    {
      name: "MANAGER_NAME_2", 
      count: 0,
    },
    {
      name: "MANAGER_NAME_3", 
      count: 0,
    },
    {
      name: "MANAGER_NAME_4", 
      count: 0,
    },
  ];

  let rentReadyCount = [
    {
      name: "MANAGER_NAME_1",
      count: 0,
    },
    {
      name: "MANAGER_NAME_2", 
      count: 0,
    },
    {
      name: "MANAGER_NAME_3", 
      count: 0,
    },
    {
      name: "MANAGER_NAME_4", 
      count: 0,
    },
  ];

  let incomingMoveoutsCount = [
    {
      name: "MANAGER_NAME_1",
      count: 0,
    },
    {
      name: "MANAGER_NAME_2", 
      count: 0,
    },
    {
      name: "MANAGER_NAME_3", 
      count: 0,
    },
    {
      name: "MANAGER_NAME_4", 
      count: 0,
    },
  ];

  let unitStatusCount = [
    {
      name: "Vacant-Unrented",
      count: 0,
    },
    {
      name: "Notice-Rented", 
      count: 0,
    },
    {
      name: "Notice-Unrented", 
      count: 0,
    },
    {
      name: "Vacant-Rented", 
      count: 0,
    },
  ];

  unitVacancyDataSpreadsheetData.forEach(row => {
    Logger.log(row);
    // Vacancy per portfolio
    if(row.unitStatus.indexOf("Vacant") != -1) {
      let index = vacantCount.findIndex(row2 => row2.name == row.siteManager);

      if(index != -1) {
        vacantCount[index].count == vacantCount[index].count++;
      }
    }
    // Rent Ready per portfolio
    if(row.rentReady == "Yes") {
      let index = rentReadyCount.findIndex(row2 => row2.name == row.siteManager);

      if(index != -1) {
        rentReadyCount[index].count == rentReadyCount[index].count++;
      }
    }
    
    // Incoming Moveounts per portfolio
    if(isWithin30Days(row.lastMoveOut)) {
      let index = incomingMoveoutsCount.findIndex(row2 => row2.name == row.siteManager);

      if(index != -1) {
        incomingMoveoutsCount[index].count == incomingMoveoutsCount[index].count++;
      }
    }
  });

  let data = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Unit Vacancy Daily Count").getDataRange().getValues();
  data.shift();
  for (let i = 0; i < 4; i++) {
    let hold = [
      Utilities.formatDate(new Date(), "GMT+8", "MM/dd/yyyy"),
      vacantCount[i].name,
      vacantCount[i].count,
      rentReadyCount[i].count,
      incomingMoveoutsCount[i].count
    ]
    data.push(hold);
  }

  writeToSpreadsheet3(data);
}

const unitStatusCount = () => {
  let unitVacancyDataSpreadsheetData = getUnitVacancyDataSpreadsheetData();

  let unitStatusCount = [
    {
      name: "Vacant-Unrented",
      count: 0,
    },
    {
      name: "Notice-Rented", 
      count: 0,
    },
    {
      name: "Notice-Unrented", 
      count: 0,
    },
    {
      name: "Vacant-Rented", 
      count: 0,
    },
  ];

  unitVacancyDataSpreadsheetData.forEach(row => {

    // Unit Status
    if(row.unitStatus != "") {
      let index = unitStatusCount.findIndex(row2 => row2.name == row.unitStatus);

      if(index != -1) {
        unitStatusCount[index].count == unitStatusCount[index].count++;
      }
    }
  });


  let data = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Unit Status Daily Count").getDataRange().getValues();
  data.shift();
  for (let i = 0; i < 4; i++) {
    let hold = [
      Utilities.formatDate(new Date(), "GMT+8", "MM/dd/yyyy"),
      unitStatusCount[i].name,
      unitStatusCount[i].count,
    ]
    data.push(hold);
  }

  writeToSpreadsheet4(data);
}

const applicationsManagerCount = () => {
  let rentalApplicationsDataSpreadsheetData = getRentalApplicationsDataSpreadsheetData();

  let applicationsCount = [
    {
      name: "MANAGER_NAME_1",
      count: 0,
    },
    {
      name: "MANAGER_NAME_2", 
      count: 0,
    },
    {
      name: "MANAGER_NAME_3", 
      count: 0,
    },
    {
      name: "MANAGER_NAME_4", 
      count: 0,
    },
  ];

  rentalApplicationsDataSpreadsheetData.forEach(row => {

    // Applications per Manager
    let index = applicationsCount.findIndex(row2 => row2.name == row.siteManager);

    if(index != -1) {
      applicationsCount[index].count == applicationsCount[index].count++;
    }
  });

  let data = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Applications Per Manager Daily Count").getDataRange().getValues();
  data.shift();
  for (let i = 0; i < 4; i++) {
    let hold = [
      Utilities.formatDate(new Date(), "GMT+8", "MM/dd/yyyy"),
      applicationsCount[i].name,
      applicationsCount[i].count,
    ]
    data.push(hold);
  }

  writeToSpreadsheet5(data);
}

const applicationsLeadSourceCount = () => {
  let rentalApplicationsDataSpreadsheetData = getRentalApplicationsDataSpreadsheetData();

  let applicationsCount = [
    {
      name: "No Source Recorded",
      count: 0,
    },
  ];

  rentalApplicationsDataSpreadsheetData.forEach(row => {

    // Applications per Manager
    let index = applicationsCount.findIndex(row2 => row2.name == row.leadSource);

    if(index != -1) {
      applicationsCount[index].count == applicationsCount[index].count++;
    } else {
      let hold = {
        name: row.leadSource,
        count: 1
      }
      applicationsCount.push(hold);
    }
  });

  let data = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Applications Per Lead Source Daily Count").getDataRange().getValues();
  data.shift();
  for (let i = 0; i < applicationsCount.length; i++) {
    let hold = [
      Utilities.formatDate(new Date(), "GMT+8", "MM/dd/yyyy"),
      applicationsCount[i].name,
      applicationsCount[i].count,
    ]
    data.push(hold);
  }

  writeToSpreadsheet6(data);
}