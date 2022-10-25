document.addEventListener('DOMContentLoaded', () => {

    const css = document.styleSheets[0];

    (async () => { // h2 egg
        let elem = document.getElementById('h2-egg');
        if (elem != null) {
            const eggs = [
                elem.innerText,
                "how did you end up here?",
                "where are you?",
                "where are you going?",
                "what are you looking for?",
                "what is it you want?",
                "where is she?",
                "where is the girl?",
                "where will you go?",
                "farewell, traveller.",
                "goodbye, traveller.",
                "goodbye, visitor.",
                "farewell, visitor.",
                "something else...",
                "places in cyberspace",
                "digital intersection",
                "the world wide web!",
                "next up, we have:",
                "discover.",
                "new encounters",
                "the arrival cyberse",
                "what is my link rating?",
                "what is my rank?",
                "extra-linked!",
                "break my board!",
                "U-linked!",
                "find the other EMZ!",
                "a lighthouse in the distance",
                "at the edge of the atlas",
                "right back -- on the -- road",
                "really? again?",
                "this message is RNG.",
                "this message is randomized.",
                "go look at a real person.",
                "nowhere to go but anywhere.",
                "just like old times.",
                "search engine? what's that?",
                "who needs a search engine anyway?",
                "who needs Google?",
                "who needs DDG?",
                "you know too much.",
                "works cited:",
                "people, places, and things.",
                "forever parasocial"
            ];
            elem.innerText = eggs[Math.floor(Math.random() * eggs.length)];
        }
    })();

    (async () => { // friends egg
        let elem = document.getElementById('friends-egg');
        if (elem != null) {
            const eggs = [
                elem.innerText,
                "cool things:",
                "cool people:",
                "acquaintances:",
                "e-peers:",
                "net friends:"
            ];
            elem.innerText = eggs[Math.floor(Math.random() * eggs.length)];
        }
    })();
});