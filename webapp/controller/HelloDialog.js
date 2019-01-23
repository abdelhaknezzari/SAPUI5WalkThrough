sap.ui.define(["sap/ui/base/ManagedObject", "sap/ui/core/Fragment"],
	function (ManagedObject, Fragment) {
		"use strict";

		return ManagedObject.extend("na.myProject2.controller.HelloDialog", {
			constructor: function (oView) {
				this._oView = oView;
			},

			exit: function () {
				this._oView.destroy();
				delete this._oView;
			},

			open: function () {
				var oView = this._oView;

				if (!oView.byId("helloDialog")) {

					var oFragmentDlg = {
						onCloseDialog: function () {
							oView.byId("helloDialog").close();
						}
					};

					Fragment.load({
						id: oView.getId(),
						name: "na.myProject2.view.HelloDialog",
						controller: oFragmentDlg
					}).then(function (oDialog) {
						oView.addDependent(oDialog);
						oDialog.open();
					});

				} else {
					oView.byId("helloDialog").open();
				}

			}

		});

	}

);