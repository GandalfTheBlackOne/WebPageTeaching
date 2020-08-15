"use strict";

var parse = require('csv-parse');

var fs = require('fs');

var csvData = [];
fs.createReadStream('../sj_master_2020_AUG_dummy.csv').pipe(parse({
  delimiter: ',',
  header: true
})).on('data', function (dataRow) {
  csvData.push(dataRow);
}).on('error', function (dataRow) {
  console.log('error on data');
}).on('end', function () {
  console.log(csvData);
});