sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "../model/formatter",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
	],
	function (Controller, JSONModel, formatter, Filter, FilterOperator) {
		"use strict";

		return Controller.extend("na.myProject2.controller.InvoiceList", {
			formatter: formatter,

			onInit: function () {
				var oData = {
					currency: "EUR"
				};
				var oModel = new JSONModel(oData);
				this.getView().setModel(oModel, "view");

			},
			onFilterInvoices: function (oEvent) {
				var aFilter = [];
				var sQuery = oEvent.getParameter("query");

				var oDataQuery = {
					path: "ProductName",
					operator: FilterOperator.Contains,
					value1: sQuery
				};

				if (sQuery) {
					aFilter.push(new Filter(oDataQuery));
				}

				// filter binding
				var oList = this.byId("invoiceList");
				var oBinding = oList.getBinding("items");
				oBinding.filter(aFilter);

			},
			onPress: function (oEvent) {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("detail");

			}

		});

	}
);