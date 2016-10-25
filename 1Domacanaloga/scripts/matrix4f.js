/**
 * Created by luka7 on 20. 10. 2016.
 */
function Matrix4f(m) {

    if (!m) {
        var m = [];
        for (var i = 0; i < 4; i++) {
            m[i] = Array(4).fill(0);
        }
    }
    this.m = m;
}

function outNegateM(matrika){
    var temp = new Matrix4f();
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            temp.m[i][j] = matrika.m[i][j] * (-1);
        }
    }
    return temp;
}

function outAddM(matrika1,matrika2) {
    var temp = new Matrix4f();
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            temp.m[i][j] = matrika1.m[i][j] + matrika2.m[i][j];
        }
    }
    return temp;

}

function outTranspose(matrika) {
    var temp = new Matrix4f();
    for(var i=0; i<4; i++) {
        for (var j = 0; j < 4; j++) {
        temp.m[i][j] = matrika.m[j][i];
        }
    }
    return temp;
    
}

function outMultiplyScalar(matrika,skalar) {
    var temp = new Matrix4f();
    for(var i=0; i<4; i++) {
        for (var j = 0; j < 4; j++) {
            temp.m[i][j] = matrika.m[i][j]*skalar;
        }
    }
    return temp;

}

/*
function outMultiply(matrika1,matrika2) {
    var temp = new Matrix4f();
    var transm2 = new Matrix4f();
    transm2 = outTranspose(matrika2);
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            temp.m[i][j] =
        }
    }

}
*/

function outMultiply(matrika1,matrika2) {
    var temp = new Matrix4f();
    //var transm2 = new Matrix4f();
    //transm2 = outTranspose(matrika2);
    for(var i=0; i<4; i++){
        var res=0;
        for(var j=0; j<4; j++){
            res+=matrika1[i][j]*matrika2[j][0];
        }
        temp[i][0]=res;
    }
    return temp;
}