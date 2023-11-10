function checkTheme(){
  url = document.URL;
  var themeElement = document.getElementById("theme");
  var logo = document.getElementById("logo");
  var user = document.getElementById("userimage");
  if(url.slice(-1) == 1)
  {  
    themeElement.value = "light";
    style.href = "Style.css";
    logo.src = "Light_logo.png";
    user.src = "LightUser.png";
  }
  else if(url.slice(-1) == 2)
  {
    themeElement.value = "dark";
    style.href = "Style3.css";
    logo.src = "Dark_logo.png";
    user.src = "DarkUser.png";
  }
}
checkTheme();