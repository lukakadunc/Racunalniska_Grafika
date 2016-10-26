/**
 * Created by Luka Kadunc on 26. 10. 2016.
 */


function PointManeger() {

    var k = document.getElementById("vnosnoPolje").value;
    //document.getElementById("testizpis").innerHTML = k
    var tab = [[ ]];
    var intab = [];
    tab = k.split("v");


    //Dela smo za enomesne vektorje
    intab[0] = new Vector4f(tab[1].charAt(1),tab[1].charAt(3),tab[1].charAt(5),1);
    v1 = new Vector4f(tab[1].charAt(1),tab[1].charAt(3),tab[1].charAt(5),1);
    v2 = new Vector4f(tab[2].charAt(1),tab[2].charAt(3),tab[2].charAt(5),1);
    //document.getElementById("testizpis").innerHTML = intab[0].getInfo() + "///" + v2.getInfo();
    //document.getElementById("testizpis").innerHTML = tab[1];

    var j=0;
    for(var i=1; i<tab.length; i++){
        intab[j]=new Vector4f(parseInt(tab[i].charAt(1)),parseInt(tab[i].charAt(3)),parseInt(tab[i].charAt(5)),1);
        document.getElementById("izpisnoPolje").innerHTML += intab[j].getInfo();
        j++;
    }


    var trez = new Vector4f();
    trez = outAdd(intab[0],intab[1]);
    //document.getElementById("testizpis").innerHTML = trez.getInfo();
}