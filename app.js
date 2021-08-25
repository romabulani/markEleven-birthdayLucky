var dobInput = document.querySelector("#input-dob");
var numberInput = document.querySelector("#input-number");
var btnCheck = document.querySelector("#check-button");
var paragraph = document.querySelector("#message");

function birthdayLucky(dob,number){
    var newDob = dob.replaceAll("-","");
    var sum = 0;
    for(let i=0; i<newDob.length; i++)
        sum = sum + Number(newDob.charAt(i));
    if (sum%number===0)
        paragraph.innerText = "Yayy! Your Birthday " + dob +" is Lucky!!🥳 🥳";
    else
        paragraph.innerHTML = "Oh No! Your Birthday " + dob +" is not Lucky!!😕";
}

function validate(){
    var dob = dobInput.value;
    var number = numberInput.value;
    if(dob && number)
        if(number<0)
            paragraph.innerHTML= "Lucky number should be greater than orequal to 0";
        else
            birthdayLucky(dob,number);
    else
        paragraph.innerHTML = "Enter both the fields";
}

btnCheck.addEventListener("click", validate);