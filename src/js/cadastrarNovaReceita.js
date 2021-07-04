function Adicionar() {

    var receita = JSON.stringify({
        valorPublicidade: $("#valorPublicidade").val(),
        valorHora: $("#valorHora").val(),
        Impostos: {
            nomeImposto: $("#nomeImposto").val(),
            valorPercImposto: $("#valorPercImposto").val(),
            valorImposto: $("#valorImposto").val()
        },
        Investimento: {
            Bicicleta: {
                depreciacaoTotal: $("#depreciacaoTotal").val(),
                taxaBicicleta: $("#taxaBicicleta").val(),
            },
            Bicicletario: {
                depereciacaoBicicletario: $("#depereciacaoBicicletario").val(),
                valorBicicletario: $("#valorBicicletario").val(),
                taxaBicicletario: $("#taxaBicicletario").val()
            }
        }
    });

    localStorage.setItem("receitas", receita);

    alert("Receitas adicionadas.");
    return true;
}