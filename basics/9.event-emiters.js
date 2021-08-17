const events=require ('events')

var eventEmitter=new events.EventEmitter()

var em=new events.EventEmitter() 
em.on("click",function(){
    console.log("DId you invoke")
})
em.emit("click")

eventEmitter.on("firstEvent",function(data){
    console.log(`First event : ${data}`)
})
eventEmitter.emit("firstEvent","fired")