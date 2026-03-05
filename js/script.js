const images=document.querySelectorAll("figure>img");
images.forEach((element)=>{
    element.onclick=(e)=>{
        const cible=e.target;
        const nom=cible.nextElementSibling.textContent.toLowerCase();
        alert(nom);
        switch (nom) {
            case "hamath diallo":
                window.location="cv-hamath diallo.html";
                break;
            case "seyba y sissoko":
                window.location="cv-seyba y sissoko.html";
                break;
                case "aissata moulekafou":
                window.location="cv-aissata moulekafou.html";
                break;
                case "al banou sylla":
                window.location="cv-al banou sylla.html";
                break;
                case "hawa ballo":
                window.location="cv-hawa ballo.html";
                break;
                case "koniba awa":
                window.location="cv-koniba awa.html";
                break;
                case "mohamed coulibaly":
                window.location="cv-mohamed coulibaly.html";
                break;
                case "zakaria nouhou":
                window.location="cv-zakaria nouhou.html";
                break;
                case "amidou diagana":
                window.location="cv-amidou diagana.html";
                break;
                case "cheick ayoub sanogo":
                window.location="cv-cheick ayoub sanogo.html";
                break;
                case "amadou n'diaye":
                window.location="cv-amadou n'diaye.html";
                break;
            default:
                alert("ce cv n'existe pas");
                break;
        }
    }
});
