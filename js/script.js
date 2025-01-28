//menu responsive//

var btnMenuOpen= document.getElementById("btnMenuOpen");
var btnMenuClose= document.getElementById("btnMenuClose");
var menuResponsive = document.getElementById("menuBar");
var links = document.getElementById("links"); 

//click abrir

btnMenuOpen.addEventListener("click", function() { 
        menuResponsive.classList.add("active");

});


btnMenuClose.addEventListener("click", function() { 
    menuResponsive.classList.remove("active");

});

//cerrar menu con elementos de enlace

links.addEventListener("click", function () {
    
        menuResponsive.style.transitionDelay = "0.5s";
    menuResponsive.classList.remove("active");
});

//SLIDER DE PRODUCTOS


var contenedor = document.querySelector('.slider');
var btnIzquierdo = document.getElementById ("btn-izquierda");
var btnDerecho = document.getElementById ("btn-derecha");

//EVENTO PARA EL BOTON DERECHO

btnDerecho.addEventListener("click", function () {
    contenedor.scrollLeft += contenedor.offsetWidth;

});

btnIzquierdo.addEventListener ("click", function () {
    contenedor.scrollLeft-= contenedor.offsetWidth;

}); 


//VALIDACION DE FORMULARIO//

var formulario = document.getElementById("formulario");

function validar(e) {debugger
    var inputNombre = document.getElementById ("nombre");
    var inputEmail = document.getElementById ("email");
    var inputComments = document.getElementById ("comentarios");
    var alertSucces = document.getElementById ("alertSucces");
    var alertError = document.getElementById ("alertError");


    if (inputNombre.value == 0 || inputEmail.value == 0 || inputComments.textarea == 0) {
        e.preventDefault();
        alertError.classList.remove("hide");
        alertError.classList.add("show");

setTimeout (function() { 
    alertError.classList.remove("show");
    alertError.classList.add("hide"); }, 2000);



    }else { 
    
        e.preventDefault();
        alertSucces.classList.remove("hide");
        alertSucces.classList.add("show");

setTimeout (function() { 
    alertSucces.classList.remove("show");
    alertSucces.classList.add("hide"); }, 2000);

    inputNombre.value= "";
    inputEmail.value="";
    inputComments.value="";
    }

    
}
//eventos del formmulario//
formulario.addEventListener("submit", validar);


//BOTON SCROLL TOP//

var btnTop = document.getElementById("btn-top");


//DETECTAMOS SCROLL EN LA P.WEB//

window.addEventListener("scroll" ,function() { 

    var scroll = document.documentElement.scrollTop;
    var fullSize = document.documentElement.offsetHeight;
    var sizeVP = this.document.documentElement.clientHeight;


    if (scroll > 200) {
        btnTop.classList.add("show");
    
    }else{ 
        
        btnTop.classList.remove("show"); 
    }

        //MODIFICAR ELEMENTO CUANDO LLEGUE AL FINAL DE PAGINA//

if (fullSize < (scroll + sizeVP + 2)) {    

    btnTop.classList.add("scrollFinal");
}else{

    btnTop.classList.remove("scrollFinal");
}

    
});


//DETECTAMOS EVENTO CLICK EN EL BOTON//

btnTop.addEventListener("click",function () {
    window.scrollTo(0,0);



});