
//DOM
//querySelector / querySelectorAll
/*
let links = document.querySelectorAll("a");

links.forEach(function (link) {
    console.log(link);
});
*/

/* let celdas = document.querySelectorAll("td");

celdas.forEach(function (td) {
    td.addEventListener("click", function () {
        console.log(this);
    })
});

*/
// Obtener los elementos de la clase .close

let boton = document.querySelectorAll(".close");


// Recorrerlos

boton.forEach(function(close) {

    //agregar un eveneto click a cada uno de ellos - case sensitive
    close.addEventListener("click", function (event) {
        event.preventDefault();

        let content = document.querySelector(".content");
        // Quitar las clases de animacion que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");
        //Agregar clases para animar su salida fadeOutUp
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function() {
        location.href = "/";  
        },600)
        

        return false;
    })
    
})

/*
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
       icono.classList.remove("fa-star");
       icono.classList.add("fa-star");
})

*/
