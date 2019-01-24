/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"na/myProject2/test/unit/model/formatter"
	], function () {
		QUnit.start();
	});
});