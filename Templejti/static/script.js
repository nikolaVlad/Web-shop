



// Funkcija za prikaz Shop Menia
var showShopMenu = () =>
{
  var x = document.getElementById("shopMenu");
  x.style.display = "block";
}

// Funkcija za sakrivanje Shop menia
var hideShopMenu = () =>
{
  var x = document.getElementById("shopMenu");
  x.style.display = "none";
}

// Funkcija za prikazivanje/sakrivanje Shop menia
var showHideShop = () =>
{
  
    var x = document.getElementById("shopMenu");
    
    if (x.style.display === "none") {
     showShopMenu();
    } 
    else {
       hideShopMenu();
    }
}


// Funkcija : Prikaži/Sakrij lozinku
var showHidePass = () =>
{
  var x = document.getElementById("pass");
  

  if(x.type == "text")
  {
    x.type = "password";
  }

  else
  {
    x.type = "text";
    
  }

}



// Funkcija koja na index stranici u slajderu prikazuje podatke o artiklu kad se misem predje preko slajdera
var showArticleInfo = (...args) =>
{
  for(x of args)
  {
    document.getElementById(x).style.display = "block"
  }

}

// Funkcija koja na index stranici u slajderu SAKRIVA podatke o artiklu kad se misem predje preko slajdera
var hideArticleInfo = (...args) =>
{
  for(x of args)
  {
    document.getElementById(x).style.display = "none"
  }
}



// Funkcija za scroll Up button na svakoj stranici
$(document).ready(function() 
{
  $('#toTopBtn').hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) 
    {
      $('#toTopBtn').fadeIn();
    }
    else {
      $('#toTopBtn').fadeOut();
    }
  });


  
  $('#toTopBtn').click(function() {
    $("html, body").animate({
    scrollTop: 0
    }, 300);
  
    return false;
  });
});


// Funkcija za prikaz i sakrivanje filter menija, na stranici sa svim proizvodima
var showHideFilters = () =>
{

  var filterBtn = document.getElementById('filterBtn');
  


  var filterMenu = document.getElementById("filterMenu");

  if(filterMenu.style.display == 'block')
  {
      filterMenu.style.display = 'none';
      filterBtn.classList.add(['fa-chevron-down']);
   
  }

  else
  {
      filterMenu.style.display = 'block';
      
      filterBtn.classList.add(['fa-chevron-up']);
  }

  console.log(filterBtn.classList.value)

}