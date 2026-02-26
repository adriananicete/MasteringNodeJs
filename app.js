import fs from 'fs';
import url from 'url';
import path from 'path';
import crypto from 'crypto';
import {greetings} from './greetings.js'
// fs.readFile("test.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
// const content = 'Hello NodeJS'

// fs.writeFile('test.txt', content, (err) => {
//     if (err) {
//         console.error(err)
//     }

//     console.log('File written successfully')
// })

// fs.appendFile('test.txt', '\nHello Adrian', (err) => {
//     if(err){
//         console.error(err)
//     }
//     console.log('Appended')
// })

// url module
// const myUrl = new URL('https://jsonplaceholder.typicode.com/posts?userId=1')
// console.log('Host: ', myUrl.host);
// console.log('Pathname: ', myUrl.pathname);
// console.log('Search Params: ', myUrl.searchParams.get('userId'));

// const __filename = url.fileURLToPath(import.meta.url);
// console.log('Filename: ',__filename)
// const __dirname = path.dirname(__filename);
// console.log('Dirname: ',__dirname)

// crypto module
// const hash = crypto.createHash('sha256');
// hash.update('Hello', 'world')

// console.log(hash.digest('hex'));

// const message = greetings('Adrian');
// console.log(message)

// createReadStream() - ay ginagamit para sa mga large files dahil di sya comuconsume ng malaking memory dahil dinidivide nya ito into little data
const readableStream = fs.createReadStream('test.txt',{encoding: 'utf8'})
readableStream.on('data', (chunk) => {
    console.log(chunk)
});

readableStream.on('end',() => {
    console.log('Finished reading the file.')
})

readableStream.on('error',(err) => {
    console.error(err)
})

// createWriteStream()
const writableStream = fs.createWriteStream('test2.txt');
writableStream.write('Hello ')
writableStream.write('World ')
writableStream.write('Adrian')
writableStream.end();

writableStream.on('finish', () => {
    console.log('Finished writing to the file.')
})