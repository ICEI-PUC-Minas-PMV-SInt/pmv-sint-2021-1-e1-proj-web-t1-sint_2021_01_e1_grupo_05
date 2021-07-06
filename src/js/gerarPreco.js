function gerar() {
  var tributos = JSON.parse(window.localStorage.getItem("tributos"));
  let premissas = JSON.parse(localStorage.getItem("premissas"));
  let despesas = JSON.parse(localStorage.getItem("despesas"));
  let m = parseInt(document.querySelector("#mliquida").value);

  let i = parseInt(2000);
  let f = parseInt(despesas.totalFixas);
  let v = parseInt(despesas.variaveis);
  let y = parseInt(premissas.estimativaHorasMensais);
  let t = parseInt(tributos.Impostos.valorPercentual);
  let x = 0.2;
  let k = 0.9;
  let p = ((f + i) / y + x * k) / (1 - (t + v + m) / 100);
  let faturamento = y * p;
  let valorFinalImposto = faturamento * (t / 100);
  let depreciacao = i;
  let despesasVariaveis = faturamento * (v / 100);
  let energia = x * y * k;

  let lucro =
    faturamento -
    valorFinalImposto -
    depreciacao -
    despesasVariaveis -
    f -
    energia;
  let percentualFaturamento = parseFloat((lucro / faturamento) * 100).toFixed(
    2
  );

  let precoGerado = JSON.stringify({
    mliquida: m,
    pvenda: p,
  });

  localStorage.setItem("precosGerados", precoGerado);

  alert("Registro adicionado.");

  return true;
}

function valoresLocalStorage() {
  const tributos = JSON.parse(window.localStorage.getItem("tributos"));
  const percentualImposto = document.querySelector("#percentualImposto");
  percentualImposto.value = tributos.Impostos.valorPercentual;

  const premissas = JSON.parse(localStorage.getItem("premissas"));
  const numBikes = document.querySelector("#nbikes");
  const horasDia = document.querySelector("#horasDia");
  const potencial = document.querySelector("#potencial");
  const taxaOcupacao = document.querySelector("#txocp");
  numBikes.value = premissas.numBikes;
  horasDia.value = premissas.horasDia;
  potencial.value = premissas.potencialHorasMes;
  taxaOcupacao.value = premissas.taxaOcupacao;

  const despesas = JSON.parse(localStorage.getItem("despesas"));
  const aluguel = document.querySelector("#aluguel");
  const funcionarios = document.querySelector("#funcionarios");
  const seguros = document.querySelector("#seguros");

  aluguel.value = despesas.aluguel;
  funcionarios.value = despesas.funcionarios;
  seguros.value = despesas.seguro;

  const precosGerados = JSON.parse(localStorage.getItem("precosGerados"));
  const pvenda = document.querySelector("#pvenda");
  const mliquida = document.querySelector("#mliquida");

  mliquida.value = precosGerados.mliquida;
  pvenda.value = precosGerados.pvenda;
}
valoresLocalStorage();

function atualizarPrecoFinal() {
  let tributos = JSON.parse(window.localStorage.getItem("tributos"));
  let premissas = JSON.parse(localStorage.getItem("premissas"));
  let despesas = JSON.parse(localStorage.getItem("despesas"));
  let m = parseInt(document.querySelector("#mliquida").value);
  let i = parseInt(2000);
  let f = parseInt(despesas.totalFixas);
  let v = parseInt(despesas.variaveis);
  let y = parseInt(premissas.estimativaHorasMensais);
  let t = parseInt(tributos.Impostos.valorPercentual);
  let x = 0.2;
  let k = 0.9;
  let p = ((f + i) / y + x * k) / (1 - (t + v + m) / 100);
  let faturamento = y * p;
  let valorFinalImposto = faturamento * (t / 100);
  let depreciacao = i;
  let despesasVariaveis = faturamento * (v / 100);
  let energia = x * y * k;

  let lucro =
    faturamento -
    valorFinalImposto -
    depreciacao -
    despesasVariaveis -
    f -
    energia;
  let percentualFaturamento = parseFloat((lucro / faturamento) * 100).toFixed(
    2
  );
  document.querySelector("#pvenda").value = p;
}
atualizarPrecoFinal();
