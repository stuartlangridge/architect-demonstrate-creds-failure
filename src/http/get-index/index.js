/* jslint esversion: 11 */
let arc = require('@architect/functions');

async function index(req) {
  return {html: "ok"}
}
exports.handler = arc.http.async(index);
