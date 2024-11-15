//get back the class
//if want custom extend from class
//otherwise just for emitting and handling events create instance

const EventEmitter = require('events');

const customEmitter = new EventEmitter()

//on and emit methods
//keep track of the order
// additional arguments
// built-in modules utilize it

//on - listens for an event
//emit - emits an event
customEmitter.on('response', (name, id) =>{
    console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.emit('response', 'john', 34)//deve stare qua perchè solo metto sopra, l'evento deve ancora essere ascoltato e io produco una risposta ancora prima che veng ascoltato

