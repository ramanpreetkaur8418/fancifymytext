function bigFunction() {
    document.getElementById("textarea").style.fontSize = "24pt";
}

function fancyFunction() {
    if(document.getElementById("fancy").checked = true) {
        document.getElementById("textarea").style.fontWeight = "bold";
        document.getElementById("textarea").style.color = "blue";
        document.getElementById("textarea").style.textDecoration = "underline";
        document.getElementById("boring").checked = false;
    }  
}

function boringFunction() {
    if(document.getElementById("boring").checked = true) {
        document.getElementById("textarea").style.fontWeight = "normal";
        document.getElementById("textarea").style.color = "black";
        document.getElementById("textarea").style.textDecoration = "none";
        document.getElementById("fancy").checked = false;
    }  
}

function upperFunction() {
    var str = document.getElementById("textarea").value;
    var parts = str.split(".");  // ["How", "are", "you?"]
    str = parts.join("-Moo");       // "How_are_you?"
    document.getElementById("textarea").value = str;

    document.getElementById("textarea").style.textTransform = "uppercase";
}