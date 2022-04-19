/* jslint esversion: 11 */
let test = require('tape');
let superagent = require('superagent');
let sandbox = require('@architect/sandbox');
const arc = require('@architect/functions');

const host = 'http://localhost:13336';
const root = `${host}/`;

test('check we start up OK', async (t) => {
  await sandbox.start({ port: 13336 });
  t.pass(`sandbox started at ${host}`);

  let front = await superagent.get(root);
  t.ok(front.body, 'got front page');

  let data = await arc.tables();
  let pairs = await data.pairs.scan({});
  t.ok(Array.isArray(pairs.Items), 'bag o pairs');

  await sandbox.end();
  t.pass('sandbox ended');

  t.end();
});
