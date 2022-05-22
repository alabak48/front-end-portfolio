document.addEventListener("keydown",
    function(event) {
        if (event.key == "a") {
            let audio = new Audio("keys/A.mp3") ;
            audio.play();}
        else if (event.key == "s") {
            let audio = new Audio("keys/S.mp3") ;audio.play();}
        else if(event.key == "d") {
            let audio = new Audio("keys/D.mp3") ;audio.play();}
        else if (event.key == "f") {
            let audio = new Audio("keys/F.mp3") ;audio.play();}
        else if (event.key == "g") {
            let audio = new Audio("keys/G.mp3") ;audio.play();}
        else if (event.key == "h") {
            let audio = new Audio("keys/H.mp3") ;audio.play();}
        else if (event.key == "j") {
            let audio = new Audio("keys/J.mp3") ;  audio.play();}
        else if (event.key == "w") {
            let audio = new Audio("keys/W.mp3") ;  audio.play();}
        else if (event.key == "e") {
            let audio = new Audio("keys/E.mp3") ;  audio.play();}
        else if (event.key == "t") {
            let audio = new Audio("keys/T.mp3") ;  audio.play();}
        else if (event.key == "y") {
            let audio = new Audio("keys/Y.mp3") ;  audio.play();}
        else if (event.key == "u") {
            let audio = new Audio("keys/U.mp3") ;  audio.play();}


        else {
            console.log("warning")
        }
    });