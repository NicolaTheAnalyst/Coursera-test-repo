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



