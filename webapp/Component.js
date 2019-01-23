sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"na/myProject2/model/models",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent, Device, models, JSONModel, ResourceModel) {
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

			// // enable routing
			// this.getRouter().initialize();

			// // set the device model
			// this.setModel(models.createDeviceModel(), "device");

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

		}
	});
});