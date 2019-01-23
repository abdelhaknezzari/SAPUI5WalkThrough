sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, JSONModel, ResourceModel, Fragment) {
	"use strict";

	return Controller.extend("na.myProject2.controller.HelloPanel", {

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
					name: "na.myProject2.view.HelloDialog",
					controller: this
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					oDialog.open();
				});

			} else {
				this.byId("helloDialog").open();
			}
		},
		onCloseDialog: function () {
			this.getView().byId("helloDialog").close();
		}

	});
});