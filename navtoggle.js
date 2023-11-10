function toggle()
{
  var element = document.getElementById("mobnav");
  if (element.style.display == "none")
  {
    element.style.display = "block";
    console.log(element.style.display);
  }
  else
  {
    element.style.display = "none";
    console.log(element.style.display);
  }
}
function genrestoggle()
{
  var element = document.getElementsByClassName("dropdownmenu")[0];
  if (element.style.display == "none")
  {
    element.style.display = "block";
    console.log(element.style.display);
  }
  else
  {
    element.style.display = "none";
  }
}
