function validateform() {
            var user = document.myform.user.value;
            var email = document.myform.email.value;
            var pwd = document.myform.pass.value;
            var pwd1 = document.myform.password1.value;
            
            if (email == null || email == "") {
                alert("Please enter your Email!!");
                return false;
            }
            if (email.length != "") {
                var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (regex.test(email) === false) {
                    alert("Enter a valid Email!!");
                    return false;
                }
            }
           if (pwd == null || pwd == "") {
                alert("Please enter Password!!");
                return false;
            }
            if (pwd.length != "") {
                var regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
                if (regex.test(pwd) === false) {
                    alert("Enter a valid password!!");
                    return false;
                }
            }
            if (pwd != pwd1) {
                alert("password mismatch");
                return false;
            }
            
            
        }
