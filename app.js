import fs, { read } from 'fs';
import url from 'url';
import path from 'path';
import crypto from 'crypto';
import {greetings} from './greetings.js'
import readLine from 'readline';
import { error } from 'console';
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
// const readableStream = fs.createReadStream('test.txt',{encoding: 'utf8'})
// readableStream.on('data', (chunk) => {
//     console.log(chunk)
// });

// readableStream.on('end',() => {
//     console.log('Finished reading the file.')
// })

// readableStream.on('error',(err) => {
//     console.error(err)
// })

// // createWriteStream()
// const writableStream = fs.createWriteStream('test2.txt');
// writableStream.write('Hello ')
// writableStream.write('World ')
// writableStream.write('Adrian')
// writableStream.end();

// writableStream.on('finish', () => {
//     console.log('Finished writing to the file.')
// })

// Pipe
// const readableStream = fs.createReadStream('test.txt');
// const writableStream = fs.createWriteStream('test4.txt');

// readableStream.pipe(writableStream);

// writableStream.on('finish', () => {
//     console.log('File Copied Successfully');
// });


// const readableStream = fs.createReadStream('test.txt');
// const rl = readLine.createInterface({input: readableStream});

// rl.on('line', (line) => {
//     console.log("Line: ", line);
// });

// rl.on('close',() => {
//     console.log('Finished processing the file.')
// })

// Creating directory/folder
// fs.mkdirSync('folder1');
// console.log('Folder created.')

// fs.mkdir('folder2', (err) => {
//     if(err){
//        return console.log("Error on creating new folder.")
//     }

//     console.log('folder created.')
// })

// Reading directory files
// const files = fs.readdirSync('./')
// console.log("Directory content: ", files)

// fs.readdir('./', (err, files) => {
//     if(err){
//         console.log(err)
//     }
//     console.log('Directory content: ', files)
// })

// Checking if the directory exists
// const dirname = 'folder3';
// if (!fs.existsSync(dirname)) {
//     console.error('Directory doenst exist.')
// } else {
//     console.log('Directory exist.')
// }

// Deleting folder

// fs.rm('folder1', {recursive: true}, (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('Deleted Successfully.')
//     }
// })

// Renaming the folder
// fs.rename('folder','folder1',(err) => {
//     if (err) {
//         console.error(err)
//     } else {
//         console.log('Renamed successfully.')
//     }
// })