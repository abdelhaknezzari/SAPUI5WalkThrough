sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"na/myProject2/model/models",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"./controller/HelloDialog"
], function (UIComponent, Device, models, JSONModel, ResourceModel, HelloDialog) {
	"use strict";

	return UIComponent.extend("na.myProject2.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			var oData = {
				recipient: {
					name: "hello"
				}
			};

			var oModel = new JSONModel(oData);

			this.setModel(oModel);

			var i18nModel = new ResourceModel({
				bundleName: "na.myProject2.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");

			this._helloDialog = new HelloDialog(this.getRootControl());

		},
		exit: function () {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog: function () {
			this._helloDialog.open();

		}
	});
});