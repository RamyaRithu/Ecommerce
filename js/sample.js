

  function checkLetterValidation(elemId) {
    var letterformat = /^[A-Za-z]+$/;
  
    var getvalue = elemId.value;
  
    if (getvalue.match(letterformat)) {
      elemId.style.border = "";
      document.getElementById("product_name").innerHTML = "";
      return true;
    } else {
      alert(
        "Please Enter Valid Name [Use Only letters]"
      );
      elemId.value = "";
      elemId.style.border = "1px solid red";
      document.getElementById("product_name").innerHTML ="";
        "Please Enter Valid Name [Use Only letters]";
      elemId.focus();
    }
  }


  
  
  function checkdescriptionvalidation(elemId) {
    var letterformat = /^[A-Za-z]+$/;
  
    var getvalue = elemId.value;
  
    if (getvalue.match(letterformat)) {
      elemId.style.border = "";
      document.getElementById("product_description").innerHTML = "";
      return true;
    } else {
      alert(
        "Please Enter Valid Name [Use Only letters]"
      );
      elemId.value = "";
      elemId.style.border = "1px solid red";
      document.getElementById("product_description").innerHTML ="";
        "Please Enter Valid Name [Use Only letters]";
      elemId.focus();
    }

  }
  function checkdescriptionvalidation(elemId) {
    var letterformat = /^[A-Za-z]+$/;
  
    var getvalue = elemId.value;
  
    if (getvalue.match(letterformat)) {
      elemId.style.border = "";
      document.getElementById("product_description").innerHTML = "";
      return true;
    } else {
      alert(
        "Please Enter Valid Name [Use Only letters]"
      );
      elemId.value = "";
      elemId.style.border = "1px solid red";
      document.getElementById("product_description").innerHTML ="";
        "Please Enter Valid Name [Use Only letters]";
      elemId.focus();
    }
  }

  function checkpriceValidation(elemId) {
    var numbers = /^[0-9]+$/;
  
    var getvalue = elemId.value;
  
    if (getvalue.match(numbers)) {
      elemId.style.border = "";
      document.getElementById("product_price").innerHTML = "";
      return true;
    } else {
      alert(
        "Please Enter Valid Price [Use Only letters]"
      );
      elemId.value = "";
      elemId.style.border = "1px solid red";
      document.getElementById("product_price").innerHTML ="";
        "Please Enter Valid Price [Use Only Numbers]"
      elemId.focus();
    }
  }

  function checkstockvalidation(elemId) {
    var alphanumeric = /^[0-9a-zA-Z]+$/; 
  
    var getvalue = elemId.value;
  
    if (getvalue.match(alphanumeric)) {
      elemId.style.border = "";
      document.getElementById("product_stockvd").innerHTML = "";
      return true;
    } else {
      alert(
        "Please Enter Valid Stock [Use Only letters and Numbers]"
      );
      elemId.value = "";
      elemId.style.border = "1px solid red";
      document.getElementById("product_stockvd").innerHTML ="";
      "Please Enter Valid Stock [Use Only letters and Numbers]"
      elemId.focus();
    }
  }

  function validateSave() {
    var formId = document.getElementById("formLogRegister_id");
    var productname = document.getElementById("txtFldproductname_id");
  
    var price = document.getElementById("Productprice_id");
    var description = document.getElementById("productdesc_id");
    var stock = document.getElementById("productstock_id");
    
    if (!nullOrBlank(productname, "Please enter Product Name !")) return;
    if (!nullOrBlank(price, "Please enter Product Price !")) return;
    if (!nullOrBlank(description, "Please enter product Description !")) return;
    if (!nullOrBlank(stock, "Please enter stock !")) return;
    
     
      formId.action = "Home.html";
      formId.Submit();
  
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
  
//addprducttype report script//

  function checkTpeValidation(elemId) {
    var letterformat = /^[A-Za-z]+$/;
  
    var getvalue = elemId.value;
  
    if (getvalue.match(letterformat)) {
      elemId.style.border = "";
      document.getElementById("product_typename").innerHTML = "";
      return true;
    } else {
      alert(
        "Please Enter Product Name [Use Only letters]"
      );
      elemId.value = "";
      elemId.style.border = "1px solid red";
      document.getElementById("product_typename").innerHTML ="";
        "Please Enter Product Name [Use Only letters]";
      elemId.focus();
    }
  }

  function checkDescriptionValidation(elemId) {
    var letterformat = /^[A-Za-z]+$/;
  
    var getvalue = elemId.value;
  
    if (getvalue.match(letterformat)) {
      elemId.style.border = "";
      document.getElementById("Description_type").innerHTML = "";
      return true;
    } else {
      alert(
        "Please Enter Description [Use Only letters]"
      );
      elemId.value = "";
      elemId.style.border = "1px solid red";
      document.getElementById("Description_type").innerHTML ="";
        "Pleas Use Only letters";
      elemId.focus();
    }
  }
  function validateSave1() {
    var formId = document.getElementById("formproducttype_id");
    var type = document.getElementById("txtFltypename_id");
  
    var description = document.getElementById("txtFltdescription_id");
   
    
    if (!nullOrBlank(type, "Please enter Type Name !")) return;
    if (!nullOrBlank(description, "Please enter Description of the product !")) return;
    
     
      formId.action = "Home.html";
      formId.submit();
  
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
  // ----------------------------------end of addproducttypereport---------------