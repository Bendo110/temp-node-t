//npm - global command, comes with node

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependecy - use it in any project
//npm install -g <packageName>

//packace.json - manifest file (stores important info about project/package)'
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//nom init -y (everything default) 

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)