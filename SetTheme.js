function setTheme()
{
  var themeid = document.URL;
  themeid = (themeid.slice(-1));
  var style = document.getElementById("style");
  var logo = document.getElementById("logo");
  var user = document.getElementById("userimage");
  const linkCollection = document.getElementsByTagName("a");
  if(themeid == 1)
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
  else if(themeid == 2)
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

  //set navigation display
  var element = document.getElementById("mobdrop");
  element.style.display = "none";
  if (window.innerWidth < 901)
  {
    console.log(window.innerWidth);
    var element = document.getElementById("mobnav");
    element.style.display = "none";
  }
}
setTheme();
