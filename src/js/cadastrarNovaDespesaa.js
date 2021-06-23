function cadastrarNovaDespesaa() {
    let aluguel = $("#aluguel").val();
    let funcionarios = $("#funcionarios").val();
    let seguro = $("#seguro").val();
    let totalFixas = parseInt(aluguel) + parseInt(funcionarios) + parseInt(seguro);
    let variaveis = $("#energia").val();

    let despesas = JSON.stringify({
        aluguel: aluguel,
        funcionarios: funcionarios,
        seguro: seguro,
        variaveis: variaveis,
        totalFixas: totalFixas
    });

    localStorage.setItem("despesas", despesas);

    return;
}