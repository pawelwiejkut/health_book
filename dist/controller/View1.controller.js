sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("temp_book.controller.View1", {

 onCreate: function() {
   /*create operation*/
   var oModel = this.getView().getModel();
   var date = new Date(sap.ui.getCore().byId("date").getValue());
   var oEntry = {};

   oEntry.MeasureDate = "/Date(" + date.getTime() + ")/";
   oEntry.Temperature = sap.ui.getCore().byId("temp").getValue();

// alert(oEntry.MeasureDate);

   oModel.create("/Temperatures", oEntry,null,function(oData) {
   	
  	
});
oModel.refresh();

}
});
});