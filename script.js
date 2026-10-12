
var formulario = document.getElementById("form-login");
var campoSenha = document.getElementById("senha");
var mensagemErro = document.getElementById("erro");


campoSenha.addEventListener("input", function() {
    var numeros = campoSenha.value.replace(/\D/g, "").slice(0, 8);

    if (numeros.length > 4) {
        campoSenha.value = numeros.slice(0, 2) + "/" +
            numeros.slice(2, 4) + "/" + numeros.slice(4);
    } else if (numeros.length > 2) {
        campoSenha.value = numeros.slice(0, 2) + "/" +
            numeros.slice(2);
    } else {
        campoSenha.value = numeros;
    }
});

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    if (campoSenha.value.trim() === "13/10/2026") {
        document.getElementById("login").classList.add("escondida");
        document.getElementById("inicio").classList.remove("escondida");

        mensagemErro.textContent = "";
    } else {
        mensagemErro.textContent = "Essa data não parece ser a certa. Tente novamente.";
    }
});

var botoes = document.querySelectorAll("[data-ir]");

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        var destino = botao.getAttribute("data-ir");

        document.querySelectorAll(".tela").forEach(function(tela) {
            tela.classList.add("escondida");
        });

        document.getElementById(destino).classList.remove("escondida");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
