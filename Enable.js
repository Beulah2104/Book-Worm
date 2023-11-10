  function enable(){
    console.log(document.getElementById("filterby").value);
    if(document.getElementById("filterby").value != "None")
    {
      document.getElementById("min").disabled = false;
      document.getElementById("max").disabled = false;
    }
    else if (document.getElementById("filterby").value == "None")
    {
      document.getElementById("min").disabled = true;
      document.getElementById("max").disabled = true;
    }
  }
