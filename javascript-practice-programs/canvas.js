var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");

canvas.height = screen.height;
canvas.width = screen.width;

var max_par = Math.min(parseInt(0.4*(canvas.width) ), 450);
console.log(max_par)

var mousepos =
{
    x_min: undefined,
    y_min: undefined,
    x_max: undefined,
    y_max: undefined

}

class Circle {
    constructor(x, y, r, dx, dy, ran) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = dx;
        this.dy = dy;
        this.ran = ran;
        this.orig_r = r;
        this.origx = x;
        this.origy = y;


    }

    draw = () => {

        ctx.beginPath();
        if (this.ran > 0.5) ctx.fillStyle = "rgb(156, 156, 156)"
        else ctx.fillStyle = "rgb(250, 146, 122)"
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fill()
    }

    update = () => {
        this.x += this.dx;
        this.y += this.dy;

        this.dy += 1;


        if (this.x + this.r >= canvas.width) this.dx = -this.dx;
        if (this.y + this.r >= canvas.height) this.dy = -this.dy * 0.95;
        if (this.x - this.r <= 0) this.dx = -this.dx;
        if (this.y - this.r <= 0) this.dy = -this.dy;

        if(screen.width >= 1000)
        {

            if (this.x <= mousepos.x_max && this.x >= mousepos.x_min && this.y < mousepos.y_max && this.y > mousepos.y_min) {
                if (this.r < 40 * Math.random()) this.r += 1;
                // console.log("executeddd");
                
            }
            else {
                if (this.r > this.orig_r) this.r -= 1;
                if (this.r == 0) this.r = this.orig_r;
                else if (this.r < this.orig_r) this.r = this.orig_r;

            }

    }

    }

    reset = () => {

        this.x = this.origx;
        this.y = this.origy;

    }


}


var array_circle = []

for (var i = 0; i < max_par; ++i) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var r = Math.random() * 12;
    var dx = Math.random() * 2 + 1;
    var dy = Math.random() * 2 + 1;
    var ran = Math.random() * 1;
    var ran1 = Math.random() * 1;

    if (ran1 > 0.5) {
        dx = -dx;
    }

    if (x > canvas.width - 20) x = canvas.width - 20;
    if (x < 20) x = 20;
    if (y > canvas.height -20) y = canvas.height- 20;
    if (y < 20) y = 20;



    array_circle.push(new Circle(x, y, r, dx, dy, ran))
}


window.addEventListener('mousemove', (event) => {
    
    
    mousepos.x_max = event.x + 200;
    mousepos.y_max = event.y + 200;
    mousepos.x_min = event.x - 200;
    mousepos.y_min = event.y - 200;

    if(event.pageY > canvas.height) 
    {
        mousepos.x_max = undefined;
        mousepos.y_max = undefined;
        mousepos.x_min = undefined;
        mousepos.y_min = undefined;
    }

    // console.log(event.x, event.y)
}
)

window.addEventListener('mousedown', (event) => {
    
    // console.log(event)
    if(event.pageY <= canvas.height)
    {
        for (var i = 0; i < max_par; ++i) {
            array_circle[i].reset();
        }
    }



    // console.log(event.x, event.y)
}
)

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (var i = 0; i < max_par; ++i) {
        array_circle[i].draw()
        array_circle[i].update()
    }







}

animate()