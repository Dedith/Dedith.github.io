
function content(){
    const input = document.querySelector("#box-input");
    let text = input.value
    return text; 
}

function encriptar(text){
    const dict = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };

    for(let key in dict){
         if(text.includes(key)){
            let value = dict[key];
            text = text.replaceAll(key, value); 
        } 
    }
    return text; 
}

function desencriptar(text){ 
    const dict = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };
    
    for(let key in dict){
        let value = dict[key];
        if(text.includes(value)){
            text = text.replaceAll(value, key);
        }   
    };
    return text;
};

function clickEncriptar(){
    document.getElementById("box-text").value = encriptar(content());
    document.querySelector("#box-input").value = ""; 
    document.getElementById("imagen-muneco").style.display = "none";
    document.getElementById("copy").style.display = "block";
    
}
function clickDesencriptar(){
    document.getElementById("box-text").value = desencriptar(content());
    document.querySelector("#box-input").value = ""; 
    document.getElementById("imagen-muneco").style.display = "none";
    document.getElementById("copy").style.display = "block";
}
function clickCopy(){
    let content = document.getElementById("box-text").value;
    navigator.clipboard.writeText(content);
    document.querySelector("#box-text").value = "";
}

