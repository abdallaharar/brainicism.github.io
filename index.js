var lazeez = false;
anime()

function anime() {
    if(lazeez){
        document.querySelector("h1").style.color = "yellow";
        lazeez= false;
    }
    else{
        document.querySelector("h1").style.color = "green";
        lazeez = true;
    }
}

setInterval(anime, 100);
