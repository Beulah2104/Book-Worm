function popup()
{
  window.open("login.html","login", "_parent", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, titlebar=no, navigationbar=no")
}

const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})
function login(email,pwd)
		   {
		      if(!email.checkValidity())
			  {
			    alert("Enter your email correctly");
				return false;
			  }
			  else if(!pwd.checkValidity())
			  {
			    alert("Enter your password correctly (Password should have minimum 8 characters with atleast 1 uppercase letter, 1 lowercase letter, and 1 digit)");
				return false;
			  }
			  else
			  {
			     alert("Logged in successfully");
				 
			
			  }
		   }
		   
		   function sign(email,pwd,cpwd)
		   {
		     if(!email.checkValidity())
			  {
			    alert("Enter your email correctly");
				return false;
			  }
			  else if(!pwd.checkValidity())
			  {
			    alert("Enter your password correctly");
				return false;
			  }
			  else if(!pwd.checkValidity())
			  {
			    alert("Enter your password correctly to confirm");
				return false;
			  }
			  else if(pwd.value!=cpwd.value)
			  {
			    alert("Invalid.Confirm password and password should be same");
				return false;
			  }
			  else
			  {
			     alert("Signed in successfully");
				 return true;
			  }
		   }
		   
