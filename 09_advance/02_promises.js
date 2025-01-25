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

// better syntax or PromisTwo

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("ASYNC task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("ASYNC promise consumed")
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({
            name: "Mukthikanth",
            age: 18
         })        
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user)
    console.log(user.name)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true

        if(!error){
            resolve({
                name: "Kendrick Lamar",
                album: "section 80"
            })
        }else{
            reject("ERROR: rigormortis on it's way")
        }
    }, 1000)
})// ERROR is associated with reject

promiseFour.then( (user) => {
    console.log(user)
    return user.name;// This return is passed to next then
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("Your promise has been resolved or rejected"))
// change error to false to check the other response


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true

        if(!error){
            resolve({
                name: "Nas",
                album: "Illmatic"
            })
        }else{
            reject("ERROR: Album too good to be reviewed")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
// You have to execute the function to complete async await

consumePromiseFive()


// async function getData(){
//     try {
//         const response = await fetch('https://api.github.com/users/mukthikanth')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data)
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// getData()


fetch('https://api.github.com/users/mukthikanth')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    console.log(data.following)
})
.catch((error) => console.log('error occured'))