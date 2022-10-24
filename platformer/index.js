'use strict';

let hold_inputs = {
    up: false,
    down: false,
    left: false,
    right: false,
};

window.onkeydown = e => {
    if (e.repeat) return;
    switch (e.key) {
    case 'w':
        hold_inputs.up = true;
        break;
    case 's':
        hold_inputs.down = true;
        break;
    case 'a':
        hold_inputs.left = true;
        break;
    case 'd':
        hold_inputs.right = true;
        break;
    }
};
window.onkeyup = e => {
    switch (e.key) {
    case 'w':
        hold_inputs.up = false;
        break;
    case 's':
        hold_inputs.down = false;
        break;
    case 'a':
        hold_inputs.left = false;
        break;
    case 'd':
        hold_inputs.right = false;
        break;
    }
};

const CollidingOn = {
    Bottom: 0,
    Right: 1,
    Top: 2,
    Left: 3,
};

const CONTROL_FPS = 16;
const COLLIDE_FPS = 16;

const PLAYER_WIDTH  = 50;
const PLAYER_HEIGHT = 50;
const PLAYER_SPEED  = 1;
const PLAYER_JUMP_FORCE = 10;

const ARENA_WIDTH  = 640;
const ARENA_HEIGHT = 480;
const GRAVITY = 1;

const stage = [
    { x: 100, y: 100, w: 50, h: 50 },
    { x: 400, y: 300, w: 50, h: 50 }
];

let player = {
    x: 0,
    y: 0,
    w: PLAYER_WIDTH,
    h: PLAYER_HEIGHT,
    xv: 0,
    yv: 0,
};

const collide = (a, b) => {
    return a.x + a.w > b.x
        && b.x + b.w > a.x
        && a.y + a.h > b.y
        && b.y + b.h > a.y;
}

document.addEventListener('DOMContentLoaded', () => {

    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    const resize_canvas = () => { canvas.width  = window.innerWidth;
                                  canvas.height = window.innerHeight; }
    resize_canvas();
    window.onresize = resize_canvas;

    function controlPlayer() {

        if (hold_inputs.up) {
            player.y -= 10;
            player.yv = -PLAYER_JUMP_FORCE;
        }
        if (hold_inputs.right) {
            player.xv += PLAYER_SPEED;
        }
        if (hold_inputs.left) {
            player.xv -= PLAYER_SPEED;
        }

        player.yv += GRAVITY;
        player.y += player.yv;

        player.x += player.xv;

    }

    function collidePlayer() {
        for (let i = 0; i < stage.length; ++i) {
            if (collide(player, stage[i])) {
                // temporary
                const side = CollidingOn.Bottom;
                switch (side) {
                case CollidingOn.Bottom: {
                    player.y = stage[i].y - player.h;
                    player.yv = 0;
                } break;
                }
            }
        }
        if (player.y + player.h >= ARENA_HEIGHT) {
            player.y = ARENA_HEIGHT - player.h;
            player.yv = 0;
        } else if (player.y <= 0) {
            player.y = 1;
            player.yv = 0;
        }

        if (player.x + player.w >= ARENA_WIDTH) {
            player.x = ARENA_WIDTH - player.w - 1;
            player.xv = 0;
        } else if (player.x <= 0) {
            player.x = 1;
            player.xv = 0;
        }
    }

    setInterval(controlPlayer, CONTROL_FPS);
    setInterval(collidePlayer, COLLIDE_FPS);

    function draw() {
        requestAnimationFrame(draw);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgb(100, 100, 100)';
        ctx.fillRect(player.x, player.y, player.w, player.h);
        for (let i = 0; i < stage.length; ++i) {
            ctx.fillRect(stage[i].x, stage[i].y,
                         stage[i].w, stage[i].h);
        }
    }; draw();

});
