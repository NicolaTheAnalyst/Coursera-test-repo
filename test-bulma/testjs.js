document.addEventListener("DOMContentLoaded", function(event) { //al caricamento del DOM (prima di css, immagini etc) viene caricata la funzione contenente i vari eventi da gestire ---> in questo modo, il js può essere messo a caricare sostanzialmente a qualsiasi altezza del HTML

    const noButton = document.getElementById('no');


    no.addEventListener('mouseover', function handleMouseOver() {
      noButton.textContent = 'Yes';
    });
    
    no.addEventListener('mouseout', function handleMouseOut() {
        noButton.textContent = 'No';
    });
    
    const delButton = document.getElementById('deleteButton');
    
    delButton.addEventListener('click', function click(){
        document.getElementById("messageLarge").style.display = "none";
        document.getElementById("hiddenPar").innerHTML = "NOOOOOOOOOOOOOOOOOOOOOOO :("
    });


});