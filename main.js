// elementos
const tabela = document.getElementById("tabelaJogadores");
const nomePlayer = document.getElementById("nomePlayer");
const vitorias = document.getElementById("vitorias");
const empates = document.getElementById("empates");
const derrotas = document.getElementById("derrotas");
const btnAdicionarJogador = document.getElementById("adicionarJogador");

// lista de jogadores
const players = [];

function adicionarLinhaNaTabela(i) {
  const jogador = players[i];

  let elemento = "<tr>";
  elemento += "<td>" + jogador.nomePlayer + "</td>";
  elemento += "<td>" + jogador.vitorias + "</td>";
  elemento += "<td>" + jogador.empates + "</td>";
  elemento += "<td>" + jogador.derrotas + "</td>";
  elemento += "<td>" + jogador.pontos + "</td>";
  elemento +=
    "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
  elemento +=
    "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
  elemento +=
    "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
  elemento +=
    "<td><button onClick='removerJogador(" +
    i +
    ")'>Remover Jogador</button></td>";
  elemento += "</tr>";

  return elemento;
}

function exibirNaTabela() {
  let linhas = "";
  const totalPlayer = players.length;
  for (let i = 0; i < totalPlayer; i++) {
    linhas += adicionarLinhaNaTabela(i);
  }
  tabela.innerHTML = linhas;
}

function Player() {
  this.nomePlayer = nomePlayer.value === "" ? "Jogador" : nomePlayer.value;
  this.vitorias = vitorias.value === "" ? 0 : Number(vitorias.value);
  this.empates = empates.value === "" ? 0 : Number(empates.value);
  this.derrotas = derrotas.value === "" ? 0 : Number(derrotas.value);
  this.pontos = this.vitorias * 3 + this.empates;
}

function adicionarJogador() {
  players.push(new Player());
  nomePlayer.value = vitorias.value = empates.value = derrotas.value = "";
  nomePlayer.focus();

  exibirNaTabela();
}

function adicionarVitoria(i) {
  const jogador = players[i];
  jogador.vitorias += 1;
  jogador.pontos += 3;

  exibirNaTabela();
}

function adicionarEmpate(i) {
  const jogador = players[i];
  jogador.empates += 1;
  jogador.pontos += 1;

  exibirNaTabela();
}

function adicionarDerrota(i) {
  const jogador = players[i];
  jogador.derrotas += 1;

  exibirNaTabela();
}

function removerJogador(i) {
  players.splice(i, 1);

  exibirNaTabela();
}

btnAdicionarJogador.addEventListener("click", adicionarJogador);
