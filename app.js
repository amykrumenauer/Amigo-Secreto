// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar o nome à lista
function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const nome = amigoInput.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido!");
    } else {
        amigos.push(nome);
        amigoInput.value = "";  // Limpar o campo de entrada
        amigoInput.focus();     // Focar novamente no campo de entrada
        atualizarLista();
    }
}

// Função para atualizar a lista de amigos na página
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";  // Limpar a lista antes de adicionar os novos itens

    amigos.forEach(function(nome) {
        const li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

// Função para realizar o sorteio de um amigo secreto aleatório
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
    } else {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];

        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>O Amigo Secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
    }
}

