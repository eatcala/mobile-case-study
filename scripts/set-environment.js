#!/bin/node
const fs = require('fs');

const environment = process.argv[2];
// eslint-disable-next-line import/no-dynamic-require
const envFileContent = require(`../envs/${environment}.json`);
fs.writeFileSync('env.json', JSON.stringify(envFileContent, undefined, 2));
