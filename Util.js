const getAddress = (address) => {

  let hold = address.split(" - ");
  Logger.log(hold[hold.length-1]);

  return hold[hold.length-1];
}

const getAddress2 = (add) => {
  let data = [];
  let hold = add.split(" - ");
  if(hold[1] != undefined) {
    data.push(hold[0]);
    let hold2 = hold[1].split(" (");
    data.push(hold2[0]);
  } else {
    data.push(hold[0]);
    data.push("");
  }

  return data;
}

const isWithin30Days = (date) => {
  let currDate = new Date();
  let date1 = new Date(date);
  let endDate = new Date(currDate.getTime() + (86400000*30));

  if(date1.getTime() >= currDate.getTime() && date1.getTime() <= endDate.getTime()){
    return true;
  } else {
    return false;
  }
}
