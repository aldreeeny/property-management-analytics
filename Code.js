const unitVacancies = () => {
  let unitVacancyData = getUnitVacancyData();
  let propertyDirectoryData = getPropertyDirectoryData();
  let data = [];
  unitVacancyData.forEach(row => {
    let address1 = getAddress(row.address);
    let found = propertyDirectoryData.find(row2 => {
      let address2 = row2.address +" "+ row2.city +", "+ row2.state +" "+ row2.zip
      if(address1 == address2) {
          return true;
        } else {
          return false;
        }
    });

    if(found != undefined) {
      let hold = [
        row.address,
        row.city,
        row.state,
        row.zip,
        row.bed_bath,
        row.sqft,
        row.unitStatus,
        row.daysVacant,
        row.scheduledRent,
        row.rentReady,
        row.lastMoveOut,
        row.availableOn,
        row.nextMoveIn,
        found.siteManager
      ];
      data.push(hold);
    } else {
      let hold = [
        row.address,
        row.city,
        row.state,
        row.zip,
        row.bed_bath,
        row.sqft,
        row.unitStatus,
        row.daysVacant,
        row.scheduledRent,
        row.rentReady,
        row.lastMoveOut,
        row.availableOn,
        row.nextMoveIn,
        ""
      ];
      data.push(hold);
    }
  });
  Logger.log("writing to sheet");
  writeToSpreadsheet(data);

  unitVacancyCountSheet();
  unitStatusCount();
}

const rentalApplications = () => {
  let rentalApplicationsData = getRentalApplicationsData();
  let propertyDirectoryData = getPropertyDirectoryData();
  let data = [];
  rentalApplicationsData.forEach(row => {
    let add = getAddress2(row.address);
    let found = propertyDirectoryData.find(row2 => {
      if(row2.address.indexOf(add[0]) != -1 && row2.address.indexOf(add[1]) != -1) {
          return true;
        } else {
          return false;
        }
    });

    if(found != undefined) {
      let hold = [
        row.address,
        row.unit,
        row.city,
        row.state,
        row.zip,
        row.receivedDate,
        row.desiredMoveIn,
        row.assignedUser,
        row.leadSource,
        row.petKinds,
        found.siteManager
      ];
      data.push(hold);
    } else {
      let hold = [
        row.address,
        row.unit,
        row.city,
        row.state,
        row.zip,
        row.receivedDate,
        row.desiredMoveIn,
        row.assignedUser,
        row.leadSource,
        row.petKinds,
        ""
      ];
      data.push(hold);
    }
  });
  Logger.log("writing to sheet");
  writeToSpreadsheet2(data);

  applicationsManagerCount();
  applicationsLeadSourceCount();
}

