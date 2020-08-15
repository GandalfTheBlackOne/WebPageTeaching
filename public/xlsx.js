"use strict";

var xlsx = require("xlsx");

var wb = xlsx.readFile("../data/sj_master_2020_AUG_dummy.xlsx");
var ws = wb.Sheets["1"];
var data = xlsx.utils.sheet_to_json(ws);

var desired_cell;

for (var i = 1; i <= 2; i++) {
  desired_cell = data[i];
  console.log(desired_cell);
}

