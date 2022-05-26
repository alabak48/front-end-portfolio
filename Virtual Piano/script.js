document.addEventListener("keydown", event => {
    let whiteKeys = [   "KeyA",
                        "KeyS",
                        "KeyD",
                        "KeyF",
                        "KeyG",
                        "KeyH",
                        "KeyJ"];

    let blackKeys = [   "KeyW",
                        "KeyE",
                        "KeyT",
                        "KeyY",
                        "KeyU"];

    if (whiteKeys.includes(event.code)) {
        let audio = new Audio("white_keys/" + event.key.toUpperCase() + ".mp3");
        audio.play();
        console.log(`The '${event.key}' key is pressed.`)
    } else if (blackKeys.includes(event.code)) {
        let audio = new Audio("black_keys/" + event.key.toUpperCase() + ".mp3");
        audio.play();
        console.log(`The '${event.key}' key is pressed.`)
    } else {
        console.warn(`Unexpected keypress: '${event.code}'`)
    }
});