const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(i = 0;i < 6; i++){
        color += hex[Math.floor(Math.random() * 16 )]
    }
    return color
}
// console.log(randomColor())

let intervalId;

const startcolorchanging = function(){
    function backgroundcolorchange(){
        document.body.style.backgroundColor = randomColor()
    }

    if(intervalId == null){
        intervalId = setInterval(backgroundcolorchange,1000) 
    }  
}

const stopcolorchanging = function(){
    clearInterval(intervalId)
    intervalId = null// avoid overwriting so flush out the current intervalId  
}

document.querySelector('#start').addEventListener('click',startcolorchanging)

document.querySelector('#stop').addEventListener('click',stopcolorchanging)




