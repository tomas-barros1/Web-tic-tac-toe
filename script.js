let jogadas = 1;
let jogadorVez = document.getElementById("jogador");
jogadorVez.innerText = "Vez do jogador X";

function posicao(posicao) {
  let mudar = document.getElementById(posicao);

  if (mudar.innerText === "⠀" && jogadas % 2 === 1) {
    mudar.innerText = "X";
    jogadas++;
  } else if (mudar.innerText === "⠀" && jogadas % 2 === 0) {
    mudar.innerText = "O";
    jogadas++;
  }

  if (jogadas % 2 === 1) {
    jogadorVez.innerText = "Vez do jogador X";
  } else {
    jogadorVez.innerText = "Vez do jogador O";
  }

  verificarVitoria();

  if (jogadas === 10) {
    alert("Empate");
    limparTabuleiro();
    jogadorVez.innerText = "Vez do jogador X";
  }
}

function verificarVitoria() {
  const posicao1 = document.getElementById("1");
  const posicao2 = document.getElementById("2");
  const posicao3 = document.getElementById("3");
  const posicao4 = document.getElementById("4");
  const posicao5 = document.getElementById("5");
  const posicao6 = document.getElementById("6");
  const posicao7 = document.getElementById("7");
  const posicao8 = document.getElementById("8");
  const posicao9 = document.getElementById("9");

  if (
    (posicao1.innerText === "X" &&
      posicao2.innerText === "X" &&
      posicao3.innerText === "X") ||
    (posicao4.innerText === "X" &&
      posicao5.innerText === "X" &&
      posicao6.innerText === "X") ||
    (posicao7.innerText === "X" &&
      posicao8.innerText === "X" &&
      posicao9.innerText === "X")
  ) {
    alert("Vitória do X");
    limparTabuleiro();
    jogadorVez.innerText = "Vez do jogador X";
    return true;
  }

  if (
    (posicao1.innerText === "O" &&
      posicao2.innerText === "O" &&
      posicao3.innerText === "O") ||
    (posicao4.innerText === "O" &&
      posicao5.innerText === "O" &&
      posicao6.innerText === "O") ||
    (posicao7.innerText === "O" &&
      posicao8.innerText === "O" &&
      posicao9.innerText === "O")
  ) {
    alert("Vitória do O");
    limparTabuleiro();
    jogadorVez.innerText = "Vez do jogador X";
    return true;
  }

  if (
    (posicao1.innerText === "X" &&
      posicao4.innerText === "X" &&
      posicao7.innerText === "X") ||
    (posicao2.innerText === "X" &&
      posicao5.innerText === "X" &&
      posicao8.innerText === "X") ||
    (posicao3.innerText === "X" &&
      posicao6.innerText === "X" &&
      posicao9.innerText === "X")
  ) {
    alert("Vitória do X");
    limparTabuleiro();
    jogadorVez.innerText = "Vez do jogador X";
    return true;
  }

  if (
    (posicao1.innerText === "O" &&
      posicao4.innerText === "O" &&
      posicao7.innerText === "O") ||
    (posicao2.innerText === "O" &&
      posicao5.innerText === "O" &&
      posicao8.innerText === "O") ||
    (posicao3.innerText === "O" &&
      posicao6.innerText === "O" &&
      posicao9.innerText === "O")
  ) {
    alert("Vitória do O");
    limparTabuleiro();
    jogadorVez.innerText = "Vez do jogador X";
    return true;
  }

  if (
    (posicao1.innerText === "X" &&
      posicao5.innerText === "X" &&
      posicao9.innerText === "X") ||
    (posicao3.innerText === "X" &&
      posicao5.innerText === "X" &&
      posicao7.innerText === "X")
  ) {
    alert("Vitória do X");
    limparTabuleiro();
    jogadorVez.innerText = "Vez do jogador X";
    return true;
  }

  if (
    (posicao1.innerText === "O" &&
      posicao5.innerText === "O" &&
      posicao9.innerText === "O") ||
    (posicao3.innerText === "O" &&
      posicao5.innerText === "O" &&
      posicao7.innerText === "O")
  ) {
    alert("Vitória do O");
    limparTabuleiro();
    jogadorVez.innerText = "Vez do jogador X";
    return true;
  }
}

function limparTabuleiro() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).innerText = "⠀";
  }
  jogadas = 1;
}
