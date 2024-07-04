
function validateform() {
    var name = document.myform.name.value;
    var email = document.myform.email.value;
    var phone = document.myform.phone.value;
    
    if (name== null || name == "") {
        alert("Name can't be blank");
        return false;

    }
   
    if (phone.length!= "") {
        var re = /^(?=.{10})/;
        if (re.test(phone) == true) {
            alert("Please enter a valid phone number");
            return false;
        }
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
    else {
        alert("You have entered an invalid email address!")
        return (false)
    }
    {
        document.getElementById("Name").addEventListener("focus",focusone, false );
        document.getElementById("Name").addEventListener("blur", blurone, false );
        document.getElementById("Email").addEventListener("focus",focustwo, false );
        document.getElementById("Email").addEventListener("blur", blurone, false );
        document.getElementById("Password").addEventListener("submit",subfun, false );
        document.getElementById("Password").addEventListener("reset",resetfun, false );
        document.getElementById("Confirm Password").addEventListener("focus",focusone, false );
        document.getElementById("Confirm Password").addEventListener("blur", blurone, false );
        document.getElementById("Payment Mode").addEventListener("focus",focustwo, false );
        document.getElementById("Payment Mode").addEventListener("blur", blurone, false );
        document.getElementById("Adress").addEventListener("submit",subfun, false );
        document.getElementById("Adress").addEventListener("reset",resetfun, false );
        document.getElementById("Phone Number").addEventListener("submit",subfun, false );
        document.getElementById("Phone Number").addEventListener("reset",resetfun, false );
        document.getElementById("City").addEventListener("submit",subfun, false );
        document.getElementById("City").addEventListener("reset",resetfun, false );
        
                    
            
        }
        

}
