const fs = require('fs');

const readStream = fs.createReadStream('./docs/lorem.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/lorem2.txt');

readStream.on('data', (chunk) => {
    console.log('---- NEW CHUNK ----');
    console.log(chunk);
    writeStream.write('\n\n--- NEW CHUNK ---\n\n');
    writeStream.write(chunk);
})

//piping
readStream.pipe(writeStream)