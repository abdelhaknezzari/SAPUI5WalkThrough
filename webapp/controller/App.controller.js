sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";

	return Controller.extend("na.myProject2.controller.App", {

		onOpenDialog: function () {
			this.getOwenerComponent().openHelloDialog();
		}

	});
});