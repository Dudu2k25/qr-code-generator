const input = document.querySelector("#texto");
const botaoGerar = document.querySelector("#gerar");
const botaoLimpar = document.querySelector("#limpar");
const botaoBaixar = document.querySelector("#baixar");

const inputCor = document.querySelector("#cor");
const inputTamanho = document.querySelector("#tamanho");

const qrcode = document.querySelector("#qrcode");


function gerarQRCode() {

    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite um texto ou URL!");
        return;
    }

    const cor = inputCor.value;
    const tamanho = Number(inputTamanho.value);

    qrcode.innerHTML = "";

    new QRCode(qrcode, {
        text: texto,
        width: tamanho,
        height: tamanho,
        colorDark: cor,
        colorLight: "#ffffff"
    });
}


botaoGerar.addEventListener("click", gerarQRCode);


input.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        gerarQRCode();
    }

});


botaoLimpar.addEventListener("click", () => {

    input.value = "";
    qrcode.innerHTML = "";

});


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