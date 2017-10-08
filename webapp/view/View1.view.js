sap.ui.jsview("temp_book.view.View1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.View1
	 */
	getControllerName: function() {
		return "temp_book.controller.View1";
		
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.View1
	 */
	createContent: function(oController) {
		var text1 = new sap.m.Text();
		text1.setText("test");
		var listitem = new sap.m.ListBase();
		listitem.setHeaderText("sHeaderText");
		
	// var oItemtemplate = new sap.m.ObjectListItem("LISTITEM",{
	// 	title:"{ReadActivites>ADV_CAL_ID}",
	// 	text : "{ReadActivites>CalPlace}",
	// 	number :"{ReadActivites>DR_NAME}",
	// 	numberUnit : "{ReadActivites>CalPlndDat}",
	// 	intro : "{ReadActivites>PsrHq}",
	// 	type : sap.m.ListType.Navigation,
	// 	markFavorite : true,
	// 	markFlagged : true
 // });

  var oSorter = new sap.ui.model.Sorter("Id", true, "DESC");
  var point = new sap.suite.ui.microchart.InteractiveLineChartPoint({value: {path:"Temperature",
    formatter: function(value){
       return parseFloat(value);
    }},label: {path:"MeasureDate",formatter: function(value){
       var date = new Date(value);
       return date.getDate();
    }}});
  
  var chart = new sap.suite.ui.microchart.InteractiveLineChart({displayedPoints:31});
  //chart.addPoint(point);
  //var layout = sap.ui.layout.Grid({defaultSpan:"XL12 L12 M12 S12"});
  chart.bindPoints("/Temperatures",point,oSorter);
  
  var flex = sap.m.FlexBox({height:"20rem", alignContent:"Center"});
  //var newchar = new sap.suite.ui.microchart.LineMicroChart();
  //newchar.bindPoints()
  flex.addItem(chart);
  
  var oTable = new sap.m.Table({
  	id:"Temperatures",
  	columns:[
  		new sap.m.Column({
  			width: "1em",
  			header : new sap.m.Label({
  				text: "Id"
  				})
  		})
  		]
  });
  
  
  
  var template = new sap.m.ColumnListItem({
  		id:"first_template",
  		type: "Navigation",
  		visible: true,
  		cells: [
  			new sap.m.Label("id",{text:"{Id}"})
  			]
		
  	});
  	
  	var oFilters = null;
  	oTable.bindItems("/Temperatures",template,null,oFilters);
  
		
		// var oList = new sap.m.List({mode:"SingleSelectMaster", id:"listId",
  //      items:{path:"/Temperatures", template:oItemtemplate}});
        var myDate = new Date();

		myDate.setDate(myDate.getDate());

        var date = new sap.m.DateTimePicker("date",{value:myDate});
        var temp = new sap.m.Input("temp");
        var button = new sap.m.Button({text:"Save", press:[oController.onCreate,oController]});
       //button.attachPress("onCreate");
		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: [
				// text1
				// listitem
				// oList
				]
		});
		
		
		// oPage.addContent(oTable);
		// oPage.addContent(chart);
		oPage.addContent(flex);
		oPage.addContent(date);
		oPage.addContent(temp);
		oPage.addContent(button);
		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});