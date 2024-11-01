const button = document.getElementById("button");
const bodyElem = document.body;
let isWhite = false;
button.addEventListener("click", ()=>{
    console.log("I am clicked.");
    if (isWhite) bodyElem.style.backgroundColor = "";
    else bodyElem.style.backgroundColor = "#CEDEBD";
    isWhite = !isWhite;
});
function randomColorGenerator() {} // Example usage
 // console.log(randomColorGenerator());

//# sourceMappingURL=index.377278e2.js.map
