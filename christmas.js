var arrLength = 100;
var randomColors = [];

function randomize(){
    for(let i = 0; i<=arrLength; i++) {
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        let rowColor= "rgb(" + red +", " + green +", " + blue + ")";
        randomColors.push(rowColor);
        };
    document.getElementById("rgbnum").innerHTML = randomColors;
    };

randomize();

//var jLength = parseInt(document.getElementById("switchNo").value);
//var speed = parseInt(document.getElementById("speed").value);

function paskorows(){
    let jLength = parseInt(document.getElementById("switchNo").value);
    let speed = parseInt(document.getElementById("speed").value);
    for(let j=0; j<(jLength); j++){
      rowColorGen = setTimeout(()=>{
        let r1 = j+7;
        let r2 = j+6;
        let r3 = j+5;
        let r4 = j+4;
        let r5 = j+3;
        let r6 = j+2;
        let r7 = j+1;
        let r8 = j;
        document.getElementById("row1").style.color = randomColors[r1];
        document.getElementById("row2").style.color = randomColors[r2];
        document.getElementById("row3").style.color = randomColors[r3];
        document.getElementById("row4").style.color = randomColors[r4];
        document.getElementById("row5").style.color = randomColors[r5];
        document.getElementById("row6").style.color = randomColors[r6];
        document.getElementById("row7").style.color = randomColors[r7];
        document.getElementById("row8").style.color = randomColors[r8];
        document.getElementById("rgbnum1").innerText = randomColors[r1];
        document.getElementById("rgbnum2").innerText = randomColors[r2];
        document.getElementById("rgbnum3").innerText = randomColors[r3];
        document.getElementById("rgbnum4").innerText = randomColors[r4];
        document.getElementById("rgbnum5").innerText = randomColors[r5];
        document.getElementById("rgbnum6").innerText = randomColors[r6];
        document.getElementById("rgbnum7").innerText = randomColors[r7];
        document.getElementById("rgbnum8").innerText = randomColors[r8];
        },j*(speed));
      };
  };


