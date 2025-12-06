var imgDiapositiva = document.querySelector("#container img");
var slideActual = document.getElementById("slideActual");
var totalSlides = document.getElementById("num_slides").value;
var spanTotalSlides = document.getElementById("totalSlides");
var btnRetroceder = document.querySelector("#btnRetroceder");
var btnAvanzar = document.querySelector("#btnAvanzar");
var listaSlides = document.querySelectorAll("#lista ul li");
var hamburguesa = document.querySelector(".toggle-btn");
var colorDeshabilitado = 'hsla(240, 11%, 36%, 1.00)';
var colorHabilitado = "#b4b3b3";
var contadorSlide = 1;

spanTotalSlides.textContent = totalSlides;
imgDiapositiva.setAttribute("src", "recursos/Diapositiva1.jpeg");

btnAvanzar.style.cursor = "pointer";
btnRetroceder.style.cursor = "pointer";

configurar();


function configurar() {
    slideActual.textContent = contadorSlide;
    
    if (contadorSlide == totalSlides) {
        btnAvanzar.disabled = true;
        btnAvanzar.style.background = colorDeshabilitado;
        btnAvanzar.style.cursor = "default"; 
    } else {
        btnAvanzar.disabled = false; 
        btnAvanzar.style.background = colorHabilitado;
        btnAvanzar.style.cursor = "pointer"; 
    }
    
    if (contadorSlide == 1) {
        btnRetroceder.disabled = true;
        btnRetroceder.style.background = colorDeshabilitado;
        btnRetroceder.style.cursor = "default"; 
        
    } else {
        btnRetroceder.disabled = false; 
        btnRetroceder.style.background = colorHabilitado;
        btnRetroceder.style.cursor = "pointer"; 
    }
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

hamburguesa.addEventListener("click", function(){
    document.querySelector("#lista").classList.toggle("active");
});

listaSlides.forEach((element, indice) => {
    element.style.cursor = "pointer";
    element.addEventListener("click",function(){
        contadorSlide = indice+1;
        imgDiapositiva.setAttribute("src","recursos/Diapositiva" + contadorSlide + ".jpeg");
        configurar();
    })
});
