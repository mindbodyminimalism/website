 // JavaScript code for calculating chart

    //Calculation
    function calcNumbers(a, b) {
    return a * b;
}

    function calculate() {
    // Get user input
    var weight = parseInt(document.getElementById('weight').value);

    // Gather variables for calculation
    var begCurl = calcNumbers(weight, .1);
    var intCurl = calcNumbers(weight, .15);
    var advCurl = calcNumbers(weight, .25);
    var masCurl = calcNumbers(weight, .35);
    var proCurl = calcNumbers(weight, .45);
    var eliCurl = calcNumbers(weight, .55);
    var olyCurl = calcNumbers(weight, .65);

    var begpdown = calcNumbers(weight, .5);
    var intpdown = calcNumbers(weight, .75);
    var advpdown = calcNumbers(weight, 1);
    var maspdown = calcNumbers(weight, 1.25);
    var propdown = calcNumbers(weight, 1.5);
    var elipdown = calcNumbers(weight, 1.75);
    var olypdown = calcNumbers(weight, 2);

    var begrow = calcNumbers(weight, .5);
    var introw = calcNumbers(weight, .75);
    var advrow = calcNumbers(weight, 1);
    var masrow = calcNumbers(weight, 1.25);
    var prorow = calcNumbers(weight, 1.33);
    var elirow = calcNumbers(weight, 1.5);
    var olyrow = calcNumbers(weight, 1.75);

    var begBench = calcNumbers(weight, .5);
    var intBench = calcNumbers(weight, .75);
    var advBench = calcNumbers(weight, 1);
    var masBench = calcNumbers(weight, 1.25);
    var proBench = calcNumbers(weight, 1.5);
    var eliBench = calcNumbers(weight, 1.75);
    var olyBench = calcNumbers(weight, 2);

    var beglatr = calcNumbers(weight, .05);
    var intlatr = calcNumbers(weight, .1);
    var advlatr = calcNumbers(weight, .15);
    var maslatr = calcNumbers(weight, .2);
    var prolatr = calcNumbers(weight, .3);
    var elilatr = calcNumbers(weight, .4);
    var olylatr = calcNumbers(weight, .45);

    var begtrip = calcNumbers(weight, .75);
    var inttrip = calcNumbers(weight, 1);
    var advtrip = calcNumbers(weight, 1.25);
    var mastrip = calcNumbers(weight, 1.5);
    var protrip = calcNumbers(weight, 2);
    var elitrip = calcNumbers(weight, 2.4);
    var olytrip = calcNumbers(weight, 2.75);

    var begshrug = calcNumbers(weight, .2);
    var intshrug = calcNumbers(weight, .35);
    var advshrug = calcNumbers(weight, .6);
    var masshrug = calcNumbers(weight, .8);
    var proshrug = calcNumbers(weight, 1);
    var elishrug = calcNumbers(weight, 1.2);
    var olyshrug = calcNumbers(weight, 1.3);

    var begcfly = calcNumbers(weight, .5);
    var intcfly = calcNumbers(weight, .75);
    var advcfly = calcNumbers(weight, 1);
    var mascfly = calcNumbers(weight, 1.25);
    var procfly = calcNumbers(weight, 1.5);
    var elicfly = calcNumbers(weight, 1.75);
    var olycfly = calcNumbers(weight, 2);

    var beglegp = calcNumbers(weight, .75);
    var intlegp = calcNumbers(weight, 1.25);
    var advlegp = calcNumbers(weight, 1.75);
    var maslegp = calcNumbers(weight, 2.75);
    var prolegp = calcNumbers(weight, 3.75);
    var elilegp = calcNumbers(weight, 4.75);
    var olylegp = calcNumbers(weight, 5.5);

    var begcext = calcNumbers(weight, .5);
    var intcext = calcNumbers(weight, 1);
    var advcext = calcNumbers(weight, 1.5);
    var mascext = calcNumbers(weight, 2);
    var procext = calcNumbers(weight, 2.5);
    var elicext = calcNumbers(weight, 3);
    var olycext = calcNumbers(weight, 4);

    var beghabd = calcNumbers(weight, .5);
    var inthabd = calcNumbers(weight, .75);
    var advhabd = calcNumbers(weight, 1);
    var mashabd = calcNumbers(weight, 1.25);
    var prohabd = calcNumbers(weight, 1.75);
    var elihabd = calcNumbers(weight, 2.25);
    var olyhabd = calcNumbers(weight, 2.75);

    var beghadd = calcNumbers(weight, .5);
    var inthadd = calcNumbers(weight, .75);
    var advhadd = calcNumbers(weight, 1);
    var mashadd = calcNumbers(weight, 1.25);
    var prohadd = calcNumbers(weight, 1.75);
    var elihadd = calcNumbers(weight, 2.5);
    var olyhadd = calcNumbers(weight, 3);

    // Display to Chart
    document.getElementById("begCurl").innerHTML = begCurl.toFixed();
    document.getElementById("intCurl").innerHTML = intCurl.toFixed();
    document.getElementById("advCurl").innerHTML = advCurl.toFixed();
    document.getElementById("masCurl").innerHTML = masCurl.toFixed();
    document.getElementById("proCurl").innerHTML = proCurl.toFixed();
    document.getElementById("eliCurl").innerHTML = eliCurl.toFixed();
    document.getElementById("olyCurl").innerHTML = olyCurl.toFixed();

    document.getElementById("begpdown").innerHTML = begpdown.toFixed();
    document.getElementById("intpdown").innerHTML = intpdown.toFixed();
    document.getElementById("advpdown").innerHTML = advpdown.toFixed();
    document.getElementById("maspdown").innerHTML = maspdown.toFixed();
    document.getElementById("propdown").innerHTML = propdown.toFixed();
    document.getElementById("elipdown").innerHTML = elipdown.toFixed();
    document.getElementById("olypdown").innerHTML = olypdown.toFixed();

    document.getElementById("begrow").innerHTML = begrow.toFixed();
    document.getElementById("introw").innerHTML = introw.toFixed();
    document.getElementById("advrow").innerHTML = advrow.toFixed();
    document.getElementById("masrow").innerHTML = masrow.toFixed();
    document.getElementById("prorow").innerHTML = prorow.toFixed();
    document.getElementById("elirow").innerHTML = elirow.toFixed();
    document.getElementById("olyrow").innerHTML = olyrow.toFixed();

    document.getElementById("begBench").innerHTML = begBench.toFixed();
    document.getElementById("intBench").innerHTML = intBench.toFixed();
    document.getElementById("advBench").innerHTML = advBench.toFixed();
    document.getElementById("masBench").innerHTML = masBench.toFixed();
    document.getElementById("proBench").innerHTML = proBench.toFixed();
    document.getElementById("eliBench").innerHTML = eliBench.toFixed();
    document.getElementById("olyBench").innerHTML = olyBench.toFixed();

    document.getElementById("beglatr").innerHTML = beglatr.toFixed();
    document.getElementById("intlatr").innerHTML = intlatr.toFixed();
    document.getElementById("advlatr").innerHTML = advlatr.toFixed();
    document.getElementById("maslatr").innerHTML = maslatr.toFixed();
    document.getElementById("prolatr").innerHTML = prolatr.toFixed();
    document.getElementById("elilatr").innerHTML = elilatr.toFixed();
    document.getElementById("olylatr").innerHTML = olylatr.toFixed();

    document.getElementById("begtrip").innerHTML = begtrip.toFixed();
    document.getElementById("inttrip").innerHTML = inttrip.toFixed();
    document.getElementById("advtrip").innerHTML = advtrip.toFixed();
    document.getElementById("mastrip").innerHTML = mastrip.toFixed();
    document.getElementById("protrip").innerHTML = protrip.toFixed();
    document.getElementById("elitrip").innerHTML = elitrip.toFixed();
    document.getElementById("olytrip").innerHTML = olytrip.toFixed();

    document.getElementById("begshrug").innerHTML = begshrug.toFixed();
    document.getElementById("intshrug").innerHTML = intshrug.toFixed();
    document.getElementById("advshrug").innerHTML = advshrug.toFixed();
    document.getElementById("masshrug").innerHTML = masshrug.toFixed();
    document.getElementById("proshrug").innerHTML = proshrug.toFixed();
    document.getElementById("elishrug").innerHTML = elishrug.toFixed();
    document.getElementById("olyshrug").innerHTML = olyshrug.toFixed();

    document.getElementById("begcfly").innerHTML = begcfly.toFixed();
    document.getElementById("intcfly").innerHTML = intcfly.toFixed();
    document.getElementById("advcfly").innerHTML = advcfly.toFixed();
    document.getElementById("mascfly").innerHTML = mascfly.toFixed();
    document.getElementById("procfly").innerHTML = procfly.toFixed();
    document.getElementById("elicfly").innerHTML = elicfly.toFixed();
    document.getElementById("olycfly").innerHTML = olycfly.toFixed();

    document.getElementById("beglegp").innerHTML = beglegp.toFixed();
    document.getElementById("intlegp").innerHTML = intlegp.toFixed();
    document.getElementById("advlegp").innerHTML = advlegp.toFixed();
    document.getElementById("maslegp").innerHTML = maslegp.toFixed();
    document.getElementById("prolegp").innerHTML = prolegp.toFixed();
    document.getElementById("elilegp").innerHTML = elilegp.toFixed();
    document.getElementById("olylegp").innerHTML = olylegp.toFixed();

    document.getElementById("begcext").innerHTML = begcext.toFixed();
    document.getElementById("intcext").innerHTML = intcext.toFixed();
    document.getElementById("advcext").innerHTML = advcext.toFixed();
    document.getElementById("mascext").innerHTML = mascext.toFixed();
    document.getElementById("procext").innerHTML = procext.toFixed();
    document.getElementById("elicext").innerHTML = elicext.toFixed();
    document.getElementById("olycext").innerHTML = olycext.toFixed();

    document.getElementById("beghabd").innerHTML = beghabd.toFixed();
    document.getElementById("inthabd").innerHTML = inthabd.toFixed();
    document.getElementById("advhabd").innerHTML = advhabd.toFixed();
    document.getElementById("mashabd").innerHTML = mashabd.toFixed();
    document.getElementById("prohabd").innerHTML = prohabd.toFixed();
    document.getElementById("elihabd").innerHTML = elihabd.toFixed();
    document.getElementById("olyhabd").innerHTML = olyhabd.toFixed();

    document.getElementById("beghadd").innerHTML = beghadd.toFixed();
    document.getElementById("inthadd").innerHTML = inthadd.toFixed();
    document.getElementById("advhadd").innerHTML = advhadd.toFixed();
    document.getElementById("mashadd").innerHTML = mashadd.toFixed();
    document.getElementById("prohadd").innerHTML = prohadd.toFixed();
    document.getElementById("elihadd").innerHTML = elihadd.toFixed();
    document.getElementById("olyhadd").innerHTML = olyhadd.toFixed();

}