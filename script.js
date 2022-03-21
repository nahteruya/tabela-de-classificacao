var jogador1 = {
    nome: "Naomi",
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    pontos: 0
};

var jogador2 = {
    nome: "Kaory",
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    pontos: 0
};

function calcularPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + (jogador.empates * 2) - (jogador.derrotas *1);
    return pontos;
}

jogador1.pontos = calcularPontos(jogador1);
jogador2.pontos = calcularPontos(jogador2);

var listaJogadores = [jogador1, jogador2];

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
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td></tr>";
    }
    var elemementoTabela = document.getElementById("bodyTable");
    elemementoTabela.innerHTML = elemementoTabela.innerHTML + elemento;
}

exibirJogadores(listaJogadores);

function adicionarVitoria(i) {
    var jogador = listaJogadores[i];
    jogador.vitorias++;
    jogador.pontos = calcularPontos(jogador);
    exibirJogadores(listaJogadores);
}