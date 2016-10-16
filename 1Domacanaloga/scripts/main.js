/**
 * Created by luka7 on 14. 10. 2016.
 */

function main(){
    // Inicializacija vekotrjev in matrik
    var v1 = new Vector4f(1,2,3,1);
    var v2 = new Vector4f(3,2,1,1);
    var v;
    var leteci;
    var skalar = 3;

    // Operacije nad vektorji
    document.getElementById("vectorContent1").innerHTML = v1.getInfo();
    document.getElementById("vectorContent2").innerHTML = v1.getInfo();

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
}
