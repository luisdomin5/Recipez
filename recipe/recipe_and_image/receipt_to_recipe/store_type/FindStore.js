const parseImage = require('../../TextClassify');


async function getStore(filePath) {
  var storename = await parseImage(filePath);
  storename = storename[1].description.toLowerCase();
  if (storename === "target") {
    return 0;
  }
  if (storename === "walmart") {
    return 1;
  }
  if (storename === "trader") {
    return 2;
  }
  return -1;
}

async function getStoreCode (filePath) {
  try {
    var storeCode = await getStore(filePath);
    return storeCode;
  }
  catch (error) {
    return error;
  }
}

module.exports = getStoreCode;
