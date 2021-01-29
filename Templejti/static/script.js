// Funkcija za prikaži/sakrij shearch bar u Navigaciji

var showShearchBar = () =>
{
  
    var x = document.getElementById("shearchBar");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }

   
}