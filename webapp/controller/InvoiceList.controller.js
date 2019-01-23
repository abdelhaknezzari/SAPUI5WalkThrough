sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "../model/formatter"],
	function (Controller, JSONModel, formatter) {
		"use strict";

		return Controller.extend("na.myProject2.controller.InvoiceList", {
			formatter: formatter,

			onInit: function () {
				var oData = {
					currency: "EUR"
				};
				var oModel = new JSONModel(oData);
				this.getView().setModel(oModel, "view");

			}
		});

	}
);