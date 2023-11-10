function extract()
{
  var obj = JSON.parse(data);
  var value = document.getElementById("sortby").value;
  console.log(value);
  var start = 0;
  var limit = 11;
  if ((document.URL).search("EnglishClassics") != -1 )
  {
    start = 0;
    limit = 11;
  }
  if ((document.URL).search("Self-Help") != -1 )
  {
    console.log("Self-Help")
    start = 12;
    limit = 23;
  }
  if ((document.URL).search("Biographies") != -1 )
  {
    start = 24;
    limit = 35;
  }
  if ((document.URL).search("Comics") != -1 )
  {
    start = 36;
    limit = 47;
  }

  if (value=="Top-read")
  {
    var i=0;
    console.log(obj.Books[start]);
    console.log(obj.Books[limit]);
    for(i=0; i<11; i++)
    { console.log("Outer Yes");
      for(var j=start; j<limit; j++)
      { console.log("Yes");
        if(obj.Books[j].Reads < obj.Books[j+1].Reads)
        { 
          var temp = obj.Books[j];
          obj.Books[j] = obj.Books[j+1];
          obj.Books[j+1] = temp;
        }
      }
    }
  }
  else if(value=="Top-rated")
  {
    var i=0;
    for(i=0; i<11; i++)
    {
      for(var j=start; j<limit; j++)
      {
        if(obj.Books[j].Rating < obj.Books[j+1].Rating)
        {
          var temp = obj.Books[j];
          obj.Books[j] = obj.Books[j+1];
          obj.Books[j+1] = temp;
        }
      }
    }
  }
  else if(value=="HighPrice")
  {
    var i=0;
    for(i=0; i<11; i++)
    {
      for(var j=start; j<limit; j++)
      {
        if(obj.Books[j].rate < obj.Books[j+1].rate)
        {
          var temp = obj.Books[j];
          obj.Books[j] = obj.Books[j+1];
          obj.Books[j+1] = temp;
        }
      }
    }
  }
  else if(value=="LowPrice")
  {
    var i=0;
    for(i=0; i<11; i++)
    {
      for(var j=start; j<limit; j++)
      {
        if(obj.Books[j].rate > obj.Books[j+1].rate)
        {
          var temp = obj.Books[j];
          obj.Books[j] = obj.Books[j+1];
          obj.Books[j+1] = temp;
        }
      }
    }
  }
  console.log(" extract function called");
  if ((document.URL).search("EnglishClassics") != -1 )
  {
    start = 0;
    limit = 11;
  }
  if ((document.URL).search("Self-Help") != -1 )
  {
    console.log("Self-Help");
    start = 12;
    limit = 23;
  }
  if ((document.URL).search("Biographies") != -1 )
  {
    console.log("Biographies");
    start = 24;
    limit = 35;
  }
  if ((document.URL).search("Comics") != -1 )
  {
    start = 36;
    limit = 47;
  }
  /* Display extracted books */
  for(var n=0; n<12; n++)
  {
  	 document.getElementsByClassName("bookdiv")[n].getElementsByClassName("book")[0].src = obj.Books[start].cover;
  	 document.getElementsByClassName("bookdiv")[n].getElementsByClassName("booklink")[0].href = "BookDetails.html?booknum=" + obj.Books[start].bookNum + "&th=" + (document.URL).slice(-1);
  	 document.getElementsByClassName("bookdiv")[n].id = obj.Books[start].bookNum;
     start++;
  }

    if ((document.URL).search("EnglishClassics") != -1 )
  {
    start = 0;
    limit = 11;
  }
  if ((document.URL).search("Self-Help") != -1 )
  {
    console.log("Self-Help");
    start = 12;
    limit = 23;
  }
  if ((document.URL).search("Biographies") != -1 )
  {
    console.log("Biographies");
    start = 24;
    limit = 35;
  }
  if ((document.URL).search("Comics") != -1 )
  {
    start = 36;
    limit = 47;
  }

  var value1 = document.getElementById("filterby").value;
  console.log(value1);
  if (value1=="price")
  {
    var minval = document.getElementById("min").value;
    var maxval = document.getElementById("max").value;
    for(var m=start; m<=limit; m++)
    {
      if(obj.Books[m].rate > maxval || obj.Books[m].rate < minval)
      { 
        console.log(obj.Books[m].rate)
        var identify = obj.Books[m].bookNum;
        console.log(identify)
        var book = document.getElementById(identify); 
        book.remove();
        console.log("done")
      }
    }
  }
  else if (value1=="rentdays")
  {
    var minval = document.getElementById("min").value;
    var maxval = document.getElementById("max").value;
    for(var m=start; m<=limit; m++)
    {
      if(obj.Books[m].days > maxval || obj.Books[m].days < minval)
      { 
        console.log(obj.Books[m].days)
        var identify = obj.Books[m].bookNum;
        console.log(identify)
        var book = document.getElementById(identify); 
        book.remove();
      }
    }
  }
  fillBookDetails();
}
