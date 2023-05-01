const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
    console.log(`data received1 ${name} ${id}`)
})

customEmitter.on('response', ()=>{
    console.log(`data received2`)
})

customEmitter.emit('response', 'bruce', 35)