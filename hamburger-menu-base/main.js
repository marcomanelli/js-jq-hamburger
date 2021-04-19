$(document).ready(function(){
  console.log("Il DOM è stato caricato");

  var bottone = $('.fas')
  var hamburger = $('.hamburger-menu')
  var aperto = false

  bottone.click(function() {
    if(aperto){
      hamburger.removeClass('active')
      console.log('click')
    }else{
      hamburger.addClass('active')
      console.log('click')
    }

    aperto = !aperto;
  })
})