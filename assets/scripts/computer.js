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

//abrir my computer
function pcwindow() {
    const janelas = document.querySelectorAll(".windowpc"); 
    janelas.forEach(janela => {
        janela.style.display = "block";
        barmypc.style.display = "block";
        barmypc.style.backgroundColor = "#2344ff" 
        janela.style.zIndex = 10;       // traz para frente se tiver mais janelas
    });
}

//fechar my computer
function windowclose() {
    const janelas = document.querySelectorAll(".windowpc");
    janelas.forEach(janela => {
        janela.style.display = "none";
        barmypc.style.display = "none";
        barmypc.style.backgroundColor = "#3e92ff"  
    });
}

//minimzar my computer
function windowmin() {
    const janelas = document.querySelectorAll(".windowpc");
    janelas.forEach(janela => {
        janela.style.display = "none";
        barmypc.style.display = "block";
        barmypc.style.backgroundColor = "#3e92ff"  
    });
}

//botões my computer
function clicksetup() {
    const setups = document.querySelectorAll("#setup"); 
    
    setups.forEach(setup => {
        setup.style.display = "block"; 
        
        about.style.display = "none"; 
        setup.style.zIndex = 10;       
    });
}
function clickabout() {
    const abouts = document.querySelectorAll("#about"); 
    abouts.forEach(about => {
        about.style.display = "block"; 
        setup.style.display = "none"; 
        about.style.zIndex = 10;       
    });
}

//minimizar pela barra
let aberta = true; 

function toggleBarra() {
    const janelas = document.querySelectorAll(".windowpc");
    const barmypc = document.getElementById("barmypc");
   

    if (aberta) {
        barmypc.style.cursor = "pointer"; 
        janelas.forEach(j => j.style.display = "none");
        barmypc.style.backgroundColor = "#3e92ff"
        aberta = false;
    } else {
        barmypc.style.cursor = "default"; 
        janelas.forEach(j => j.style.display = "block");
        barmypc.style.backgroundColor = "#2344ff"
        aberta = true;
    }
}