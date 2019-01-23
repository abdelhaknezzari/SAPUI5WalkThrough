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
			this.getOwnerComponent().openHelloDialog();
		},
		onCloseDialog: function () {
			this.getView().byId("helloDialog").close();
		}

	});
});