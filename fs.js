// synchronous fs
// const { readFileSync, writeFileSync } = require('fs');
// const first = readFileSync('./subfolder/text.txt', 'utf8');
// const write = writeFileSync('newfile', `${first}: has been rewritten`, { flag: 'a' })
// console.log(first);

//asynchronous fs
const { readFile, writeFile } = require('fs')
readFile('./subfolder/text.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    else {
        const first = result;
        writeFile('newFile2.js', 'NewFile2', (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            else {
                console.log(result)
            }
        })
    }
})

const http = require('http');
const server = http.createServer((reg, res) => {
    res.write('WElcome');
    res.end()
});
server.listen(5000, () => {
    console.log(`server running on http://localhost:5000`);
})

const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);