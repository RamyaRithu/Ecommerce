function ValidateEmail(mail) 
{
var emailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var emailvalue=mail.value;
if(emailvalue.match(emailFormat)){
    mail.style.border="";
    document.getElementById("emailmsg1").innerHTML="";
    return true;
}
else{
   alert("wrong");
   mail.value="";
   mail.style.border="1px solid red";
   mail.focus();
   document.getElementById("emailmsg1").innerHTML="please enter the valied mail";
    
}
}
function Validatephone(phone)
{
    var phonenoFormat=/^\d{10}$/;
    var phonevalue=phone.value;
    if(phonevalue.match(phonenoFormat)){
        phone.style.border="";
    document.getElementById("phonemsg1").innerHTML="";
        return true;

    }
    else{
        alert("wrong");
        phone.value="";
        phone.style.border="1px solid red";
        phone.focus();
        document.getElementById("phonemsg1").innerHTML="please enter correct one";
    }
}
function Validatepassword(password)
{
    var passwordFormat=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    var passwordvalue=password.value;
    if(passwordvalue.match(passwordFormat)){
        password.style.border="";
    document.getElementById("passwordmsg1").innerHTML="";
        return true;

    }
    else{
        alert("Check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.");
        password.value="";
        password.style.border="1px solid red";
        password.focus();
        document.getElementById("passwordmsg1").innerHTML="Check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.";
    }
}

function validatename(name)
  {
   var letters =/^[A-Za-z]+$/;
   if(name.value.match(letters))
     {
        name.style.border="";
        document.getElementById("namemsg1").innerHTML="";
      return true;
     }
   else
     {
     alert("Enter letters only");
     name.focus();
     name.style.border="1px solid red";
     document.getElementById("namemsg1").innerHTML="please enter Letters only";
     return false;
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
  function validation(){
    var form = document.getElementById("form_id")
    var name1 = document.getElementById("Name_id");
    var email1 = document.getElementById("Email_id");
    var phone1 =document.getElementById("Phone_id");
    var password1 =document.getElementById("Password_id");
    var address2 =document.getElementById("Address_id");


    if (!nullOrBlank(name1, "Please enter name !")) return;
  if (!nullOrBlank(email1, "Please enter email !")) return;
  if (!nullOrBlank(phone1, "Please enter number !")) return;
  if (!nullOrBlank(password1, "Please enter password !")) return;
   if (!nullOrBlank(address2, "Please enter Address  !")) return;

  form.action = "Home.html";
  form.submit();
}


  



  function nullOrBlank(elmId, msg) {
    var elemValue = elmId.value;
    elmId.style.border = "";
  
    if (
      elemValue.length == 0 ||
      elemValue == null ||
      elemValue == undefined ||
      elemValue == ""
    ) {
      alert(msg);
      elmId.focus();
      elmId.style.border = "1px solid red";
      return false;
    } else {
      elmId.style.border = "";
  
      return true;
    }
  }
  