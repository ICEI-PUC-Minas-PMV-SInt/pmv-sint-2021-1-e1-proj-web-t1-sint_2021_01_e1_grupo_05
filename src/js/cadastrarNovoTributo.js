function cadastrarNovoTributo(){

    let tributo = JSON.stringify({
            Publicidade: {
                valorPublicidade: $("#valorPublicidade").val(),
                valorHoraPublicidade: $("#valorHoraPublicidade").val(),
            },
            Impostos: {
                valorImposto: $("#valorImposto").val(),
                valorPercentual: $("#valorPercImposto").val()
            },
            InvestimentoBicicleta: {
                depreciacaoTotal: $("#depreciacaoTotal").val(),
                taxaBicicleta: $("#taxaBicicleta").val()
            }
    });

    localStorage.setItem("tributos", tributo);

    return true;
}