const request = require('request');
const fs = require('fs');

const link = process.argv[2];
const loc = process.argv[3];

request(link, (error, response, body) => {
  if (!error) {
    fs.writeFile(loc, body, function(err) {
      if (!err) {
        console.log(`Downloaded and saved ${fs.statSync(loc)['size']} bytes to ${loc}`);
      } else {
        console.log('Please enter a valid path');
      }
    });
  } else {
    console.log('Enter a valid address');
  }
});
 

