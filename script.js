var listaJogadores = [];

function adicionarJogador() {
    var novoJogador = {
        nome: "",
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        pontos: 0
    };
    var nomeNovoJogador = document.getElementById("nomeJogador").value;
    listaJogadores.push(novoJogador);
    novoJogador.nome = nomeNovoJogador;
    exibirJogadores(listaJogadores);
    document.getElementById("nomeJogador").value = "";
}

function calcularPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + (jogador.empates * 2) - (jogador.derrotas *1);
    return pontos;
}

function exibirJogadores(listaJogadores) {
    var elemento = "";
    for (var i = 0; i < listaJogadores.length; i++)
    {
        elemento += "<tr><td>" + listaJogadores[i].nome + "</td>";
        elemento += "<td>" + listaJogadores[i].vitorias + "</td>";
        elemento += "<td>" + listaJogadores[i].derrotas + "</td>";
        elemento += "<td>" + listaJogadores[i].empates + "</td>";
        elemento += "<td>" + listaJogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "<td><button onClick='removerJogador(" + i + ")'>Remover</button></td></tr>";
    }
    var elemementoTabela = document.getElementById("bodyTable");
    elemementoTabela.innerHTML = elemento;
}

exibirJogadores(listaJogadores);

function adicionarVitoria(i) {
    var jogador = listaJogadores[i];
    jogador.vitorias++;
    jogador.pontos = calcularPontos(jogador);
    exibirJogadores(listaJogadores);
}

function adicionarEmpate(i) {
    var jogador = listaJogadores[i];
    jogador.empates++;
    jogador.pontos = calcularPontos(jogador);
    exibirJogadores(listaJogadores);
}

function adicionarDerrota(i) {
    var jogador = listaJogadores[i];
    jogador.derrotas++;
    jogador.pontos = calcularPontos(jogador);
    exibirJogadores(listaJogadores);
}

function removerJogador(i) {
    listaJogadores.splice(i, 1);
    /* console.log(listaJogadores); */
    exibirJogadores(listaJogadores);
}



