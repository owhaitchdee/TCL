function passFunction() {
    let pass = document.getElementById("pword").value;
    let final_password = pass;

    // WD20P-SC    
    switch (final_password) {
        case "WD20P-SC":
            alert("Successfully logged in");
            break;
        case "":
            alert("No pasword entered");
            break;
        default:
            alert("Wrong password");
            break;
    }
}


/*const addFunction = function (){
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    let result = Number(num1) + Number(num2);
    let result_final = parseFloat(result).toFixed(2);
    return result_final;
};
const subFunction = function (){
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    let result = Number(num1) - Number(num2);
    let result_final = parseFloat(result).toFixed(2);
    return result_final;
};
const multFunction = function (){
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    let result = Number(num1) * Number(num2);
    let result_final = parseFloat(result).toFixed(2);
    return result_final;
};
const divFunction = function (){
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    let result = Number(num1) / Number(num2);
    let result_final = parseFloat(result).toFixed(2);
    return result_final;
}