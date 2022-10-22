let div_sam = document.getElementById("sample_div");
div_sam.style.backgroundColor = "red";
div_sam.style.color = "yellow";

function Child_function(){
    let one = document.getElementById("sample_list").firstChild.innerHTML;
    let two = document.getElementById("sample_list").firstElementChild.innerHTML;
    let three = document.getElementById("sample_list").lastChild.innerHTML;
    let four = document.getElementById("sample_list").lastElementChild.innerHTML;
    alert(one);
    alert(two);
    alert(three);
    alert(four);

    let nxt_sib = document.getElementById("middle").nextElementSibling.innerHTML;
    alert(nxt_sib);

    let prev_sib = document.getElementById("middle").previousElementSibling.innerHTML;
    alert(prev_sib);

    let count_child = document.getElementById("sample_list").childElementCount;
    alert(count_child);
};

let div = document.createElement("div");
div.id = "content";
div.innerHTML = "<p>CreateElement sample here";
document.body.appendChild(div);



/*let sample_num = 2.4;

let a = Math.round(sample_num);
alert (a)

let b = Math.ceil(sample_num);
alert (b);

let c = Math.floor(sample_num);
alert (c);

let d = Math.pow(3,3);
alert (d);

let e = Math.sqrt(25);
alert (e);

let f = Math.abs(-6);
alert (f);

let g = Math.min(12, 13, 26, 84, 101);
alert (g);

let h = Math.max(12, 13, 26, 84, 101);
alert (h);

let math_ran = Math.random();
alert(math_ran);

let math_ran_2 = (Math.floor(Math.random();
alert(math_ran);
*/

/*let date = new Date();
document.getElementById("dateTime").innerHTML = date;

document.getElementById("dateTime1").innerHTML = date.getFullYear();

document.getElementById("dateTime2").innerHTML = date.getMonth();

document.getElementById("dateTime3").innerHTML = date.getDate();

document.getElementById("dateTime4").innerHTML = date.getHours();

document.getElementById("dateTime5").innerHTML = date.getMinutes();

document.getElementById("dateTime6").innerHTML = date.getSeconds();

document.getElementById("dateTime7").innerHTML = date.getDay();
/*let SampleString = "Hello World!";
alert(SampleString.length);                                                                                                                                                    
alert(SampleString.slice(5,9));
alert(SampleString.substring(3,1));
alert(SampleString.replace("H","J"));*/
/*
const myGreet = function(){
    let firstname = document.getElementById("first").value;
    let fname = firstname.charAt(0).toUpperCase() + firstname.substr(1).toLowerCase();
    
    let lastname = document.getElementById("last").value.toUpperCase();
    let lname = lastname.charAt(0).toUpperCase() + lastname.substr(1).toLowerCase();
    
    document.getElementById("greet").innerHTML="Good morning, " + fname + " " + lname + "!";

    let SampleString = fname+" "+lname;
    alert(SampleString.length);                                     
    alert(SampleString.slice(5,9));
    alert(SampleString.substring(3,1));
    alert(SampleString.replace("M","J"));
}

let date = new Date();
document.getElementById("date").innerHTML = date;
*/


/*let sampleArray = [1, 13, 17, 20, 23];

function tester(number){
    return number > 0;
}

alert (sampleArray.every(tester));

sampleArray.fill(100, 2, 4);
alert(sampleArray);

let sampleArray = [1, 13, 17, 20, 23];

function tester(number){
    return number > 15;
}

alert(sampleArray.filter(tester));

let sampleArray = [1, 13, 17, 20, 23];

function tester(number){
    return number > 15;
}

alert(sampleArray.find(tester));


switch case:
https://stackoverflow.com/questions/58141566/how-to-record-and-update-the-win-loss-and-tie-history-of-rock-paper-scissors-g



*/
