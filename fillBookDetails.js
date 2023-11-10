function fillBookDetails()
{
  const obj = JSON.parse(data);
  const list = document.getElementsByClassName("book");
  for (var i=0; i<list.length; i++)
  {
    var bookelement = document.getElementsByClassName("booksection")[0].getElementsByClassName("book")[i];
    console.log(bookelement);
    var booksrc = bookelement.src;
    console.log(booksrc);
    bookno = booksrc.slice(-10,-5);
    console.log(bookno);
    for(var j=0; j<50; j++)
    {
      if(obj.Books[j].bookNum==bookno)
      {
        var name;
        if((obj.Books[j].bookName).length > 20)
        {
          name = (obj.Books[j].bookName).slice(0,20) + ".."
        }
        else{ name = obj.Books[j].bookName}
        document.getElementsByClassName("bookname")[i].innerHTML=name;
        break;
      }
    }
  }
}
fillBookDetails();
