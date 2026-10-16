const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

test('dashboard page keeps its core document contract', () => {
  const html = read('index.html');

  assert.match(html, /<html lang="en">/);
  assert.match(html, /<meta name="viewport"/);
  assert.match(html, /id="habit-list"/);
  assert.match(html, /src="app\.js"/);
});

test('starter data renders the expected weekly habits', () => {
  const app = read('app.js');

  assert.match(app, /Move for 20 minutes/);
  assert.match(app, /Read before bed/);
  assert.match(app, /Plan tomorrow/);
  assert.match(app, /querySelector\('#habit-list'\)/);
});
