/**
 * Created by luka7 on 15. 10. 2016.
 */

function Vector4f(param1,param2,param3,param4){
    this.x = parseInt(param1);
    this.y = parseInt(param2);
    this.z = parseInt(param3);
    this.h = parseInt(param4);
    this.getInfo = function(){
        return '[' + this.x + ' ' + this.y + ' '+ this.z + ' ' + this.h + ']' ;
    };
}


function outNegate(vektor){
    var temp = new Vector4f();
    temp.x = vektor.x * (-1);
    temp.y = vektor.y * (-1);
    temp.z = vektor.z * (-1);
    temp.h = vektor.h;
    return temp
}

function outAdd(vektor1,vektor2) {
    var temp = new Vector4f();
    temp.x = vektor1.x + vektor2.x;
    temp.y = vektor1.y + vektor2.y;
    temp.z = vektor1.z + vektor2.z;
    temp.h = vektor1.h;
    return temp;

}

function outScalarProduct(skalar,vektor) {
    var temp = new Vector4f();
    temp.x = vektor.x * skalar;
    temp.y = vektor.y * skalar;
    temp.z = vektor.z * skalar;
    temp.h = vektor.h;
    return temp;

}


function outDotProduct(vektor1, vektor2) {
    var temp = 0.0;
    temp = vektor1.x*vektor2.x + vektor1.y*vektor2.y + vektor1.z*vektor2.z;
    return temp;

}


function outCrossProduct(v1,v2) {
    var temp = new Vector4f();
    temp.x = v1.y * v2.z - v1.z * v2.y;
    temp.y = v1.z * v2.x - v1.x * v2.z;
    temp.z = v1.x * v2.y - v1.y * v2.x;
    temp.h = v1.h;
    return temp;

}

function outLength(vektor1) {
    return Math.sqrt(Math.pow(vektor1.x, 2) + Math.pow(vektor1.y, 2) + Math.pow(vektor1.z, 2)) ;
}

function outNormalize(vektor){
    temp = new Vector4f();
    dolzina = outLength(vektor);
    temp.x = vektor.x / dolzina;
    temp.y = vektor.y / dolzina;
    temp.z = vektor.z / dolzina;
    temp.h = vektor.h;

    return temp;

}

function outProject(v1,v2){
    temp = new Vector4f();
    var a = outDotProduct(v1,v2) / outDotProduct(v2,v2);
    temp.x = Math.round((v2.x * a) *10000 ) /10000;
    temp.y = Math.round((v2.y * a) *10000 ) /10000;
    temp.z =Math.round(( v2.z * a) *10000 ) /10000;
    temp.h = v2.h;
    return temp;
}

function cosPhi(v1,v2) {
    return Math.acos(outDotProduct(v1,v2) / (outLength(v1) * outLength(v2)));
}