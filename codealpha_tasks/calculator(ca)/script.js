function appendValue(value){

    document.getElementById("display").value += value;

}


function clearDisplay(){

    document.getElementById("display").value = "";

}


function deleteValue(){

    let display = document.getElementById("display");

    display.value = display.value.slice(0,-1);

}


function calculate(){

    let display = document.getElementById("display");


    try{

        display.value = eval(display.value);

    }

    catch{

        display.value = "Error";

    }

}

//music
const music = document.getElementById("bgMusic");

window.addEventListener("load", () => {

    music.volume = 0.25;

    music.play().then(() => {

        console.log("Music started 🎵");

    }).catch(() => {

        console.log("Browser blocked autoplay");

    });

});


// first click anywhere starts sound if browser blocked it

document.addEventListener("click", () => {

    if(music.muted){

        music.muted = false;
        music.play();

    }

}, {once:true});

// keyboard support

document.addEventListener("keydown", function(event){


    let key = event.key;


    if(
        !isNaN(key) ||
        "+-*/.".includes(key)
    ){

        appendValue(key);

    }


    if(key === "Enter"){

        calculate();

    }


    if(key === "Backspace"){

        deleteValue();

    }


    if(key === "Escape"){

        clearDisplay();

    }
console.log("Calculator loaded successfully 🚀");


});
