let btne = document.querySelector(".generate");
let serial = document.querySelector(".serial");
btne.onclick = function (){
    let pass = "01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
    let count = 10;
    let randomempty = ""; 
    for (let i = 0; i < count ; i++) {
        randomempty += pass[Math.floor(Math.random() * pass.length)];
    }
    serial.innerHTML = randomempty;
};
