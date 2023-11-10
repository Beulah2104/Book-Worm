function selectTheme(){
  console.log("setTheme called");
  var themeElement = document.getElementById("theme");
  var style = document.getElementById("style");
  var logo = document.getElementById("logo");
  var user = document.getElementById("userimage");
  console.log(themeElement.value);
  const linkCollection = document.getElementsByTagName("a");
  if(themeElement.value == "light")
  {
    style.href = "Style.css";    
    logo.src = "Light_logo.png";
    user.src = "LightUser.png";
    for(var i=0; i<linkCollection.length; i++)
    {
      var url = linkCollection[i].href;
      url = url.slice(0,-1) + "1";
      linkCollection[i].href = url;
      console.log(url);
    }
    console.log(style.href);
  }
  else
  {
    style.href = "Style3.css";
    logo.src = "Dark_logo.png";
    user.src = "DarkUser.png";
    for(var i=0; i<linkCollection.length; i++)
    {
      var url = linkCollection[i].href;
      url = url.slice(0,-1) + "2";
      linkCollection[i].href = url;
      console.log(url);
    }
  } 
}