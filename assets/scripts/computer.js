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