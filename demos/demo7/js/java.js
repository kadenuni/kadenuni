
const thisButton = document.getElementById("myButton")
const welcomeText=document.getElementById("clickme")

const counter = document.getElementById("ccc");

thisButton.addEventListener("click", ()=>{
    counter.innerText = pareInt(counter.innerText) + 1;
});

welcomeText.addEventListener("click", ()=>{
    welcomeText.innerText = "Ouch";
});

