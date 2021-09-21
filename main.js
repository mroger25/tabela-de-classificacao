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
    "<td><button onClick='adicionarVitoria(" + i + ", 1)'>+V</button></td>";
  elemento +=
    "<td><button onClick='adicionarVitoria(" + i + ", -1)'>-V</button></td>";
  elemento +=
    "<td><button onClick='adicionarEmpate(" + i + ", 1)'>+E</button></td>";
  elemento +=
    "<td><button onClick='adicionarEmpate(" + i + ", -1)'>-E</button></td>";
  elemento +=
    "<td><button onClick='adicionarDerrota(" + i + ", 1)'>+D</button></td>";
  elemento +=
    "<td><button onClick='adicionarDerrota(" + i + ", -1)'>-D</button></td>";
  elemento += "<td><button onClick='zerarLinha(" + i + ")'>Zerar</button></td>";
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

function contarPontos(vitorias, empates) {
  return 3 * vitorias + empates;
}

function adicionarVitoria(i, qnt) {
  const jogador = players[i];
  jogador.vitorias = Math.max(0, jogador.vitorias + qnt);
  jogador.pontos = contarPontos(jogador.vitorias, jogador.empates);

  exibirNaTabela();
}

function adicionarEmpate(i, qnt) {
  const jogador = players[i];
  jogador.empates = Math.max(0, jogador.empates + qnt);
  jogador.pontos = contarPontos(jogador.vitorias, jogador.empates);

  exibirNaTabela();
}

function adicionarDerrota(i, qnt) {
  const jogador = players[i];
  jogador.derrotas = Math.max(0, jogador.derrotas + qnt);

  exibirNaTabela();
}

function zerarLinha(i) {
  const jogador = players[i];
  jogador.vitorias = 0;
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.pontos = 0;

  exibirNaTabela();
}

function removerJogador(i) {
  players.splice(i, 1);

  exibirNaTabela();
}

function zerarPontos() {
  const totalPlayers = players.length;
  if (totalPlayers > 0) {
    for (let i = 0; i < totalPlayers; i++) {
      const jogador = players[i];
      jogador.vitorias = 0;
      jogador.empates = 0;
      jogador.derrotas = 0;
      jogador.pontos = 0;
    }

    exibirNaTabela();
  }
}

function apagarTabela() {
  const totalPlayers = players.length;
  players.splice(0, totalPlayers);

  exibirNaTabela();
}

function checkKeys(e) {
  if (e.key === "Enter") {
    adicionarJogador();
  }
}

nomePlayer.addEventListener("keydown", checkKeys);
vitorias.addEventListener("keydown", checkKeys);
empates.addEventListener("keydown", checkKeys);
derrotas.addEventListener("keydown", checkKeys);
btnAdicionarJogador.addEventListener("click", adicionarJogador);
