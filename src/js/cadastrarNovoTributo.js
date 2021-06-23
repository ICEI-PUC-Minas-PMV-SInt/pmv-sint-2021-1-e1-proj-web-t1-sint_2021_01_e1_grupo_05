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
                depereciacaoBicicleta: $("#depereciacaoBicicleta").val(),
                valorBicicleta: $("#valorBicicleta").val(),
                taxaBicicleta: $("#taxaBicicleta").val()
            },
            InvestimentoBicicletario: {
                depereciacaoBicicleta: $("#depereciacaoBicicletario").val(),
                valorBicicleta: $("#valorBicicletario").val(),
                taxaBicicleta: $("#taxaBicicletario").val()
            }
    });

    localStorage.setItem("tributos", tributo);

    return true;
}