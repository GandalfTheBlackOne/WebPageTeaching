const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('public'));

var path = '../data/sj_master_2020_AUG_dummy.xlsx';
let buffer = new Buffer.from('../data/sj_master_2020_AUG_dummy.xlsx');
fs.open(path, 'a', function(err, fd) {
    if(err) {
        console.log('Cant open file');
    }else{
        fs.write(fd, buffer, 0, buffer.length, null, function(err, writtenbytes) {
            if(err) {
                console.log('cant write to file');
            }else {
                console.log(writtenbytes + ' characters added to file');
            }
        })
    }
})

var bufferR = new Buffer.alloc(1023);

console.log("Open existing file");
fs.open('../sj_master_2020_AUG_dummy.csv', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("Reading the file");

    fs.read(fd, bufferR, 0, bufferR.length, 0, function (err, bytes) {
        if (err) {
            console.log(err);
        }
        if (bytes > 0) {
            console.log(bufferR.slice(0, bytes).toString());
        }
        console.log(bytes + " bytes read");

        fs.close(fd, function (err) {
            if (err) {
                console.log(err);
            }
            console.log('File closed successfully');
        });
    });
});


fs.write

app.get


const port = 5000;
app.listen(port, function () {
    console.log('App started on port ',{port});
});

