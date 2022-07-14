"use strict"
const drawingBox =document.querySelector(".container")
const btns =document.querySelectorAll("button , input,img")
const ctx = drawingBox.getContext("2d");
const sizeDOM = document.querySelector(".size");

let size = 30;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;
drawingBox.addEventListener("mousedown", function(e) {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

drawingBox.addEventListener("mouseup", function(e) {
    isPressed = false;

    x = undefined;
    y = undefined;
});

drawingBox.addEventListener("mousemove", function(e) {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
btns.forEach((btn) => {
    btn.addEventListener("click",function(e) {
if(e.target.classList.contains("decrease"))
{
    size -= 5;
    if (size < 5) {
        size = 5;
    }
    updateSizeOnScreen()
}
else if (e.target.classList.contains("increase"))
{
    size += 5;
    if (size > 50) {
        size = 50;
    }
    updateSizeOnScreen()
}
else if (e.target.classList.contains("clear"))
{
    ctx.clearRect(0, 0, drawingBox.width, drawingBox.height);

}
    })
    btn.addEventListener("change",function(e){
        if(e.target.classList.contains("color")){
            color = e.target.value;

        }
    })
})

function updateSizeOnScreen() {
    sizeDOM.innerText = size;
}