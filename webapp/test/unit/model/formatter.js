/*global QUnit*/
sap.ui.define(["na/myProject2/model/formatter", "sap/ui/model/resource/ResourceModel"],
	function (formatter, ResourceModel) {
		"use strict";
		QUnit.module("Formatting functions", {

			beforeEach: function () {
				this._oResourceModel = new ResourceModel({
					bundleUrl: sap.ui.require.toUrl("na/myProject2") + "/i18n/i18n.properties"

				});
			},
			afterEach: function () {
				this._oResourceModel.destroy();

			}
		});

		QUnit.test("Should return calculated text", function (assert) {
			var oModel = this.stub();
			oModel.withArgs("i18n").returns(this._oResourceModel);
			var oViewStub = {
				getModel: oModel
			};
			var oControllerStub = {
				getView: this.stub().returns(oViewStub)
			};
			var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub);

			assert.strictEqual(fnIsolatedFormatter("A"), "New", "the long text for status A is correct");
			assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "the long text for status B is correct");
			assert.strictEqual(fnIsolatedFormatter("C"), "Done", "the long text for status C is correct");
			assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "the long text for status Foo is correct");
		});

	});