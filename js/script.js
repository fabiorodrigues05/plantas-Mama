// Encontra a caixa de pesquisa
const pesquisa = document.getElementById("pesquisa");

// Encontra todos os produtos
const produtos = document.querySelectorAll(".produto");

// Quando o cliente escreve na pesquisa
pesquisa.addEventListener("input", function() {
    const texto = pesquisa.value.toLowerCase();

    produtos.forEach(function(produto) {
        const nome = produto.dataset.nome.toLowerCase();

        if (nome.includes(texto)) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }
    });
});