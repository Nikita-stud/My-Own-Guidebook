//Streams = data send in chunks
const { Readable } = require('stream');

res.writeHeader(200, { 'Content-Type': 'video/mp4' });
fs.createReadStream(file).pipe(res);
