document.getElementById("btn").addEventListener("click", () => {
    for (let i =0; i < 15; i++) {
        const corazon = document.createElement("span");
        corazon.classList.add("corazon");
        corazon.innerText = "❤️";

        //posicion aleatoria
        corazon.style.left = Math.random() * window.innerWidth + "px";
        //inicio más abajo, con variación aleatoria
        corazon.style.top = (window.innerHeight - 100 + Math.random() * 50) + "px";
        //tamaño aleatorio
        corazon.style.fontSize = (Math.random() * 20 + 15) + "px";

        document.body.appendChild(corazon);

        //eliminar después de la animación
        setTimeout(() => {
            corazon.remove();
        }, 2000 + Math.random() * 1000); //duran de manera distinta
    }

});