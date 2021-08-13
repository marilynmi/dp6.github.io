// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//All Pages
//Event Contact Menu
window.onload=function(){
  var contato = document.querySelector('menu-lista-link menu-lista-contato');

  contato.addEventListener('click', function() {
    gtag('event', 'Contato_Click', {Categoria : 'menu', Ação : 'entre_em_contato', Rótulo : 'link_externo'});
  }, false);
}

//Event Download Menu
window.onload=function(){ //check page loading
  var download = document.querySelector('menu-lista-link menu-lista-download');

  download=addEventListener('click', function() {
    gtag('event', 'Download_Click', {Categoria : 'menu', Ação : 'download_pdf', Rótulo : 'download_pdf'});
  }, false);
}

//Page analise.html
//Event click image Lorem
  window.onload=function(){ //check page loading
  var buttonLorem = document.querySelector('lorem');

  buttonLorem=addEventListener('click', function() {
    gtag('event', 'Lorem_Click', {Categoria : 'analise', Ação : 'ver_mais', Rótulo : 'Lorem'});
  }, false);
}

//Event click image Ipsum
window.onload=function(){//check page loading
  var buttonIpsum = document.querySelector('ipsum');

  buttonIpsum=addEventListener('click', function() {
    gtag('event', 'Ipsum_Click', {Categoria : 'analise', Ação : 'ver_mais', Rótulo : 'Ipsum'});
  }, false);
}
//Event click image Dolor
window.onload=function(){ //check page loading
  var buttonDolor = document.querySelector('dolor');

  buttonDolor=addEventListener('click', function() {
    gtag('event', 'Dolor_Click', {Categoria : 'analise', Ação : 'ver_mais', Rótulo : 'Dolor'});
  }, false);
}

//Page sobre.html
//Event click Label name
window.onload=function(){ //check page loading
  var labelName = document.querySelector('nome');

  labelName=addEventListener('click', function() {
    gtag('event', 'Nome_Click', {Categoria : 'contato', Ação : 'nome', Rótulo : 'preencheu'});
  }, false);
}

//Event click Label email
window.onload=function(){ //check page loading
  var labelEmail = document.querySelector('email');

  labelEmail=addEventListener('click', function() {
    gtag('event', 'Email_Click', {Categoria : 'contato', Ação : 'email', Rótulo : 'preencheu'});
  }, false);
}
//Event click Label email
window.onload=function(){ //check page loading
  var labelTelefone = document.querySelector('telefone');

  labelTelefone=addEventListener('click', function() {
    gtag('event', 'Telefone_Click', {Categoria : 'contato', Ação : 'telefone', Rótulo : 'preencheu'});
  }, false);
}
//Event click Label aceita
window.onload=function(){ //check page loading
  var boxAceito = document.querySelector('aceito');

  boxAceito=addEventListener('click', function() {
    gtag('event', 'Aceito_Click', {Categoria : 'contato', Ação : 'aceito', Rótulo : 'preencheu'});
  }, false);
}

//Event click Button Submit
window.onload=function(){ //check page loading
  var buttonSubmit = document.querySelector('submit');

  buttonSubmit.addEventListener('submit', function(event) {

    // Prevents the browser from submitting the form
    // and thus unloading the current page.
    event.preventDefault();

    // Sends the event to Google Analytics and
    // resubmits the form once the hit is done.
    gtag('event', 'Submit Click', 'submit', {Categoria : 'contato', Ação : 'enviado', Rótulo : 'enviado',
      hitCallback: function() {
        buttonSubmit.submit();
      }
    });
  });
}