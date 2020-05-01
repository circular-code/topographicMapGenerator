'use strict';
function distance (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
}

function runAnimation() {
    var canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    target.append(canvas);
    canvas.width = target.clientWidth;
    canvas.height = target.clientHeight;

    class StartingPoint {
        constructor (x,y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
        }

        draw () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
            ctx.closePath();
            ctx.fillStyle = this.color || color;
            ctx.fill();
        }
    }

    var startingPoints = [];
    for (let i = 0; i < 1; i++)
        startingPoints.push(new StartingPoint(Math.random() * (canvas.width - 5) + 5, (Math.random() * (canvas.height - 5) + 5)));

    var time = Date.now();

    function renderLoop(now) {

        var timeDelta = (now - time) / 1000;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        time = now;

        requestAnimationFrame(renderLoop);
    }

    renderLoop();
}

runAnimation();