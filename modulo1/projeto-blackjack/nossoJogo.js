 if (confirm('Quer iniciar uma nova rodada?')) {
    
   console.log('Boas vindas ao jogo de Blackjack!');

   const primeiraCartaDoUsuario = comprarCarta();
   const segundaCartaDoUsuario = comprarCarta();
   const pontosUsuario = primeiraCartaDoUsuario.valor + segundaCartaDoUsuario.valor;
   console.log(`Usuário - cartas ${primeiraCartaDoUsuario.texto} ${segundaCartaDoUsuario.texto} - pontuação: ${pontosUsuario}`);

   const primeiraCartaDoComputador = comprarCarta();
   const segundaCartaDoComputador = comprarCarta();
   const pontosComputador = primeiraCartaDoComputador.valor + segundaCartaDoComputador.valor;
   console.log(`Computador - cartas  ${primeiraCartaDoComputador.texto} ${segundaCartaDoComputador.texto} - pontuação: ${pontosComputador}`);
   if (pontosUsuario > pontosComputador) {
       console.log(`O usuário ganhou!`);
   } else if (pontosUsuario < pontosComputador) {
       console.log(`O computador ganhou!`);
   } else {
       console.log(`Empate!`);
   }
} else {
   console.log('O jogo acabou');
}