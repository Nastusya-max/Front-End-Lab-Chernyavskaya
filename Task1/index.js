#!/usr/bin/env node
var yodasay = require('yodasay');
var lolcatjs = require('lolcatjs');
var shakespeare = require('shakespeare-data');

lolcatjs.fromString(yodasay.say({
  text: shakespeare.sonnets.random().lines.join('\n')
}));