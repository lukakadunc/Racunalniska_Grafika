/**
 * Created by luka7 on 27. 10. 2016.
 */
function translate(vektor){

    var transMatrika = [
        [1,0,0,0],
        [0,1,0,0],
        [0,0,1,0],
        [0,0,0,1]
    ];
    var tm = new Matrix4f(transMatrika);

    tm.m[0][3] = vektor.x;
    tm.m[1][3] = vektor.y;
    tm.m[2][3] = vektor.z;
    return tm;


}

function scale(vektor) {

    var transMatrika = [
        [1,0,0,0],
        [0,1,0,0],
        [0,0,1,0],
        [0,0,0,1]
    ];

    var tm = new Matrix4f(transMatrika);
    tm.m[0][0] = vektor.x;
    tm.m[1][1] = vektor.y;
    tm.m[2][2] = vektor.z;
    if(tm.m[0][0]==0)
        tm.m[0][0] =1;
    if(tm.m[1][1]==0)
        tm.m[1][1] =1;
    if(tm.m[2][2]==0)
        tm.m[2][2] =1;
    return tm;


}

function roatateX(a) {

    var transMatrika = [
        [1,0,0,0],
        [0,1,0,0],
        [0,0,1,0],
        [0,0,0,1]
    ];

    var tm = new Matrix4f(transMatrika);
    tm.m[1][1] = Math.cos(a)
    tm.m[1][2] = -Math.sin(a);
    tm.m[2][1] = Math.sin(a);
    tm.m[2][2] = Math.cos(a);
    return tm;


}


function roatateY(a) {

    var transMatrika = [
        [1,0,0,0],
        [0,1,0,0],
        [0,0,1,0],
        [0,0,0,1]
    ];

    var tm = new Matrix4f(transMatrika);
    tm.m[0][0] = Math.cos(a)
    tm.m[2][0] = -Math.sin(a);
    tm.m[0][2] = Math.sin(a);
    tm.m[2][2] = Math.cos(a);
    return tm;


}

function roatateZ(a) {

    var transMatrika = [
        [1,0,0,0],
        [0,1,0,0],
        [0,0,1,0],
        [0,0,0,1]
    ];

    var tm = new Matrix4f(transMatrika);
    tm.m[0][0] = Math.cos(a)
    tm.m[0][1] = -Math.sin(a);
    tm.m[1][0] = Math.sin(a);
    tm.m[1][1] = Math.cos(a);
    return tm;


}

function mandv(matrika,vektor){
    var temp= new Vector4f();
    temp.x = 	matrika.m[0][0] * vektor.x +
        matrika.m[0][1] * vektor.y +
        matrika.m[0][2] * vektor.z +
        matrika.m[0][3] * vektor.h;

    temp.y =	matrika.m[1][0] * vektor.x +
        matrika.m[1][1] * vektor.y +
        matrika.m[1][2] * vektor.z +
        matrika.m[1][3] * vektor.h;

    temp.z = 	matrika.m[2][0] * vektor.x +
        matrika.m[2][1] * vektor.y +
        matrika.m[2][2] * vektor.z +
        matrika.m[2][3] * vektor.h;

    temp.h = matrika.m[3][0] * vektor.x +
        matrika.m[3][1] * vektor.y +
        matrika.m[3][2] * vektor.z +
        matrika.m[3][3] * vektor.h;
    return temp;

}

function transformPoint(vektor) {

    var tempX = new Vector4f(1.25,0,0,1);
    var tempZ = new Vector4f(0,0,4.15,1);
    var tempY = new Vector4f(0,3.14,0,1);

    var tempX1 = new Vector4f(1.12,1.12,0,1);
    //var tempZ1 = Vector4f(0,0,4.15,1);
   // var tempZ1 = Vector4f(0,3.14,0,1);


    var pi= Math.PI/3;
    var pi1= 5*Math.PI/8;
    var transMatrika= new Matrix4f();



    transMatrika=translate(tempX);
    vektor=mandv(transMatrika,vektor);

    transMatrika=roatateZ(pi);
    vektor=mandv(transMatrika,vektor);

    transMatrika=translate(tempZ);
    vektor=mandv(transMatrika,vektor);

    transMatrika=translate(tempY);
    vektor=mandv(transMatrika,vektor);

    transMatrika=scale(tempX1);
    vektor=mandv(transMatrika,vektor);

    transMatrika=roatateY(pi1);
    vektor=mandv(transMatrika,vektor);



    return vektor;


}