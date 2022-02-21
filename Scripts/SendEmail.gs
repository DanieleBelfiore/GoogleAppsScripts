// This script send an eMail based on the expiration dates in a Google Spreadsheet

function SendEmail() {
  var sheetName = '';
  var days = 2;
  var to = ''
  var cc = ''; // addresses separated by comma

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var limit = GetDate(days);
  var count = 0;

  for (var i = 2; i < sheet.getLastRow(); i++) {
    var expirationDate = sheet.getRange(i, 1).getValue();
    if (expirationDate.valueOf() >= GetDate(-1) && expirationDate.valueOf() <= limit.valueOf()) {
      count++;
    }
  }

  var subject = '';
  var message = '';

  MailApp.sendEmail(to, subject, message, { htmlBody: message, cc: cc });
}

function GetDate(days) {
  return new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + days);
}
