function laatikkoFunktio(boxNumber){
    alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" + 
        "<p>Ja tähän tietysti jotain sisältöä...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (boxNumber == 2){
        document.getElementById("laatikko2").innerHTML ="<table style='width:100%'>" +
        "<tr>" +
        "<th>Ikä</th>" +
        "<th>Paino</th>" +
        "<th>Pituus</th>" +
        "</tr>" +
        "<tr>" +
        "<td>11</td>" +
        "<td>353</td>" +
        "<td>200</td>" +
        "</tr>" +
        "<tr>" +
        "<td>24</td>" +
          "<td>40</td>" +
          "<td>120</td>" +
          "</tr>" +
          "</table>";
    }             
    else if (boxNumber == 3){
        document.getElementById("laatikko3").innerHTML = "<img src='555.jpg'>";
    }
    
}
function yhteystietoFunktio() {
    var x = document.getElementById("yhteystietolomake");
    var text = "";
    var i;


    for (i = x.length-1; i >= 0; i--) {
      text += x.elements[i].name + ": " +  x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
  }
