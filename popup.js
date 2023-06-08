function plusdedetail(){
    document.getElementById("popup-1").classList.toggle("activeov") ;
}

function plusdedetail2(){
    document.getElementById("popup-2").classList.toggle("activeov") ;
}

function plusdedetail3(){
    document.getElementById("popup-3").classList.toggle("activeov") ;
}

function plusdedetail4(){
    document.getElementById("popup-4").classList.toggle("activeov") ;
}
function plusdedetail5(){
    document.getElementById("popup-5").classList.toggle("activeov") ;
}


var currentIndex = 1; // Index de la pop-up actuelle

function afficherPopup(index) {
  // Masquer toutes les pop-ups
  var popups = document.getElementsByClassName("popup");
  for (var i = 0; i < popups.length; i++) {
    popups[i].classList.remove("activeov");
  }

  // Afficher la pop-up spécifiée par l'index
  var popup = document.getElementById("popup-" + index);
  popup.classList.add("activeov");

  // Mettre à jour l'index actuel
  currentIndex = index;
}

function popupSuivante() {
  var totalPopups = 5; // Nombre total de pop-ups

  // Incrémenter l'index actuel et afficher la pop-up suivante
  currentIndex++;
  if (currentIndex > totalPopups) {
    currentIndex = 1; // Revenir à la première pop-up si on atteint la dernière
  }
  afficherPopup(currentIndex);
}

function popupPrecedente() {
  var totalPopups = 5; // Nombre total de pop-ups

  // Décrémenter l'index actuel et afficher la pop-up précédente
  currentIndex--;
  if (currentIndex < 1) {
    currentIndex = totalPopups; // Revenir à la dernière pop-up si on atteint la première
  }
  afficherPopup(currentIndex);
}
