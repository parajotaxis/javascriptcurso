// calcula custo de carro do consumidor, que é igual a custo de fábrica mais custo do distibuidor
var custoFabrica = 40000;
var custoDist;
var custoImp;
var custoConsumidor;

custoDist = custoFabrica * 28/100;
custoImp = custoFabrica * 45/100;
custoConsumidor = custoFabrica + custoDist + custoImp;

console.log(custoConsumidor);