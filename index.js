document.addEventListener('DOMContentLoaded', () => {

    const css = document.styleSheets[0];

    (async () => { // title egg
        let title = document.getElementById('title-egg');
        if (title !== null) {
            const normal = title.innerHTML;
            const title_egg = "click the title again and we can act like this never happened";
            // style is set here so that without js there is no empty egg.
            title.style.cursor = "pointer";
            title.onclick = () => {
                title.innerHTML =
                    title.innerHTML === normal
                    ? title_egg
                    : normal;
            };
        }
    })();

    (async () => { // subtitle egg
        let elem = document.getElementById('subtitle-egg');
        if (elem !== null) {
            const eggs = [
                elem.innerText,
                "personal website",
                "hub for Lija things",
                "all Lija-related",
                "hello visitor",
                "welcome",
                "greetings"
            ];
            elem.innerText = eggs[Math.floor(Math.random() * eggs.length)];
        }
    })();

    (async () => { // fgc egg
        let fgc = document.getElementById('fgc-egg');
        if (fgc !== null) {
            // show as link if the egg activates
            fgc.className = "fakelink";
            const games = [
                fgc.innerText,
                "Guilty Gear Strive",
                "Skullgirls",
                "Rivals of Aether",
                "Spelunky",
                "Team Fortress 2",
                "CrossCode",
                "Terraria",
                "Yu-Gi-Oh!",
                "Overwatch (blegh)",
                "Katana ZERO",
                "Doki Doki Literature Club",
                "Reassembly",
                "Death Road to Canada",
                "Risk of Rain",
                "Hollow Knight",
                "Breath of the Wild"
            ];
            let game_index = 0;
            fgc.onclick = () => {
                if (game_index >= games.length - 1) {
                    game_index = 0;
                } else {
                    game_index++;
                }
                fgc.innerText = games[game_index];
            };
        }
    })();

    (async () => { // short misc egg
        let elem = document.getElementById('short-misc-egg');
        if (elem !== null) {
            const eggs = [
                elem.innerText,
                "master of none",
                "kimchi enjoyer",
                "road hater",
                "locomotive enjoyer",
                "autistic hermit",
                "woman by choice"
            ];
            elem.innerText = eggs[Math.floor(Math.random() * eggs.length)];
        }
    })();

    (async () => { // links egg
        let caption = document.getElementById('caption-egg');
        if (caption !== null) {
            const eggs = [
                caption.innerText,
                "places to click:",
                "things I create:",
                "check these out:"
            ];
            caption.innerText = eggs[Math.floor(Math.random() * eggs.length)];
        }
    })();

    (async () => { // misc egg
        let elem = document.getElementById('misc-egg');
        if (elem !== null) {
            const eggs = [
                elem.innerText,
                "IRC: Indigo Roman Cancel"
            ];
            elem.innerText = eggs[Math.floor(Math.random() * eggs.length)];
        }
    })();

    (async () => { // portrait egg
        let elem = document.getElementById('portrait-egg');
        if (elem !== null) {
            const eggs = [
                elem.innerText,
                "not me",
                "a photo that is not me",
                "this picture isn't me",
                "this doesn't look like me",
                "this is not me",
                "photo of not me",
                "not me in the photo",
                "not me in the picture",
                "real me has more colors",
                "real me is not in space",
                "real me is not transparent",
                "real me is a person",
                "real me is alive",
                "real Lija is alive",
                "real Lija is a human",
                "real Lija lives",
                "real me is alive",
                "the real me lives",
                "disclaimer: not me",
                "who is this person",
                "that's not Lija",
                "this isn't Lija",
                "not Lija",
                "Lija is not in the box",
                "where is she",
                "where is Lija",
                "where'd Lija go",
                "why's Lija there",
                "Lija is not here",
                "Lija? maybe, no",
                "what is it? not Lija",
                "what is it? not me",
                "who is it? not me",
                "who? not Lija",
                "who? not me",
                "the portrait isn't me",
                "the portrait isn't Lija",
                "I'm not the portrait",
                "Lija is not the portrait",
                "caption: not me",
                "caption: not Lija",
                "what is a Lija",
                "who is a Lija",
                "the girl is not me",
                "the girl is not Lija",
                "I am not the girl",
                "that girl is not Lija",
                "that girl is not me"
            ];
            elem.innerText = eggs[Math.floor(Math.random() * eggs.length)];
        }
    })();

});
