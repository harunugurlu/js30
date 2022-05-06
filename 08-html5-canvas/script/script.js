const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); //a two-dimensional rendering context.
//Adjust the size according to window size.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Stroke colour
ctx.strokeStyle = '#BADA55';
//determines the shape used to join the lines.
ctx.lineJoin = 'round';
//determines the shape used to draw the end points of lines.
ctx.lineCap = 'round';

//Dummy variables
//will use this boolean to indicate whether the user is drawing or not. Will be true when the cursor is down(clicking)
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let lineWidth = 10;
let size = false;

//Will be called when the user clicks down on the canvas.
function draw(e) {

    if (!isDrawing) return; //stops the function if the user isn't clicking down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    //go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    //es6 syntax
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;

    if (lineWidth == 100) {
        size = true;
    }

    if (size) {

        size = true;
        lineWidth--;

        if (lineWidth == 10) {
            size = false;
            return;
        }
    } else { lineWidth++; }
}

canvas.addEventListener('mousedown', (e) => {
    [lastX, lastY] = [e.offsetX, e.offsetY];
    isDrawing = true;
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);