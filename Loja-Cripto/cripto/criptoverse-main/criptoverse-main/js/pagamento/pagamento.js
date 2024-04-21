    // Obter as quantidades armazenadas no localStorage
    const btcQuantidade = parseInt(localStorage.getItem('btcQuantidade')) || 0;
    const ethQuantidade = parseInt(localStorage.getItem('ethQuantidade')) || 0;
    const bnbQuantidade = parseInt(localStorage.getItem('bnbQuantidade')) || 0;
    const solQuantidade = parseInt(localStorage.getItem('solQuantidade')) || 0;
    // Obter outras quantidades de criptomoedas aqui

    // Calcular o total a pagar
    const precoBtc = 50000; // Preço do Bitcoin
    const precoEth = 3000; // Preço do Ethereum
    const precoBnb = 500
    const precoSol = 1000
    // Adicione outros preços de criptomoedas aqui

    const totalPagar = (btcQuantidade * precoBtc) + (ethQuantidade * precoEth) + (bnbQuantidade * precoBnb) + (solQuantidade * precoSol);
    // Adicione outros cálculos de outras criptomoedas aqui

    // Exibir detalhes da compra
    document.getElementById('btc-quantidade').innerText = btcQuantidade;
    document.getElementById('eth-quantidade').innerText = ethQuantidade;
    document.getElementById('bnb-quantidade').innerText = bnbQuantidade;
    document.getElementById('sol-quantidade').innerText = solQuantidade;
    // Exibir outros detalhes de outras criptomoedas aqui
    document.getElementById('total-a-pagar').innerText = totalPagar.toFixed(2); // Exibir o total formatado

