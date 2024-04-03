// Fonction pour afficher le texte lettre par lettre
function typeWriter(text, element, speed) {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        element.innerText = text.substring(0, i + 1);
        i++;
      } else {
        clearInterval(interval);
        // Ajouter le curseur une fois que le texte est écrit
        element.innerHTML += '<span class="cursor">_</span>';
      }
    }, speed);
  }
  
  // Appel de la fonction avec le texte, l'élément cible et la vitesse d'écriture
  document.addEventListener("DOMContentLoaded", function() {
    const welcomeText = "Bonjour..";
    const welcomeHeading = document.getElementById("welcome-heading");
    // Effacer le contenu initial de l'élément
    welcomeHeading.innerText = "";
    typeWriter(welcomeText, welcomeHeading, 100);
  });