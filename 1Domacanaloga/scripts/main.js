/**
 * Created by luka7 on 14. 10. 2016.
 */

function main(){
    // Inicializacija vekotrjev in matrik

    var h1 = parseFloat(document.getElementById("v1h").value);
    var h2 = parseFloat(document.getElementById("v2h").value);
    if(h1 < 0 || h1 > 1 || h2 < 0 || h2 > 1)
        window.alert("Homogena elementa mora biti 0(vektor) ali pa 1(točka)");
    //var v1 = new Vector4f(1,1,1,0);
    //var v2 = new Vector4f(1,1,1,0);



    var v1 = new Vector4f(parseFloat(document.getElementById("v1x").value), parseFloat(document.getElementById("v1y").value), parseFloat(document.getElementById("v1z").value), h1);
    var v2 = new Vector4f(parseFloat(document.getElementById("v2x").value), parseFloat(document.getElementById("v2y").value), parseFloat(document.getElementById("v2z").value), h2);

   // var v1 = new Vector4f(1,2,3,0);
    // var v2 = new Vector4f(3,2,1,0);
    var v;
    var leteci;
    var skalar = 3;




    // Operacije nad vektorji
   // document.getElementById("vectorContent1").innerHTML = v1.getInfo();
    //document.getElementById("vectorContent2").innerHTML = v2.getInfo();

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
        [parseFloat(document.getElementById("mx1").value),parseFloat(document.getElementById("mx2").value),parseFloat(document.getElementById("mx3").value),parseFloat(document.getElementById("mx4").value)],
        [parseFloat(document.getElementById("my1").value),parseFloat(document.getElementById("my2").value),parseFloat(document.getElementById("my3").value),parseFloat(document.getElementById("my4").value)],
        [parseFloat(document.getElementById("mz1").value),parseFloat(document.getElementById("mz2").value),parseFloat(document.getElementById("mz3").value),parseFloat(document.getElementById("mz4").value)],
        [parseFloat(document.getElementById("mh1").value),parseFloat(document.getElementById("mh2").value),parseFloat(document.getElementById("mh3").value),parseFloat(document.getElementById("mh4").value)]
    ];
    var matrix2 = [
        [parseFloat(document.getElementById("m2x1").value),parseFloat(document.getElementById("m2x2").value),parseFloat(document.getElementById("m2x3").value),parseFloat(document.getElementById("m2x4").value)],
        [parseFloat(document.getElementById("m2y1").value),parseFloat(document.getElementById("m2y2").value),parseFloat(document.getElementById("m2y3").value),parseFloat(document.getElementById("m2y4").value)],
        [parseFloat(document.getElementById("m2z1").value),parseFloat(document.getElementById("m2z2").value),parseFloat(document.getElementById("m2z3").value),parseFloat(document.getElementById("m2z4").value)],
        [parseFloat(document.getElementById("m2h1").value),parseFloat(document.getElementById("m2h2").value),parseFloat(document.getElementById("m2h3").value),parseFloat(document.getElementById("m2h4").value)]
    ];
    var m2 = new Matrix4f(matrix1);
    var m3 = new Matrix4f(matrix2);
    var a = 0.12;

   // document.getElementById("matrixContent1").innerHTML = m2.m[0] +'<br>' + m2.m[1] +'<br>'+ m2.m[2] +'<br>' + m2.m[3] +'<br>' ;
    //document.getElementById("matrixContent2").innerHTML = m3.m[0] +'<br>' + m3.m[1] +'<br>'+ m3.m[2] +'<br>' + m3.m[3] +'<br>' ;



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


    //Transformation


    m1 = translate(v1);
    document.getElementById("translate").innerHTML = m1.m[0] +'<br>' + m1.m[1] +'<br>'+ m1.m[2] +'<br>' + m1.m[3] +'<br>' ;


    m1 = scale(v1);
    document.getElementById("scale").innerHTML = m1.m[0] +'<br>' + m1.m[1] +'<br>'+ m1.m[2] +'<br>' + m1.m[3] +'<br>' ;

    m1 = roatateX(a)
    document.getElementById("rotateX").innerHTML = m1.m[0] +'<br>' + m1.m[1] +'<br>'+ m1.m[2] +'<br>' + m1.m[3] +'<br>' ;

    m1 = roatateY(a)
    document.getElementById("rotateY").innerHTML = m1.m[0] +'<br>' + m1.m[1] +'<br>'+ m1.m[2] +'<br>' + m1.m[3] +'<br>' ;

    m1 = roatateZ(a)
    document.getElementById("rotateZ").innerHTML = m1.m[0] +'<br>' + m1.m[1] +'<br>'+ m1.m[2] +'<br>' + m1.m[3] +'<br>' ;





    var v4 = new Vector4f(parseFloat(document.getElementById("v4x").value),parseFloat(document.getElementById("v4y").value),parseFloat(document.getElementById("v4z").value),1);
    var v3= new Vector4f();
    v3=transformPoint(v4)
    document.getElementById("test").innerHTML =v3.getInfo() + '<br>' ;


    document.getElementById("translate1").innerHTML =v1.getInfo();



}
