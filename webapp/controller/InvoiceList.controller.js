sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
		function (Controller, JSONModel) {
			"use strict";

			return Controller.extend("na.myProject2.controller.InvoiceList", {

					onInit: function () {
						var oData = {
							currency:"EUR"
						};
						var oModel = new JSONModel(oData);
						this.getView().setModel(oModel, "view");

						}
					});

			}
		);