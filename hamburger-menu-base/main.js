$(document).ready(function(){
  console.log("Il DOM è stato caricato");

  var bottone = $('.hamburger-menu')

  bottone.click(function() {
    bottone.className() = bottone.classList + 'active'
    console.log('click');
  })

  /* var aperto = true

  bottone.click(function() {
    if(aperto){
      bottone.className() = bottone.classList - 'active'
    }else{
      bottone.className() = bottone.classList + 'active'
    }

    aperto = !aperto;
  }) */
})