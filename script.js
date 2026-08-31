
const input = document.querySelector("#texto");
const botao = document.querySelector("#gerar");
const qrcode = document.querySelector("#qrcode");

botao.addEventListener("click", () => {
    const texto = input.value.trim();

    // Verifica se o usuário digitou alguma coisa
    if (texto === "") {
        alert("Digite um texto ou URL!");
        return;
    }

    // Remove o QR Code anterior
    qrcode.innerHTML = "";

    // Gera o novo QR Code
    new QRCode(qrcode, {
        text: texto,
        width: 200,
        height: 200
    });
});

