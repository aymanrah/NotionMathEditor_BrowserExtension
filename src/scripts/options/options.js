
console.log("NM.option : RUNNING");


var gcontroller = Controller(content_page = false);
var global_storage = StorageManager();
var gview = View();
var gmodel = Model();

global_storage.load();
gmodel.init();
gview.init();
gcontroller.init();


gview.refreshStoredCodesView();

function restart_options(){
  gcontroller = Controller();
  global_storage = StorageManager();
  gview = View();
  gmodel = Model();


  global_storage.load();
  gmodel.init();
  gview.init();
  gcontroller.init();

  gcontroller.requestCodesToContent();

  gview.refreshStoredCodesView();
}
