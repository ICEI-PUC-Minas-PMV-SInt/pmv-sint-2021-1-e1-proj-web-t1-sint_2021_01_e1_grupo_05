function gerar() {

    var tributos = JSON.parse(window.localStorage.getItem('tributos'));
    let premissas = JSON.parse(localStorage.getItem("premissas"));
    let despesas = JSON.parse(localStorage.getItem("despesas"));
    let m = parseInt(precoGerado.mliquida) ;


    // p = (f + i / y) + x . k / 1 - (t + v + m / 100)
    // let i = 2000;
    // let f = 10000;
    // let v = 8;
    // let y = 20000;
    // let t = 6;
    // let x = 0.2;
    // let k = 0.9;
    // let m = 30;
    console.log(JSON.stringify(tributos.Impostos.valorPercentual))


    //let i = parseInt(tributos.InvestimentoBicicletario.valorBicicleta) + parseInt(tributos.InvestimentoBicicleta.valorBicicleta);

    let i = parseInt(2000);
    let f = parseInt(despesas.totalFixas);
    let v = parseInt(despesas.variaveis);
    let y = parseInt(premissas.estimativaHorasMensais);
    let t = parseInt(tributos.Impostos.valorPercentual);
    let x = 0.2;
    let k = 0.9;

    let p = ((f + i) / y + x * k) / (1 - ((t + v + m) / 100));

    let faturamento = y * p;
    let valorFinalImposto = faturamento * (t / 100);
    let depreciacao = i;
    let despesasVariaveis = faturamento * (v / 100);
    let energia = x * y * k;

    let lucro = faturamento - valorFinalImposto - depreciacao - despesasVariaveis - f - energia;
    let percentualFaturamento = parseFloat(lucro / faturamento * 100).toFixed(2);

    let precoGerado = JSON.stringify({
        mliquida: percentualFaturamento,
        pvenda: p
    });

    localStorage.setItem("precosGerados", precoGerado);

    alert("Registro adicionado.");

    return true

}

function valoresLocalStorage() {
    const tributos = (JSON.parse(window.localStorage.getItem('tributos')))
    const percentualImposto = document.querySelector('#percentualImposto')
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
    const aluguel = document.querySelector('#aluguel');
    const funcionarios = document.querySelector('#funcionarios');
    const seguros = document.querySelector('#seguros');
    const variaveis = document.querySelector('#variaveis');

    aluguel.value = despesas.aluguel;
    funcionarios.value = despesas.funcionarios;
    seguros.value = despesas.seguro;
    variaveis.value = despesas.variaveis;

    const precosGerados = JSON.parse(localStorage.getItem("precosGerados"));
    const pvenda = document.querySelector('#pvenda');
    const mliquida = document.querySelector('#mliquida');

    pvenda.value = precosGerados.pvenda;
    mliquida.value = precosGerados.mliquida;





}
valoresLocalStorage();
