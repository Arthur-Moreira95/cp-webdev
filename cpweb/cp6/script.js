//getAttribute - obter valor do atributo (Valor da linha)
//setAttribute - definir ou modificar o valor da linha

function changeImage() {
    const img = document.getElementById("myImage");
    const coletarSrc = img.getAttribute("src");

    if (coletarSrc === "comida1.webp") {
        img.setAttribute("src", "comida2.webp");
        img.setAttribute("alt", "Imagem da comida 2");
    } else { //caso contrario realize o processo inverso
        img.setAttribute("src", "comida1.webp");
        img.setAttribute("alt", "Imagem da camida 1");
    }

}