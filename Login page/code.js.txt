function doGet(request) {
  return HtmlService.createTemplateFromFile('login').evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  
}


function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url="https://docs.google.com/spreadsheets/d/142Oe1RiSzSEgiZvinmn-xP5JTzsCHyfe_PorucyIYAk/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("Members Data");

  ws.appendRow([
    
    formObject.email,
    formObject.password,
    formObject.name

  ]);
}

function checkLogin(email, password) {
  var url="https://docs.google.com/spreadsheets/d/142Oe1RiSzSEgiZvinmn-xP5JTzsCHyfe_PorucyIYAk/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("Members Data");
  var getLastRow =  webAppSheet.getLastRow();
  var found_record = '';
  for(var i = 1; i <= getLastRow; i++)
  {
   if(webAppSheet.getRange(i, 1).getValue().toUpperCase() == email.toUpperCase() && 
     webAppSheet.getRange(i, 2).getValue().toUpperCase() == password.toUpperCase())
   {
     found_record = 'TRUE';
   }    
  }
  if(found_record == '')
  {
    found_record = 'FALSE'; 
  }
  
  return found_record;
  
}