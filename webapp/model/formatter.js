sap.ui.define([], function () {

	"use strict";

	return {
		statusText: function (sStatus) {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
			case "A":
				return oBundle.getText("invoicestatusA");
			case "B":
				return oBundle.getText("invoicestatusB");
			case "C":
				return oBundle.getText("invoicestatusC");
			default:
				return sStatus;
			}

		}
	};

});