// contadora
var contadora = 0;

function conti() {
    updateDisplay(contadora++)
};

function updateDisplay(val) {
    document.getElementById("like").innerHTML = val;
};

//copiar
const btnCopiar = document.getElementById("copiar")
var campoTexto = 'michellynonato15@gmail.com';
var popup = document.querySelector(".popUp.show");
const close = document.querySelector(".close-btn");

btnCopiar.addEventListener('click', (texto) => {
    texto.preventDefault();

    navigator.clipboard.writeText(campoTexto);

    popup.style.display = "inline";
});

close.addEventListener('click', () => {
    popup.style.display = "none";
});