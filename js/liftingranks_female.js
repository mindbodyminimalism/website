 // JavaScript code for calculating chart

    //Calculation
    function calcNumbers(a, b) {
    return a * b;
}

    function calculateFemale() {
    // Get user input
    var weight = parseInt(document.getElementById('weight').value);

    // Gather variables for calculation
    var begCurl = calcNumbers(weight, .08);
    var intCurl = calcNumbers(weight, .12);
    var advCurl = calcNumbers(weight, .2);
    var masCurl = calcNumbers(weight, .3);
    var proCurl = calcNumbers(weight, .4);
    var eliCurl = calcNumbers(weight, .5);

    var begpdown = calcNumbers(weight, .4);
    var intpdown = calcNumbers(weight, .6);
    var advpdown = calcNumbers(weight, .8);
    var maspdown = calcNumbers(weight, 1);
    var propdown = calcNumbers(weight, 1.2);
    var elipdown = calcNumbers(weight, 1.4);

    var begrow = calcNumbers(weight, .4);
    var introw = calcNumbers(weight, .6);
    var advrow = calcNumbers(weight, .8);
    var masrow = calcNumbers(weight, 1);
    var prorow = calcNumbers(weight, 1.1);
    var elirow = calcNumbers(weight, 1.2);

    var begBench = calcNumbers(weight, .4);
    var intBench = calcNumbers(weight, .6);
    var advBench = calcNumbers(weight, .8);
    var masBench = calcNumbers(weight, 1);
    var proBench = calcNumbers(weight, 1.2);
    var eliBench = calcNumbers(weight, 1.4);

    var beglatr = calcNumbers(weight, .04);
    var intlatr = calcNumbers(weight, .08);
    var advlatr = calcNumbers(weight, .1);
    var maslatr = calcNumbers(weight, .14);
    var prolatr = calcNumbers(weight, .2);
    var elilatr = calcNumbers(weight, .3);

    var begtrip = calcNumbers(weight, .6);
    var inttrip = calcNumbers(weight, .8);
    var advtrip = calcNumbers(weight, 1);
    var mastrip = calcNumbers(weight, 1.2);
    var protrip = calcNumbers(weight, 1.6);
    var elitrip = calcNumbers(weight, 1.9);

    var begshrug = calcNumbers(weight, .16);
    var intshrug = calcNumbers(weight, .28);
    var advshrug = calcNumbers(weight, .48);
    var masshrug = calcNumbers(weight, .64);
    var proshrug = calcNumbers(weight, .8);
    var elishrug = calcNumbers(weight, .96);

    var begcfly = calcNumbers(weight, .4);
    var intcfly = calcNumbers(weight, .6);
    var advcfly = calcNumbers(weight, .8);
    var mascfly = calcNumbers(weight, 1);
    var procfly = calcNumbers(weight, 1.2);
    var elicfly = calcNumbers(weight, 1.4);

    var beglegp = calcNumbers(weight, .6);
    var intlegp = calcNumbers(weight, 1);
    var advlegp = calcNumbers(weight, 1.4);
    var maslegp = calcNumbers(weight, 2.2);
    var prolegp = calcNumbers(weight, 3);
    var elilegp = calcNumbers(weight, 3.8);

    var begcext = calcNumbers(weight, .5);
    var intcext = calcNumbers(weight, 1);
    var advcext = calcNumbers(weight, 1.5);
    var mascext = calcNumbers(weight, 2);
    var procext = calcNumbers(weight, 2.5);
    var elicext = calcNumbers(weight, 3);

    var beghabd = calcNumbers(weight, .4);
    var inthabd = calcNumbers(weight, .6);
    var advhabd = calcNumbers(weight, .8);
    var mashabd = calcNumbers(weight, 1);
    var prohabd = calcNumbers(weight, 1.4);
    var elihabd = calcNumbers(weight, 1.8);

    var beghadd = calcNumbers(weight, .4);
    var inthadd = calcNumbers(weight, .6);
    var advhadd = calcNumbers(weight, .8);
    var mashadd = calcNumbers(weight, 1);
    var prohadd = calcNumbers(weight, 1.4);
    var elihadd = calcNumbers(weight, 2);

    // Display to Chart
    document.getElementById("begCurl").innerHTML = begCurl.toFixed();
    document.getElementById("intCurl").innerHTML = intCurl.toFixed();
    document.getElementById("advCurl").innerHTML = advCurl.toFixed();
    document.getElementById("masCurl").innerHTML = masCurl.toFixed();
    document.getElementById("proCurl").innerHTML = proCurl.toFixed();
    document.getElementById("eliCurl").innerHTML = eliCurl.toFixed();

    document.getElementById("begpdown").innerHTML = begpdown.toFixed();
    document.getElementById("intpdown").innerHTML = intpdown.toFixed();
    document.getElementById("advpdown").innerHTML = advpdown.toFixed();
    document.getElementById("maspdown").innerHTML = maspdown.toFixed();
    document.getElementById("propdown").innerHTML = propdown.toFixed();
    document.getElementById("elipdown").innerHTML = elipdown.toFixed();

    document.getElementById("begrow").innerHTML = begrow.toFixed();
    document.getElementById("introw").innerHTML = introw.toFixed();
    document.getElementById("advrow").innerHTML = advrow.toFixed();
    document.getElementById("masrow").innerHTML = masrow.toFixed();
    document.getElementById("prorow").innerHTML = prorow.toFixed();
    document.getElementById("elirow").innerHTML = elirow.toFixed();

    document.getElementById("begBench").innerHTML = begBench.toFixed();
    document.getElementById("intBench").innerHTML = intBench.toFixed();
    document.getElementById("advBench").innerHTML = advBench.toFixed();
    document.getElementById("masBench").innerHTML = masBench.toFixed();
    document.getElementById("proBench").innerHTML = proBench.toFixed();
    document.getElementById("eliBench").innerHTML = eliBench.toFixed();

    document.getElementById("beglatr").innerHTML = beglatr.toFixed();
    document.getElementById("intlatr").innerHTML = intlatr.toFixed();
    document.getElementById("advlatr").innerHTML = advlatr.toFixed();
    document.getElementById("maslatr").innerHTML = maslatr.toFixed();
    document.getElementById("prolatr").innerHTML = prolatr.toFixed();
    document.getElementById("elilatr").innerHTML = elilatr.toFixed();

    document.getElementById("begtrip").innerHTML = begtrip.toFixed();
    document.getElementById("inttrip").innerHTML = inttrip.toFixed();
    document.getElementById("advtrip").innerHTML = advtrip.toFixed();
    document.getElementById("mastrip").innerHTML = mastrip.toFixed();
    document.getElementById("protrip").innerHTML = protrip.toFixed();
    document.getElementById("elitrip").innerHTML = elitrip.toFixed();

    document.getElementById("begshrug").innerHTML = begshrug.toFixed();
    document.getElementById("intshrug").innerHTML = intshrug.toFixed();
    document.getElementById("advshrug").innerHTML = advshrug.toFixed();
    document.getElementById("masshrug").innerHTML = masshrug.toFixed();
    document.getElementById("proshrug").innerHTML = proshrug.toFixed();
    document.getElementById("elishrug").innerHTML = elishrug.toFixed();

    document.getElementById("begcfly").innerHTML = begcfly.toFixed();
    document.getElementById("intcfly").innerHTML = intcfly.toFixed();
    document.getElementById("advcfly").innerHTML = advcfly.toFixed();
    document.getElementById("mascfly").innerHTML = mascfly.toFixed();
    document.getElementById("procfly").innerHTML = procfly.toFixed();
    document.getElementById("elicfly").innerHTML = elicfly.toFixed();

    document.getElementById("beglegp").innerHTML = beglegp.toFixed();
    document.getElementById("intlegp").innerHTML = intlegp.toFixed();
    document.getElementById("advlegp").innerHTML = advlegp.toFixed();
    document.getElementById("maslegp").innerHTML = maslegp.toFixed();
    document.getElementById("prolegp").innerHTML = prolegp.toFixed();
    document.getElementById("elilegp").innerHTML = elilegp.toFixed();

    document.getElementById("begcext").innerHTML = begcext.toFixed();
    document.getElementById("intcext").innerHTML = intcext.toFixed();
    document.getElementById("advcext").innerHTML = advcext.toFixed();
    document.getElementById("mascext").innerHTML = mascext.toFixed();
    document.getElementById("procext").innerHTML = procext.toFixed();
    document.getElementById("elicext").innerHTML = elicext.toFixed();

    document.getElementById("beghabd").innerHTML = beghabd.toFixed();
    document.getElementById("inthabd").innerHTML = inthabd.toFixed();
    document.getElementById("advhabd").innerHTML = advhabd.toFixed();
    document.getElementById("mashabd").innerHTML = mashabd.toFixed();
    document.getElementById("prohabd").innerHTML = prohabd.toFixed();
    document.getElementById("elihabd").innerHTML = elihabd.toFixed();

    document.getElementById("beghadd").innerHTML = beghadd.toFixed();
    document.getElementById("inthadd").innerHTML = inthadd.toFixed();
    document.getElementById("advhadd").innerHTML = advhadd.toFixed();
    document.getElementById("mashadd").innerHTML = mashadd.toFixed();
    document.getElementById("prohadd").innerHTML = prohadd.toFixed();
    document.getElementById("elihadd").innerHTML = elihadd.toFixed();

}