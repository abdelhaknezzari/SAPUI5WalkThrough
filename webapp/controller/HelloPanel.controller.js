sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, JSONModel, ResourceModel, Fragment) {
	"use strict";

	return Controller.extend("na.myProject2.controller.HelloPanel", {
		// onInit: function () {

		// 	// var oData = {
		// 	// 	recipient: {
		// 	// 		name: "hello"
		// 	// 	}
		// 	// };

		// 	// var oModel = new JSONModel(oData);

		// 	// this.getView().setModel(oModel);

		// 	// var i18nModel = new ResourceModel({
		// 	// 	bundleName: "na.myProject2.i18n.i18n"
		// 	// });
		// 	// this.getView().setModel(i18nModel, "i18n");

		// },

		onShowHello: function () {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();

			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var mSg = oBundle.getText("hellowMsg", [sRecipient]);
			MessageToast.show(mSg);

		},
		onOpenDialog: function () {
			var oView = this.getView();

			if (!this.byId("helloDialog")) {
				Fragment.load({
					id: oView.getId(),
					name: "na.myProject2.view.HelloDialog"
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					oDialog.open();
				});

			} else {
				this.byId("helloDialog").open();
			}
		}

	});
});