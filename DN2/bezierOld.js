/**
 * Created by luka7 on 2. 12. 2016.
 */

//Main function

var lastX;
var lastY;
var mouseX;
var mouseY;
var mouseIsDown;
var offsetX;
var offsetY;
var dragok = false;
//točke ki definirajo krivuljo
var allPoints = [];
//točki ki definirata začetek in konec črte
var startEndPoints = [];
var ctx;



function main() {

    //init
    var canvas = document.getElementById("platno");
    var ctx = canvas.getContext("2d");
    lastX = 0;
    lastY = 0;
    mouseIsDown = false;
    offsetX = canvas.offsetLeft;
    offsetY = canvas.offsetTop;
    i=0;



    var typeCheck = 0;

    canvas.onclick = function () {
        console.log("On click notri sem");
        if(typeCheck <= 3){
            if(typeCheck <= 1){
                //izriši začetek in konec črte
                addStartEnd(mouseX,mouseY, "interpol");
                drawStartEndPoints(ctx,canvas);
                typeCheck++;
            }
            else{

                //izriši točke
                addPoint(mouseX,mouseY, "approx");
                drawAllPoints(ctx,canvas);
                typeCheck++;
            }

        }
        //Narise crko in resetira stevec
        if(typeCheck == 4) {
            //draw line
            drawLine(startEndPoints);
            typeCheck = 0;
        }

    }

    canvas.onmousedown = function(e){handleMouseDown(e)};
    canvas.onmousemove = function(e){handleMouseMove(e)};
    canvas.onmouseup   = function(e){handleMouseUp(e)};




}

function Point(type) {
    this.x = 0;
    this.y = 0;
    this.type = type;
    //this.width  = 5;
    //this.height = 5;
    //this.sAngle = 4;
   // this.eAngle = 0;
   // this.couterClock = 2 * Math.PI;

}

//Dodaj tocke za interpolacijo
function addPoint(x,y, type) {
    var p = new Point(type);
    p.x = x;
    p.y = y;
    allPoints.push(p);

}

//Izris tock za interpolacijo
function drawAllPoints(ctx,canvas) {
    var canvas = document.getElementById("platno");

    for(var i = 0; i<allPoints.length;i++){
        ctx.beginPath();
        ctx.arc(allPoints[i].x,allPoints[i].y,8,0,2*Math.PI);
        ctx.stroke();
    }


}

//Start in End Definirane ravne črte (kvadratne točke)
function addStartEnd(x,y, type) {
    var se = new Point(type);
    se.x = x;
    se.y = y;
    startEndPoints.push(se);

}

//Risanje kvadratkov
function drawStartEndPoints(ctx,canvas) {
    var canvas = document.getElementById("platno");

    for(var i = 0; i<startEndPoints.length;i++){
        ctx.beginPath();
        ctx.rect(startEndPoints[i].x,startEndPoints[i].y,8,8);
        ctx.stroke();
    }


}


//Risanje crt med kvadratki
function drawLine(sqarePoints){
    var canvas = document.getElementById("platno");
    ctx.beginPath();
    for(var i=0; i<startEndPoints.length-1; i+=2)
    {
        ctx.moveTo(startEndPoints[i].x, startEndPoints[i].y);
        ctx.lineTo(startEndPoints[i+1].x, startEndPoints[i+1].y);
        ctx.stroke();
    }

}

//Premiki miške -- Handle moouse
function handleMouseUp(e){
    //var mouseX = parseInt(e.clientX - offsetX);
    //var mouseY = parseInt(e.clientY - offsetY);

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

    var allPoints = startEndPoints.concat(allPoints);
    console.log("Vse točke " + allPoints);
    console.log("1. " + startEndPoints);
    console.log("2. " + startEndPoints);

    for(var i = 0; i < allPoints.length; i++) {
        var point = allPoints[i];

        if(point.type == "interpol")
        {
            //ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            ctx.beginPath();
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            ctx.beginPath();
            ctx.rect(point.x, point.y, point.height, point.width);
            ctx.stroke();
            ctx.closePath();
        }
        else
        {
            //ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            ctx.beginPath();
            ctx.arc(allPoints[i].x,allPoints[i].y,8,0,2*Math.PI);
            ctx.stroke();
            ctx.closePath();
        }

        if (ctx.isPointInPath(lastX, lastY)) {
            point.x += (mouseX - lastX);
            point.y += (mouseY - lastY);
        }
    }
    lastX = mouseX;
    lastY = mouseY;

    //izris vseh točk na novo
    //ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    ctx.beginPath();
    for(var i = 0; i < startEndPoints.length; i++) {
        //
        ctx.rect(point.x, point.y, point.height, point.width);
        ctx.stroke();

    }

    for(var i = 0; i < allPoints.length; i++)
    {
        ctx.arc(allPoints[i].x,allPoints[i].y,8,0,2*Math.PI);
        ctx.stroke();
    }
    ctx.closePath();

}



