//Declare Variables that select html ids
let decimalInput = document.getElementById("decimal-input");
let binaryInput = document.getElementById("binary-input");
let errorMsg = document.getElementById("error-msg");

//Convert decimal to binary when user inputs in decimal field
decimalInput.addEventListener("input", () => {
    let decimalValue = parseInt(decimalInput.value);
    //Converts the decimal value to binary
    binaryInput.value = decimalValue.toString(2);
});

//Convert binary to decimal when user inputs in binary field
binaryInput.addEventListener("input", () => {
    let binaryValue = binaryInput.value;
    //if the binary number is valid convert it to decimal
    if (binValidator(binaryValue)){
        decimalInput.value = parseInt(binaryValue, 2);
        errorMsg.textContent = "";
    }else{
        errorMsg.textContent = "Please Enter an Valid Binary Input";
    }


    //Function to validate binary input
    function binValidator(num) {
        for(let i = 0; i < num.length; i++){
            if(num[i] !== "0" && num[i] !== "1"){
                return false;
            }
        }
        return true;
    }
});