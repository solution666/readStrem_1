const fs = require('fs');

const rStream = fs.createReadStream('file.txt', 'utf8');

rStream.on('data', function(chunk) {
  console.log(chunk);
});

rStream.on('error', function(err) {
  console.log(err);
});

fs.readFile('file.txt', 'utf8', function(err, data) {
    if (err) throw err;
  
    const wordCount = data.split(/\s+/).length;
  
    console.log(`The file has ${wordCount} words.`);
});

let wordCount = 0;

rStream.on('data', function(chunk) {
  wordCount += chunk.split(/\s+/).length;
});

rStream.on('end', function() {
  console.log(`The file has ${wordCount} words.`);
});

rStream.on('error', function(err) {
  console.log(err);
});