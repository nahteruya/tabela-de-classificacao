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

    var elementoDatalist = document.getElementById("jogadores");
    var elementoOption = document.createElement("option");
    elementoOption.setAttribute("value", novoJogador.nome);
    elementoDatalist.appendChild(elementoOption);
}

function calcularPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + (jogador.empates * 2) - (jogador.derrotas *1);
    if (pontos < 0){
        pontos = 0;
    }
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
        elemento += "<td><button onClick='removerJogador(" + i + ")'>Remover</button></td></tr>";
    }
    var elemementoTabela = document.getElementById("bodyTable");
    elemementoTabela.innerHTML = elemento;
}

exibirJogadores(listaJogadores);

function adicionarVitoriaJogador1() {
    var jogador1 = document.getElementById("jogador1").value;
    var jogador2 = document.getElementById("jogador2").value;
    for (var i=0; i<listaJogadores.length; i++)
    {
        if (jogador1 == listaJogadores[i].nome)
        {
            listaJogadores[i].vitorias++;
        }
        else if (jogador2 == listaJogadores[i].nome)
        {
            listaJogadores[i].derrotas++;
        }
        listaJogadores[i].pontos = calcularPontos(listaJogadores[i]);
        exibirJogadores(listaJogadores);
    }
    document.getElementById("jogador1").value = "";
    document.getElementById("jogador2").value = "";
}

function adicionarVitoriaJogador2() {
    var jogador1 = document.getElementById("jogador1").value;
    var jogador2 = document.getElementById("jogador2").value;
    for (var i=0; i<listaJogadores.length; i++)
    {
        if (jogador2 == listaJogadores[i].nome)
        {
            listaJogadores[i].vitorias++;
        }
        else if (jogador1 == listaJogadores[i].nome)
        {
            listaJogadores[i].derrotas++;
        }
        listaJogadores[i].pontos = calcularPontos(listaJogadores[i]);
        exibirJogadores(listaJogadores);
    }
    document.getElementById("jogador1").value = "";
    document.getElementById("jogador2").value = "";
}

function adicionarEmpate() {
    var jogador1 = document.getElementById("jogador1").value;
    var jogador2 = document.getElementById("jogador2").value;
    for (var i=0; i<listaJogadores.length; i++)
    {
        if (jogador1 == listaJogadores[i].nome || jogador2 == listaJogadores[i].nome)
        {
            listaJogadores[i].empates++;
        }
        listaJogadores[i].pontos = calcularPontos(listaJogadores[i]);
        exibirJogadores(listaJogadores);
    }
    document.getElementById("jogador1").value = "";
    document.getElementById("jogador2").value = "";
}

function removerJogador(i) {
    listaJogadores.splice(i, 1);
    exibirJogadores(listaJogadores);
}

function zerarPontuacao()
{
    for (var i=0; i<listaJogadores.length; i++)
    {
        listaJogadores[i].vitorias = 0;
        listaJogadores[i].derrotas = 0;
        listaJogadores[i].empates = 0;
        listaJogadores[i].pontos = calcularPontos(listaJogadores[i]);
        exibirJogadores(listaJogadores);
    }
}