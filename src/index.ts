const button = document.getElementById('button') as HTMLButtonElement
const bodyElem = document.body;
let isWhite:boolean = false;

button.addEventListener('click',()=>{

    console.log("I am clicked.")
    
    if(isWhite){
        bodyElem.style.backgroundColor = "";
    }
    else{
        bodyElem.style.backgroundColor = "#CEDEBD";
    }

    isWhite = !isWhite;
})

function randomColorGenerator(){
    
}

// Example usage
// console.log(randomColorGenerator());
