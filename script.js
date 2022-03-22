var jogadores = [];

function construtorJogador(nome) {
  return (jogador = {
    nome: nome,
    partidas: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
}

function adicionarJogador(nome = document.getElementById("nomeJogador")) {
  jogadores.push(construtorJogador(nome.value));
  nome.value = "";
  exibirJogadoresNaTela(jogadores);
}

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function exibirJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" +
      i +
      ")' class='btn-vitoria'>vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" +
      i +
      ")' class='btn-empate'>empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" +
      i +
      ")'class='btn-derrota'>derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibirJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibirJogadoresNaTela(jogadores);
}

function limparPontos() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }
  exibirJogadoresNaTela(jogadores);
}

function limparJogadores() {
  jogadores = [];
  exibirJogadoresNaTela(jogadores);
}