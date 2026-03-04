document.addEventListener("DOMContentLoaded", function() {
  const bouton = document.querySelector('a');

    bouton.addEventListener("click", function() {
        bouton.href="../pdf/Hamath's portfolio.pdf";
        bouton.download="CV De Hamath";
    });
  });