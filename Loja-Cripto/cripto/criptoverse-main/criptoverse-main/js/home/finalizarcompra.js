function finalizarCompra() {
          // Obter quantidade de cada criptomoeda
          const btcQuantidade = document.getElementById('btc-quantidade').value || 0;
          const ethQuantidade = document.getElementById('eth-quantidade').value || 0;
          const bnbQuantidade = document.getElementById('bnb-quantidade').value || 0;
          const solQuantidade = document.getElementById('sol-quantidade').value || 0;
          // Obter outras quantidades de criptomoedas aqui
  
          // Armazenar quantidades no localStorage para a próxima página
          localStorage.setItem('btcQuantidade', btcQuantidade);
          localStorage.setItem('ethQuantidade', ethQuantidade);
          localStorage.setItem('bnbQuantidade', bnbQuantidade);
          localStorage.setItem('solQuantidade', solQuantidade);
          // Armazenar outras quantidades de criptomoedas aqui
  
          // Redirecionar para a próxima página
          window.location.href = 'pagamento.html';
      }