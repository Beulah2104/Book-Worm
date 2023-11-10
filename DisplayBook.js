function displayBook()
{
  //log messages
  page = document.body.id;
  console.log(page);
  console.log("displayBook Function called");

  var index = document.URL;  //get URL of page
  index = (index.slice(-10,-5)); //get bookNum from URL
  console.log(index);
  const obj = JSON.parse(data);

  //display book details if bookNum in URL matches bookNum in JSON
  for(var i=0; i<50; i++)
  {
    if(obj.Books[i].bookNum==index)
    {
      document.getElementById("book").src=obj.Books[i].cover;
      document.getElementById("booktitle").innerHTML=obj.Books[i].bookName;
      document.getElementById("description").innerHTML=obj.Books[i].description;
      document.getElementById("author1").innerHTML=obj.Books[i].author1;
      document.getElementById("pages").innerHTML=obj.Books[i].pages;
      document.getElementById("publication").innerHTML=obj.Books[i].publication;
      document.getElementById("rate").innerHTML=obj.Books[i].rate;
	  document.getElementById("Reads").innerHTML=obj.Books[i].Reads;
      document.getElementById("Rating").innerHTML=obj.Books[i].Rating;
	  document.getElementById("days").innerHTML=obj.Books[i].days;
      break;
    }
  }
}
displayBook();
