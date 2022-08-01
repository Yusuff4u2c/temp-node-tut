/*console.log(__dirname);
setInterval(() => {
    console.log('Boom!!!')
}, 2000)
const num1 = 5;
const num2 = 10;
function addValues() {
    console.log(`the sum is : ${num1 + num2}`);

}
addValues();

const os = require('os');
console.log(os.userInfo());*/

/*const text = readFileSync('./subfolder/text.txt', 'utf8')
const second = readFileSync('./subfolder/second.txt', 'utf8')
const newText = writeFileSync('./subfolder/newText.txt', 'This is a new text file.', { flag: "a" })
console.log(text, second);*/

const { readFile, writeFile } = require('fs')
