/**
* This file was auto-generated by SAP Web IDE build and includes all
* the source files required by SAPUI5 runtime for performance optimization.
* PLEASE DO NOT EDIT THIS FILE!! Changes will be overwritten the next time the build is run.
*/
jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "temp_book/Component-preload",
	"modules": {
		"temp_book/view/View1.view.js": "sap.ui.jsview(\"temp_book.view.View1\", {\n\n\t/** Specifies the Controller belonging to this View. \n\t * In the case that it is not implemented, or that \"null\" is returned, this View does not have a Controller.\n\t * @memberOf controller.View1\n\t */\n\tgetControllerName: function() {\n\t\treturn \"temp_book.controller.View1\";\n\t\t\n\t},\n\n\t/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. \n\t * Since the Controller is given to this method, its event handlers can be attached right away.\n\t * @memberOf controller.View1\n\t */\n\tcreateContent: function(oController) {\n\t\tvar text1 = new sap.m.Text();\n\t\ttext1.setText(\"test\");\n\t\tvar listitem = new sap.m.ListBase();\n\t\tlistitem.setHeaderText(\"sHeaderText\");\n\t\t\n\t// var oItemtemplate = new sap.m.ObjectListItem(\"LISTITEM\",{\n\t// \ttitle:\"{ReadActivites>ADV_CAL_ID}\",\n\t// \ttext : \"{ReadActivites>CalPlace}\",\n\t// \tnumber :\"{ReadActivites>DR_NAME}\",\n\t// \tnumberUnit : \"{ReadActivites>CalPlndDat}\",\n\t// \tintro : \"{ReadActivites>PsrHq}\",\n\t// \ttype : sap.m.ListType.Navigation,\n\t// \tmarkFavorite : true,\n\t// \tmarkFlagged : true\n // });\n\n  var oSorter = new sap.ui.model.Sorter(\"Id\", true, \"DESC\");\n  var point = new sap.suite.ui.microchart.InteractiveLineChartPoint({value: {path:\"Temperature\",\n    formatter: function(value){\n       return parseFloat(value);\n    }},label: {path:\"MeasureDate\",formatter: function(value){\n       var date = new Date(value);\n       return date.getDate();\n    }}});\n  \n  var chart = new sap.suite.ui.microchart.InteractiveLineChart({displayedPoints:31});\n  //chart.addPoint(point);\n  //var layout = sap.ui.layout.Grid({defaultSpan:\"XL12 L12 M12 S12\"});\n  chart.bindPoints(\"/Temperatures\",point,oSorter);\n  \n  var flex = sap.m.FlexBox({height:\"20rem\", alignContent:\"Center\"});\n  //var newchar = new sap.suite.ui.microchart.LineMicroChart();\n  //newchar.bindPoints()\n  flex.addItem(chart);\n  \n  var oTable = new sap.m.Table({\n  \tid:\"Temperatures\",\n  \tcolumns:[\n  \t\tnew sap.m.Column({\n  \t\t\twidth: \"1em\",\n  \t\t\theader : new sap.m.Label({\n  \t\t\t\ttext: \"Id\"\n  \t\t\t\t})\n  \t\t})\n  \t\t]\n  });\n  \n  \n  \n  var template = new sap.m.ColumnListItem({\n  \t\tid:\"first_template\",\n  \t\ttype: \"Navigation\",\n  \t\tvisible: true,\n  \t\tcells: [\n  \t\t\tnew sap.m.Label(\"id\",{text:\"{Id}\"})\n  \t\t\t]\n\t\t\n  \t});\n  \t\n  \tvar oFilters = null;\n  \toTable.bindItems(\"/Temperatures\",template,null,oFilters);\n  \n\t\t\n\t\t// var oList = new sap.m.List({mode:\"SingleSelectMaster\", id:\"listId\",\n  //      items:{path:\"/Temperatures\", template:oItemtemplate}});\n        var myDate = new Date();\n\n\t\tmyDate.setDate(myDate.getDate());\n\n        var date = new sap.m.DateTimePicker(\"date\",{value:myDate});\n        var temp = new sap.m.Input(\"temp\");\n        var button = new sap.m.Button({text:\"Save\", press:[oController.onCreate,oController]});\n       //button.attachPress(\"onCreate\");\n\t\tvar oPage = new sap.m.Page({\n\t\t\ttitle: \"{i18n>title}\",\n\t\t\tcontent: [\n\t\t\t\t// text1\n\t\t\t\t// listitem\n\t\t\t\t// oList\n\t\t\t\t]\n\t\t});\n\t\t\n\t\t\n\t\t// oPage.addContent(oTable);\n\t\t// oPage.addContent(chart);\n\t\toPage.addContent(flex);\n\t\toPage.addContent(date);\n\t\toPage.addContent(temp);\n\t\toPage.addContent(button);\n\t\tvar app = new sap.m.App(\"myApp\", {\n\t\t\tinitialPage: \"oPage\"\n\t\t});\n\t\tapp.addPage(oPage);\n\t\treturn app;\n\t}\n\n});",
		"temp_book/model/models.js": "sap.ui.define([\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/Device\"\n], function(JSONModel, Device) {\n\t\"use strict\";\n\n\treturn {\n\n\t\tcreateDeviceModel: function() {\n\t\t\tvar oModel = new JSONModel(Device);\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\n\t\t\treturn oModel;\n\t\t}\n\n\t};\n});",
		"temp_book/Component.js": "sap.ui.define([\n\t\"sap/ui/core/UIComponent\",\n\t\"sap/ui/Device\",\n\t\"temp_book/model/models\"\n], function(UIComponent, Device, models) {\n\t\"use strict\";\n\n\treturn UIComponent.extend(\"temp_book.Component\", {\n\n\t\tmetadata: {\n\t\t\tmanifest: \"json\"\n\t\t},\n\n\t\t/**\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\n\t\t * @public\n\t\t * @override\n\t\t */\n\t\tinit: function() {\n\t\t\t// // call the base component's init function\n\t\t\t// UIComponent.prototype.init.apply(this, arguments);\n\t\t\t\n\t\t\t\t\t\t\t// set the device model\n\t\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\n\n\t\t\t\t// call the base component's init function and create the App view\n\t\t\t\tUIComponent.prototype.init.apply(this, arguments);\n\t\t\t\n\t\t\t// set the device model\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\n\t\t}\n\t});\n});",
		"temp_book/controller/View1.controller.js": "sap.ui.define([\n\t\"sap/ui/core/mvc/Controller\"\n], function(Controller) {\n\t\"use strict\";\n\n\treturn Controller.extend(\"temp_book.controller.View1\", {\n\n onCreate: function() {\n   /*create operation*/\n   var oModel = this.getView().getModel();\n   var date = new Date(sap.ui.getCore().byId(\"date\").getValue());\n   var oEntry = {};\n\n   oEntry.MeasureDate = \"/Date(\" + date.getTime() + \")/\";\n   oEntry.Temperature = sap.ui.getCore().byId(\"temp\").getValue();\n\n// alert(oEntry.MeasureDate);\n\n   oModel.create(\"/Temperatures\", oEntry,null,function(oData) {\n   \t\n  \t\n});\noModel.refresh();\n\n}\n});\n});"
	}
});