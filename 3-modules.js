//CommonJS, every file is a module (by default)
//Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')//when the function is excecuted inside the module, ASA you require the module it is excecuted
//console.log(data)
//console.log(names)

sayHi(names.john)
sayHi(names.peter)
