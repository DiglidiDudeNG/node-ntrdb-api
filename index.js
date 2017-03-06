const request = require('request');
const https = require("https");
const path = require("path");

let base_url = "https://ntrdb.octonezd.pw/api";

const SortBy = Object.freeze({
	None: "none",
	Name: "name",
	TitleID: "titleid",
	Developer: "developer",
	UploadTime: "uploadtime"
})

const default_options = {
	hostname: "ntrdb.octonezd.pw",
	path: "/"
	
}

/**
 * @class
 */
function NTRDB_Api() {
	// TODO: Allow to choose whether you want to use Promises or callbacks.
}

/**
 *
 * @param {Object} opts
 * @param {NTRDB_Callback} cb
 */
NTRDB_Api.prototype.getPlugins = function(opts, cb) {
	https.get(base_url, cb);
}

/**
 * Enum for Compatibility options.
 * @readonly
 * @enum {string}
 */
NTRDB_Api.COMPATIBLILITY = Object.freeze({
	N3DS_ONLY: "n3ds",
	O3DS_ONLY: "o3ds",
	ANY_3DS: "universal",
});

/**
 * @inheritDoc NTRDB_Api
 */
module.exports = NTRDB_Api;

/**
 * @callback NTRDB_Callback
 * @param {Error} err
 * @param {{TitleID}[]} json
 */

/**
 * @typedef {Object} NTRDB_Plugin
 * @param {String[]} TitleID
 * @param {String} added
 * @param {NTRDB_Api.COMPATIBLILITY} compatible
 * @param {String} desc
 * @param {String} developer
 * @param {String} devsite
 * @param {Number} id
 * @param {Number} likes
 * @param {String} name
 * @param {String} pic
 * @param {String} plg
 * @param {Number} timestamp
 * @param {String} version
 *
 * @example:
 * {
 *      "TitleID":      "0004000000164800;0004000000175E00",
 *      "added":        "2017-02-19 19:58",
 *      "compatible":   "universal",
 *      "desc":         "pokeCalcNTR is a powerful Gen 7 RNG tool that brings emulator type functions to the console",
 *      "developer":    "zaksabeast",
 *      "devsite":      "https://gbatemp.net/threads/wip-pokecalcntr-iv-and-nature-overlay-plugin-for-sun-and-moon.460524/",
 *      "id":           2,
 *      "likes":        0,
 *      "name":         "pokeCalcNTR",
 *      "pic":          "https://gbatemp.net/attachments/fc0jv4a-png.78703/",
 *      "plg":          "https://github.com/adrifcastr/NTRDB-Plugin-Host/blob/master/pokeCalcNTR.plg?raw=true",
 *      "timestamp":    1487523508.573614,
 *      "version":      "023"
 * }
 */
