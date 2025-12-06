var imgDiapositiva = document.querySelector("#container img");
var slideActual = document.getElementById("slideActual");
var totalSlides = document.getElementById("num_slides").value;
var spanTotalSlides = document.getElementById("totalSlides");
var btnRetroceder = document.querySelector("#btnRetroceder");
var btnAvanzar = document.querySelector("#btnAvanzar");
var listaSlides = document.querySelectorAll("#lista ul li");
var contadorSlide = 1;

spanTotalSlides.textContent = totalSlides;

imgDiapositiva.setAttribute("src", "recursos/Diapositiva1.jpeg");

configurar();


function configurar() {
    slideActual.textContent = contadorSlide;
}

btnAvanzar.addEventListener("click", function(){
    if (contadorSlide < totalSlides) {
        contadorSlide++;
        imgDiapositiva.setAttribute("src", "recursos/Diapositiva" + contadorSlide + ".jpeg");
        configurar();
    }
});

btnRetroceder.addEventListener("click", function(){
    if (contadorSlide > 1) {
        contadorSlide--;
        imgDiapositiva.setAttribute("src", "recursos/Diapositiva" + contadorSlide + ".jpeg");
        configurar();
    }
});
