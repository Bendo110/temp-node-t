const {readFileSync, writeFileSync} = require('fs')

console.log('start task')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

writeFileSync(
    './content/result-sync.txt',
    'Here is the result: ' + first + ',' + second,
    {flag: 'a'} //node will append this
)
console.log('done with this task')
console.log('starting next task')

