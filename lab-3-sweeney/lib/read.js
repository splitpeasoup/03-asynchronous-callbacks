'use strict';

const inputFiles = [
  '../assets/file1.txt',
  '../assets/file2.txt',
  '../assets/file3.txt'
];
 
const fs = require('fs');

function readCb(err,results){ 
  if(err){
    console.log('there was an error reading text file');
  };

  let file = results.toString();

  outputFile.push(file);
  console.log('file:',file);
};


const outputFiles = [];

function completedAll(results,err) {
  console.log('completed all');
  if (outputFiles.length !== null){
    return outputFiles;
  }
  else return err;
}

let delay = 10000;
const arrayOfPromises = Object.keys(inputFiles).map(()=> (
  new Promise((resolve, reject) => {
    const content = fs.readFile(inputFiles[index]);
    console.log('request', content);
    setTimeout((err, content) => {
      if (err) {
        reject(err);
      }

      // Some code for which I use object values
      resolve(content);
    }, (delay /= 2));
  }))
  .then(readCb));

Promise.all(arrayOfPromises)
  .then(completedAll)
  .catch(console.error);





module.exports.Readthreefiles;



