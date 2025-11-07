const boton = document.getElementById("btn");
const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");

const cumpleDia = 6;
const cumpleMes = 11;
const hoy = new Date();
const dia = hoy.getDate();
const mes = hoy.getMonth() + 1;

//Funcion de globos flotando
function lanzarGlobos() {
    for(let i = 0; i<15; i++){
            const globo = document.createElement("span");
            globo.classList.add("globo");

            //Varios colores de globos
            const colores = ["🎈", "🎉", "💛", "💙", "💜"];
            globo.innerText = colores[Math.floor(Math.random() * colores.length)];

            globo.style.left = Math.random() * window.innerWidth + "px";
            globo.style.top = (window.innerHeight - 100 + Math.random() * 50) + "px";
            globo.style.fontSize = (Math.random() * 25 + 20) + "px";

            document.body.appendChild(globo);

            setTimeout(() => globo.remove(), 4000 + Math.random() * 1000);
        }
}

//Funcion mostrar corazones
function lanzarCorazones() {
    for(let i = 0; i<15; i++){
            const corazon = document.createElement("span");
            corazon.classList.add("corazon");
            corazon.innerText = "❤️";
            corazon.style.left = Math.random() * window.innerWidth + "px";
            corazon.style.top = (window.innerHeight - 100 + Math.random() * 50) + "px";
            corazon.style.fontSize = (Math.random() * 20 + 15) + "px";
            document.body.appendChild(corazon);
            setTimeout(() => corazon.remove(), 2000 + Math.random() * 1000);
        }
}

//Si es su cumpleaños.
if(dia === cumpleDia && mes === cumpleMes){
    //Cambiar el texto.
    titulo.innerText = "Feliz cumpleaños Amor mío";
    mensaje.innerText = "Espero que lo estes pasando bien en este día especial. Recuerda que te amo demasiado y que siempre te apoyare.";

    //Mostrar mensaje emergente.
    setTimeout(() => {
        alert("🎉 ¡Feliz cumpleaños Dalma! Felicidades por un año más de vida cariño mío. 🎉");
    }, 1000);

    //Lanzar globos automaticamente.
    lanzarGlobos();
    //Repetir cada cierto tiempo.
    setInterval(lanzarGlobos, 3000);

} else {
    //Solo los corazones al dar click.
    boton.addEventListener("click", lanzarCorazones)
}