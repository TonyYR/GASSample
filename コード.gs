function logProductInfo() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  for (var i = 0; i < data.length; i++)
  {
    Logger.log('Product name: ' + data[i][0]);
    Logger.log('Product number:' + data[i][1]);
  }
}

function addProduct() {
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow(['Cotton Sweatshirt XL', 'css004']);
}
