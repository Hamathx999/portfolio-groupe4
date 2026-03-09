function telechargerCV() {

    const element = document.querySelector("main");

    const options = {
        margin: 0.5,
        filename: "cv-Hawa-Ballo.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "cm", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(options).from(element).save();

    alert("Le fichier est téléchargé avec succès");

}