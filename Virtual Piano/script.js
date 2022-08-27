document.addEventListener("keydown", event => {
    let whiteKeys = [   "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J"];

    let blackKeys = [   "W",
        "E",
        "T",
        "Z",
        "U"];

    if (whiteKeys.indexOf(event.code)) {
        let audio = new Audio("white_keys/" + event.key.toUpperCase() + ".mp3");
        audio.play();
        console.log("The '${event.key}' key is pressed.")
    } else {
        console.warn("Unexpected keypress: '${event.code}'")
    }

    if (blackKeys.indexOf(event.code)) {
        let audio = new Audio("black_keys/" + event.key.toUpperCase() + ".mp3");
        audio.play();
         console.log("The '${event.key}' key is pressed.")
    } else {
         console.warn("UnexpYected keypress: '${event.code}'")
    }
});