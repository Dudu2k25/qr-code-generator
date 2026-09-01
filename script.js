const input = document.querySelector("#texto");
const botaoGerar = document.querySelector("#gerar");
const botaoLimpar = document.querySelector("#limpar");
const botaoBaixar = document.querySelector("#baixar");
const qrcode = document.querySelector("#qrcode");


// FUNÇÃO PARA GERAR O QR CODE
function gerarQRCode() {

    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite um texto ou URL!");
        return;
    }

    qrcode.innerHTML = "";

    new QRCode(qrcode, {
        text: texto,
        width: 200,
        height: 200
    });
}


// BOTÃO GERAR
botaoGerar.addEventListener("click", gerarQRCode);


// ENTER PARA GERAR
input.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        gerarQRCode();
    }

});


// BOTÃO LIMPAR
botaoLimpar.addEventListener("click", () => {

    input.value = "";
    qrcode.innerHTML = "";

});


// BOTÃO BAIXAR
botaoBaixar.addEventListener("click", () => {

    const imagem = qrcode.querySelector("img");

    if (!imagem) {
        alert("Gere um QR Code primeiro!");
        return;
    }

    const link = document.createElement("a");

    link.href = imagem.src;
    link.download = "qrcode.png";

    link.click();

});