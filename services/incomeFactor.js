module.exports.get = async function (incomeId) {
  let incomeFactor = 1;
  switch (parseInt(incomeId)) {
    case 1: {
      incomeFactor = 800;
      break;
    }
    case 2: {
      incomeFactor = 1000;
      break;
    }
    case 3: {
      incomeFactor = 1200;
      break;
    }
    case 4: {
      incomeFactor = 1500;
      break;
    }
    case 5: {
      incomeFactor = 2000;
      break;
    }
    default:
      break;
  }
  console.log("IncomeFactor: ", incomeFactor);
  return { success: true, message: "", data: incomeFactor };
};
