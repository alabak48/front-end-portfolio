document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'A':
        case 'a':
            let a = new Audio('./white_keys/A.mp3');
            a.play();
            break;
        case 'S':
        case 's':
            let s = new Audio('./white_keys/S.mp3');
            s.play();
            break;
        case 'D':
        case 'd':
            let d = new Audio('./white_keys/D.mp3');
            d.play();
            break;
        case 'F':
        case 'f':
            let f = new Audio('./white_keys/F.mp3');
            f.play();
            break;
        case 'G':
        case 'g':
            let g = new Audio('./white_keys/G.mp3');
            g.play();
            break;
        case 'H':
        case 'h':
            let h = new Audio('./white_keys/H.mp3');
            h.play();
            break;
        case 'J':
        case 'j':
            let j = new Audio('./white_keys/J.mp3');
            j.play();
            break;
        case 'E':
        case 'e':
            let e = new Audio('./black_keys/E.mp3');
            e.play();
            break;
        case 'T':
        case 't':
            let t = new Audio('./black_keys/T.mp3');
            t.play();
            break;
        case 'U':
        case 'u':
            let u = new Audio('./black_keys/U.mp3');
            u.play();
            break;
        case 'W':
        case 'w':
            let w = new Audio('./black_keys/W.mp3');
            w.play();
            break;
        case 'Y':
        case 'y':
            let y = new Audio('./black_keys/Y.mp3')
            y.play();
            break;

    }
})