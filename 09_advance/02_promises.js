const promiseOne = new Promise(function(resolve,reject){
    // used in DB(data base) calls, cryptography, network calls

    setTimeout(function(){
        console.log("Async task completed")
        resolve()// without resolve the promise is not consumed
    },1000);
})
// resolve is associated with then

promiseOne.then(function(){
    console.log("Promise consumed")
})

// better syntax

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("ASYNC task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("ASYNC promise consumed")
})