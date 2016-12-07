var offsetX;
var offsetY;
var mouseIsDown;
var lastX;
var lastY;
var cp1;
var ctx;
var canvas;
var mouseX;
var mouseY;
var changeType;
var allPoints = [];

function  init() {
    canvas = document.getElementById("platno");
    ctx = canvas.getContext("2d");

    offsetX = canvas.offsetLeft;
    offsetY = canvas.offsetTop;

    mouseIsDown = false;
    lastX = 0;
    lastY = 0;
    changeType = 0;

}

function main() {
    init();

    canvas.onclick = function() {

        if (changeType < 4) {
            //izriši interpolirano
            if (changeType < 2) {
                add(mouseX, mouseY, "intpol");
                drawAllPoints();
            }
            //izriši aproksimirano
            else {
                add(mouseX, mouseY, "aprox");
                drawAllPoints();
            }
            changeType++;
        }
        if(changeType == 4)
        {
            //izriše beziera
            drawLine(allPoints);
            changeType=0;
        }
    }

    canvas.onmousedown = function(e){handleMouseDown(e)};
    canvas.onmouseup   = function(e){handleMouseUp(e)};
    canvas.onmousemove = function(e){handleMouseMove(e)};
}

function drawLine(sqarePoints){
    ctx.beginPath();

   // var crte = [];

    for(var i=0; i<sqarePoints.length-1; i+=4)
    {
        //if(sqarePoints.type == "aprox") {
            ctx.moveTo(sqarePoints[i].x, sqarePoints[i].y);
            ctx.lineTo(sqarePoints[i + 1].x, sqarePoints[i + 1].y);
            ctx.stroke();
        //}
    }

}

//nov razred, ki nadzira operacije nad kontrolnimi točkami


//porinem novo kontrolno točko v tabelo
//ne kliči iz razreda!!
add = function(x, y, type,color){
    allPoints.push(Point(x, y, type, color));
}

//izrišem kontrolno točko
//ne kliči iz razreda!!!
drawPoint = function(point) {
    ctx.beginPath();
    ctx.strokeStyle = point.color;
    if(point.type == "intpol")
        ctx.rect(point.x, point.y, point.height, point.width);
    else if(point.type == "aprox")
        ctx.arc(point.x, point.y, point.sAngle, point.eAngle, point.couterClock);

    ctx.closePath();
}

function drawAllPoints() {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.beginPath();
    for(var i = 0; i < allPoints.length; i++)
    {
        drawPoint(allPoints[i]);
        ctx.stroke();
    }
    ctx.closePath();
}

//razred točka, ki nam da koordinate in tip točke
function Point(x, y, type, color) {
    var point = {
        x: x,
        y: y,
        width: 10,
        height: 10,
        sAngle: 7,
        eAngle: 0,
        couterClock: 2 * Math.PI,
        type: type,
        color: color
    }
    return point;
}

function handleMouseUp(e){
    mouseIsDown = false;
}

function handleMouseDown(e){
    var mouseX = parseInt(e.clientX - offsetX);
    var mouseY = parseInt(e.clientY - offsetY);

    lastX = mouseX;
    lastY = mouseY;
    mouseIsDown = true;
}

function handleMouseMove(e){
    mouseX = parseInt(e.clientX-offsetX);
    mouseY = parseInt(e.clientY-offsetY);

    if(!mouseIsDown){ return; }

    for(var i = 0; i < allPoints.length; i++){
        var point = allPoints[i];
        drawPoint(point);

        //premik točke
        if(ctx.isPointInPath(lastX,lastY)){
            point.x += (mouseX - lastX);
            point.y += (mouseY - lastY);
        }
    }

    lastX = mouseX;
    lastY = mouseY;
    drawAllPoints();
    drawLine(allPoints);
}
