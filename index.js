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
                "Personal Website",
                "Hub for Lija things",
                "all Lija-related"
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
                "any rogue-like",
                "Team Fortress 2",
                "CrossCode",
                "Terraria"
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

    (async () => { // links egg
        let caption = document.getElementById('caption-egg');
        if (caption !== null) {
            const eggs = [
                caption.innerText,
                "listen to my music:",
                "hear my music:",
                "my Bandcamp page:"
            ];
            caption.innerText = eggs[Math.floor(Math.random() * eggs.length)];
        }
    })();

    (async () => { // blog egg
        let elem = document.getElementById('blog-egg');
        if (elem !== null) {
            const eggs = [
                elem.innerHTML.split('<')[0],
                "you should read my ",
                "take a look at my ",
                "I sometimes write a "
            ];
            const lhs = eggs[Math.floor(Math.random() * eggs.length)];
            const rhs = elem.innerHTML.slice(elem.innerHTML.indexOf('<'));
            elem.innerHTML = lhs + rhs;
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
                "real me has more colors",
                "real me is not in space",
                "real me is not transparent",
                "disclaimer: not me"
            ];
            elem.innerText = eggs[Math.floor(Math.random() * eggs.length)];
        }
    })();

});
