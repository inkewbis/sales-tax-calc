//processEntries() takes result of user entered values
//and calculate tax total
function processEntries() {

    document.getElementById("subtotal").focus();
    
    var sub = document.getElementById("subtotal").value;
    var stax = document.getElementById("tax_rate").value;
    
    if(subtotal<0 || subtotal>10000 || stax<0 || stax>12)
    {
    
    alert("Invalid entry for numbers!");
    }
    else
    {
    
      
    var tax = sub * (stax/100);
      
    
    var tt = +sub + +tax;
      
    document.getElementById("sales_tax").value = tax.toFixed(2);
    
    document.getElementById("total").value = tt.toFixed(2);
    }
      
    }
    
    //clear() function here
    function clearEntries()
    {
    document.getElementById("subtotal").value = "";
    document.getElementById("tax_rate").value="";
    document.getElementById("sales_tax").value="";
    document.getElementById("total").value = "";
    
    document.getElementById("subtotal").focus();
    }