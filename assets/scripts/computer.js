function atualizarRelogio() {
    const agora = new Date();

    // Hora
    let horas = agora.getHours().toString().padStart(2, '0');
    let minutos = agora.getMinutes().toString().padStart(2, '0');
    let segundos = agora.getSeconds().toString().padStart(2, '0');

    document.getElementById("hora").textContent = `${horas}:${minutos}:${segundos}`;

    // Data (dd/mm/yy)
    let dia = agora.getDate().toString().padStart(2, '0');
    let mes = (agora.getMonth() + 1).toString().padStart(2, '0');
    let ano = agora.getFullYear().toString().slice(-2);

    document.getElementById("dia").textContent = `${dia}/${mes}/${ano}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();


const janelas = document.querySelector(".janelas");
const topo = janelas.querySelector(".topo");
const screen = document.querySelector(".screen");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

topo.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - janelas.offsetLeft;
    offsetY = e.clientY - janelas.offsetTop;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    // calcula a nova posição
    let newLeft = e.clientX - offsetX;
    let newTop = e.clientY - offsetY;

    // pega as dimensões da screen e da janela
    const screenRect = screen.getBoundingClientRect();
    const janelaRect = janelas.getBoundingClientRect();

    // limitar esquerda/direita
    if (newLeft < 0) newLeft = 0;
    if (newLeft + janelaRect.width > screenRect.width)
        newLeft = screenRect.width - janelaRect.width;

    // limitar cima/baixo
    if (newTop < 0) newTop = 0;
    if (newTop + janelaRect.height > screenRect.height)
        newTop = screenRect.height - janelaRect.height;

    // aplica posição
    janelas.style.left = newLeft + "px";
    janelas.style.top = newTop + "px";
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});


function pcwindow() {
    const janelas = document.querySelectorAll(".windowpc"); 
    janelas.forEach(janela => {
        janela.style.display = "block"; 
        janela.style.zIndex = 10;       // traz para frente se tiver mais janelas
    });
}

function windowclose() {
    const janelas = document.querySelectorAll(".windowpc");
    janelas.forEach(janela => {
        janela.style.display = "none"; 
    });
}