// event handling techniques
/*
        1. onclick method
        functioname() eg: addition(); function call
        function addition(){
            alert("welcome")
        }

        Typography tags
        <h1>,<h2>,<h3>,<h4>,<h5>,<h6>
        <p>
        <span>
        <small> innerHTML
*/
/*
variable datatype: var,let,const
            var a = 20;
            var b= "hello";
            var a = ["1","2","4","5","6"];

            let test = 20;//number values where you can change value
            test = 100; I can do

const=Constant datatype
            const demo = "Java program";//cannot change the value
            demo  = "Python";//this cannot be possible in const



*/

function setDate() {
  var date = new Date(); //
  document.getElementById("spandate").innerHTML = date;
}

function clearAll() {
  document.getElementById("spandate").innerHTML = "";
}

function emailCheck(elemId) {
  //elemId="txtFldEmailId_id" // document.getElementById("spandate")
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  var elemValue = elemId.value; //jasdjksjadkjas-- wrong email id //thulasy@gmail.com--Rightvalue

  if (elemValue.match(emailFormat)) {
    elemId.style.border = "";
    document.getElementById("emailmsg").innerHTML = "";
    return true;
  } else {
    alert("Wrong Email");
    elemId.value = "";
    elemId.style.border = "1px solid red";
    document.getElementById("emailmsg").innerHTML =
      "Please enter correct email id!!!";
    elemId.focus();
  }
}

function checkPasswordValidation(elemId) {
  var decimal =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  var getvalue = elemId.value;

  if (getvalue.match(decimal)) {
    elemId.style.border = "";
    document.getElementById("passwrdmsg").innerHTML = "";
    return true;
  } else {
    alert(
      "Wrong Password [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]"
    );
    elemId.value = "";
    elemId.style.border = "1px solid red";
    document.getElementById("passwrdmsg").innerHTML =
      "Please enter correct Password!!![8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]";
    elemId.focus();
  }
}

function checkLetterValidation(elemId) {
  var letterformat = /^[A-Za-z]+$/;

  var getvalue = elemId.value;

  if (getvalue.match(letterformat)) {
    elemId.style.border = "";
    document.getElementById("lettermsg").innerHTML = "";
    return true;
  } else {
    alert(
      "Wrong Address [ Use only street name and country name - only letters]"
    );
    elemId.value = "";
    elemId.style.border = "1px solid red";
    document.getElementById("lettermsg").innerHTML =
      "Please enter correct Address!!!   [ Use only street name and country name - only letters]";
    elemId.focus();
  }
}
function validatedate(inputText) {
  var dateformat =
    /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  // Match the date format through regular expression

  inputText.style.border = "";
  document.getElementById("dobmsg").innerHTML = "";

  if (inputText.value.match(dateformat)) {
    document.form1.text1.focus();
    //Test which seperator is used '/' or '-'
    var opera1 = inputText.value.split("/");
    var opera2 = inputText.value.split("-");
    lopera1 = opera1.length;
    lopera2 = opera2.length;
    // Extract the string into month, date and year
    if (lopera1 > 1) {
      var pdate = inputText.value.split("/");
    } else if (lopera2 > 1) {
      var pdate = inputText.value.split("-");
    }
    var dd = parseInt(pdate[0]);
    var mm = parseInt(pdate[1]);
    var yy = parseInt(pdate[2]);
    // Create list of days of a month [assume there is no leap year by default]
    var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (mm == 1 || mm > 2) {
      if (dd > ListofDays[mm - 1]) {
        alert("Invalid date format!");
        return false;
      }
    }
    if (mm == 2) {
      var lyear = false;
      if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
        lyear = true;
      }
      if (lyear == false && dd >= 29) {
        alert("Invalid date format!");
        inputText.value = "";
        inputText.style.border = "1px solid red";
        document.getElementById("dobmsg").innerHTML =
          "Please enter date DD/MM/YYYY";
        inputText.focus();
        return false;
      }
      if (lyear == true && dd > 29) {
        alert("Invalid date format!");
        inputText.value = "";
        inputText.style.border = "1px solid red";
        document.getElementById("dobmsg").innerHTML =
          "Please enter date DD/MM/YYYY";
        inputText.focus();
        return false;
      }
    }
  } else {
    alert("Invalid date format!");
    inputText.value = "";
    inputText.style.border = "1px solid red";
    document.getElementById("dobmsg").innerHTML =
      "Please enter date DD/MM/YYYY";
    inputText.focus();
    document.form1.text1.focus();
    return false;
  }
}
