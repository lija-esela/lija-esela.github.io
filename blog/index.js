document.addEventListener('DOMContentLoaded', () => {

    (async () => { // blog egg
        let elem = document.getElementById('blog-egg');
        if (elem !== null) {
            const eggs = [
                elem.innerText,
                ">blogger >gigachad.jpeg",
                "this subtitle changes",
                "it's called we do a little blogging",
                "smash that like button",
                "read about my life",
                "morshu.gif",
                "thank you for enabling JavaScript!"
            ];
            elem.innerText = eggs[Math.floor(Math.random() * eggs.length)];
        }
    })();

});
