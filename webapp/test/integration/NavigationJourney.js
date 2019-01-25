	/*global QUnit*/

	sap.ui.define([
		"na/myProject2/localService/mockserver",
		"sap/ui/test/opaQunit",
		"./pages/App"
	], function (mockserver, opaTest) {
		"use strict";

		QUnit.module("Navigation Journey");

		opaTest("Should see the initial page of the app", function (Given, When, Then) {

			mockserver.init();
			// Arrangements
			Given.iStartMyUIComponent({
				componentConfig: {
					name: "na.myProject2"
				}
			});
			// Actions
			When.onTheAppPage.iPressTheSayHelloWithDialogButton();
			// Assertions
			Then.onTheAppPage.iShouldSeeTheHelloDialog();

			//Cleanup
			Then.iTeardownMyApp();
		});
	});