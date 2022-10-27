
//getting the rgb color
/*function lights(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return "rgb(" + red +", " + green +", " + blue + ")";
}

function paskoLights(){
    let pasko = document.getElementById("row1");
    let rgbSet = lights(); 
    pasko.style.color = rgbSet;

//display colorname
    document.getElementById("rgbnum").innerText = rgbSet; 
}

function start(){
    start_color = setInterval(paskoLights, 1000);
}

function stop(){ 
    clearInterval(start_color);
}
*/

String[] randomColors = new String[];
const arrLength = 10;
//const randomColors = [];


function randomize(){
    for(let i = 0; i<=arrLength; i++) {
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        let rowColor= "rgb(" + red +", " + green +", " + blue + ")";
        randomColors.push(rowColor);
        alert(rowColor);
        };
    document.getElementById("rgbnum").innerText = randomColors[];
    };

randomize();


function paskorows(){ 
    for(let j = 0; j<100; j++) {
        (function(j){
            setTimeout(function(j){
                var row1color = randomColors[j];
                var row2color = randomColors[j+6];
             //   document.getElementById('row1').style.color = row1color;
             //   document.getElementById('row2').style.color = row2color;
                document.getElementById('rgbnum').innerHTML = row1color + " " + row2color;
            }, 500)
            })(j);
        }
    };
        /*
        var row1color = randomColors[j+7];
        let row2color = randomColors[j+6];
        document.getElementById('row1').style.color = row1color;
        document.getElementById('row2').style.color = row2color;

        let row3color = randomColors[j+5];
        document.getElementById('row3').style.color = row3color;

        let row4color = randomColors[j+4];
        document.getElementById('row4').style.color = row4color;
        
        let row5color = randomColors[j+3];
        document.getElementById('row5').style.color = row5color;

        let row6color = randomColors[j+2];
        document.getElementById('row6').style.color = row6color;

        let row7color = randomColors[j+1];
        document.getElementById('row7').style.color = row7color;

        let row8color = randomColors[j];
        document.getElementById('row8').style.color = row8color;
        
        }*/
