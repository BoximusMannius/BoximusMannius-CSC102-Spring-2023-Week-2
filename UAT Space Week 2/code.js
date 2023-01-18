function blastoffTimer(){
    console.log("blastoffTimer() started");
    //variable tracks time
    var currTime = 50;

    //timer at 50
    setTimeout(function(){
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 0);

     //timer at 45
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 5000);

    //timer at 40
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 10000);

    //timer at 35
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 15000);

    //timer at 30
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 20000);

    //timer at 25
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 25000);

    //timer at 20
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 30000);
   
    //timer at 15
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 35000);

    //timer at 10
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 40000);

    //timer at 5
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 45000);

    //timer at 0
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = "Blastoff!";
    }, 50000);

}


