/**
 * Created by Felix on 06/03/2017.
 */
const assert = require("assert");
/** @type {NTRDB_Api} */
const NTRDB_Api = require("../");

/**
 * @type {NTRDB_Api}
 */
let ntrdb_client;

describe("Initialization", () => {
	it("should be initialized with no errors.", function() {
		assert.doesNotThrow(function () {
			ntrdb_client = new NTRDB_Api();
		})
	})
})

describe("Usage", () => {
	describe("GET all the data.", () => {
		it("should get all the data.", function (done) {
			ntrdb_client.getPlugins({}, function(err, data) {
				assert.ok(err == null, "No errors.");
				done();
			});
		})
	})
})
