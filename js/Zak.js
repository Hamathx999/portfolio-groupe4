const telecharger_bouton=document.querySelector("#telecharger");
telecharger_bouton.onclick=()=>{
     const lien=document.querySelector("#tele");
    lien.setAttribute("href","/CV/CV_Zakaria.Pdf");
    // lien.download="Votre "
}
