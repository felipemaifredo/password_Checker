let pswrd = document.querySelector("input#pswrd");
let toggleBtn = document.querySelector("span#toggleBtn");

let lowerCase = document.querySelector("li#lower");
let upperCase = document.querySelector("li#upper");
let numberCase = document.querySelector("li#number");
let specialCase = document.querySelector("li#special");
let eightCase = document.querySelector("li#eight");

function checkpassword(data){
    const lower = new RegExp("(?=.*[a-z])")
    const upper = new RegExp("(?=.*[A-Z])")
    const number = new RegExp("(?=.*[0-9])")
    const special = new RegExp("(?=.*[!@#$%&!?])")
    const eight = new RegExp("(?=.{8,})");

    if(lower.test(data)) {
        lowerCase.classList.add("valid");
    } else {
        lowerCase.classList.remove("valid");
    }

    if(upper.test(data)) {
        upperCase.classList.add("valid");
    } else {
        upperCase.classList.remove("valid");
    }

    if(number.test(data)) {
        numberCase.classList.add("valid");
    } else {
        numberCase.classList.remove("valid");
    }

    if(special.test(data)) {
        specialCase.classList.add("valid");
    } else {
        specialCase.classList.remove("valid");
    }

    if(eight.test(data)) {
        eightCase.classList.add("valid");
    } else {
        eightCase.classList.remove("valid");
    }
}

//
toggleBtn.onclick = function(){
    if (pswrd.type === "password") {
       pswrd.setAttribute("type", "text");
       toggleBtn.classList.add("toggleBtnOff");
    } else {
        pswrd.setAttribute("type", "password");
        toggleBtn.classList.remove("toggleBtnOff");
    }
}

