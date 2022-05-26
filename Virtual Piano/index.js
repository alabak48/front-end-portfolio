document.addEventListener("keydown", function (event) {
    var whiteKeys = ["KeyA",
        "KeyS",
        "KeyD",
        "KeyF",
        "KeyG",
        "KeyH",
        "KeyJ"];
    var blackKeys = ["KeyW",
        "KeyE",
        "KeyT",
        "KeyY",
        "KeyU"];
    if (whiteKeys.indexOf(event.code)) {
        var audio = new Audio("white_keys/" + event.key.toUpperCase() + ".mp3");
        audio.play();
        console.log("The '".concat(event.key, "' key is pressed."));
    }
    else if (blackKeys.indexOf(event.code)) {
        var audio = new Audio("black_keys/" + event.key.toUpperCase() + ".mp3");
        audio.play();
        console.log("The '".concat(event.key, "' key is pressed."));
    }
    else {
        console.warn("Unexpected keypress: '".concat(event.code, "'"));
    }
});
