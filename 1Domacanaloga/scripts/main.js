/**
 * Created by luka7 on 14. 10. 2016.
 */

function main(){
    // Inicializacija vekotrjev in matrik
    var v1 = new Vector4f(1,2,3,0);
    var v2 = new Vector4f(3,2,1,0);
    var v;
    var leteci;
    var skalar = 3;




    // Operacije nad vektorji
    document.getElementById("vectorContent1").innerHTML = v1.getInfo();
    document.getElementById("vectorContent2").innerHTML = v2.getInfo();

        //outNegate
    v = outNegate(v1);
    document.getElementById("outNegate").innerHTML = v.getInfo();
        //outAdd
    v = outAdd(v1,v2);
    document.getElementById("outAdd").innerHTML = v.getInfo();
        //outScalarProduct
    v = outScalarProduct(skalar,v1);
    document.getElementById("outScalarProduct").innerHTML = v.getInfo();
        //outDotProduct
    leteci = outDotProduct(v1,v2);
    document.getElementById("outDotProduct").innerHTML = leteci;
        //outCrossProdcut
    v = outCrossProduct(v1,v2);
    document.getElementById("outCrossProduct").innerHTML = v.getInfo();
        //outLength
    document.getElementById("outLength").innerHTML = outLength(v1);
        //outNormalize
    v = outNormalize(v1,v2);
    document.getElementById("outNormalize").innerHTML = v.getInfo();

        //Projekcija
    v = outProject(v1,v2);
    document.getElementById("outProject").innerHTML = v.getInfo();
        //Kosinus kot
    document.getElementById("cosPhi").innerHTML = cosPhi(v1,v2);


//---------------MATRIKE
    var matrix1 = [
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4]
    ];
    var matrix2 = [
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0],
        [0,2,2,0]
    ];
    var m2 = new Matrix4f(matrix1);
    var m3 = new Matrix4f(matrix2);

    document.getElementById("matrixContent1").innerHTML = m2.m[0] +'<br>' + m2.m[1] +'<br>'+ m2.m[2] +'<br>' + m2.m[3] +'<br>' ;
    document.getElementById("matrixContent2").innerHTML = m3.m[0] +'<br>' + m3.m[1] +'<br>'+ m3.m[2] +'<br>' + m3.m[3] +'<br>' ;



    var m1 = outNegateM(m2);
    //Matrix out Negate
    document.getElementById("matrika").innerHTML = m1.m[0] +'<br>' + m1.m[1] +'<br>'+ m1.m[2] +'<br>' + m1.m[3] +'<br>' ;
    //Matrix out Add
    m1 = outAddM(m2,m3);
    document.getElementById("matrixOutAdd").innerHTML = m1.m[0] +'<br>' + m1.m[1] +'<br>'+ m1.m[2] +'<br>' + m1.m[3] +'<br>' ;
    //Matrix out Transpose
    m1 = outTranspose(m2);
    document.getElementById("matrixOutTranspose").innerHTML = m1.m[0] +'<br>' + m1.m[1] +'<br>'+ m1.m[2] +'<br>' + m1.m[3] +'<br>' ;
    var skalar = 2;
    //Matrix out Multiply Scalar
    m1 = outMultiplyScalar(m3,skalar);
    document.getElementById("matrikaskalar").innerHTML = m1.m[0] +'<br>' + m1.m[1] +'<br>'+ m1.m[2] +'<br>' + m1.m[3] +'<br>' ;
    //Matrix out Multiply
    m1 = outMultiply(m2,m3);
    document.getElementById("matrixOutMultiply").innerHTML = m1.m[0] +'<br>' + m1.m[1] +'<br>'+ m1.m[2] +'<br>' + m1.m[3] +'<br>' ;


    //PointManeger


}
