function Search()
{
  console.log("Search function called");
  var body = document.getElementsByTagName("body")[0];
  console.log(body.childNodes);
  var result = [];
  var text = document.getElementById("search").value;
  console.log(text);
  const obj = JSON.parse(data);
  const regex = new RegExp(text, "i");
  console.log(regex);
  for(var k=0, l=0; k<48; k++)
  {
    var bookstring = JSON.stringify(obj.Books[k]);
    console.log("in for loop");
    if (bookstring.search(regex) != -1)
    {
      result[l] = obj.Books[k];
      l++; 
    }
  }
  console.log(result[0]);
  var main = document.getElementsByTagName("main")[0];
  console.log("clear contents");
  main.remove();

  var body = document.getElementsByTagName("body")[0];
  var division = document.createElement("main");
  var footer = document.getElementsByTagName("footer");
  console.log(body.childNodes);
  body.insertBefore(division, body.childNodes[4]);
  if (!result[0])
  {
    console.log("no matches");
    var heading = document.createElement("h3");
    var emptyline = document.createElement("br");
    var emptyline1 = document.createElement("br");
    var emptyline2 = document.createElement("br");
    var emptyline3 = document.createElement("br");
    var emptyline4 = document.createElement("br");
    var emptyline5 = document.createElement("br");
    var emptyline6 = document.createElement("br");
    var emptyline7 = document.createElement("br");
    var textnode = document.createTextNode("No matches found");
    heading.id = "Searchhead";
    heading.appendChild(textnode);
    division.appendChild(heading);
    division.appendChild(emptyline);
    division.appendChild(emptyline1);
    division.appendChild(emptyline2);
    division.appendChild(emptyline3);
    division.appendChild(emptyline4);
    division.appendChild(emptyline5);
    division.appendChild(emptyline6);
    division.appendChild(emptyline7);
  }
  else
  { 
    console.log("match found");
    var heading = document.createElement("h3");
    var textnode = document.createTextNode("Search results for " + '"' + text + '"');
    heading.id = "Searchhead";
    heading.appendChild(textnode);
    division.appendChild(heading);
    for(var k=0; k<result.length; k++)
    {
      var link = document.createElement("a");
      var selectedTheme = document.getElementById("theme").value;
      if((document.URL).slice(-1)==1 || selectedTheme == "light")
      {
        var theme = "&th=1";
      }
      else
      { var theme = "&th=2";}
      link.href = "BookDetails.html?booknum=" + result[k].bookNum + theme;
      link.id = "booklink";
      division.appendChild(link);
      var cover = document.createElement("img");
      cover.src = "Bookcovers/" + result[k].category + "/" + result[k].bookNum + ".jpeg";
      cover.id = "book";
      link.appendChild(cover);

    }
      var emptyline = document.createElement("br");
      var emptyline1 = document.createElement("br");
      var emptyline2 = document.createElement("br");
      var emptyline3 = document.createElement("br");
      var emptyline4 = document.createElement("br");
      var emptyline5 = document.createElement("br");
      var emptyline6 = document.createElement("br");
      var emptyline7 = document.createElement("br");
      division.appendChild(emptyline);
      division.appendChild(emptyline1);
      division.appendChild(emptyline2);
      division.appendChild(emptyline3);
      division.appendChild(emptyline4);
      division.appendChild(emptyline5);
      division.appendChild(emptyline6);
      division.appendChild(emptyline7);
  }
}
