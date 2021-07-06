function calcularHorasMesaisEstimadas() {
    let numBikes = $("#numBikes").val();
    let horasDia = $("#horasDia").val();
    let taxaOcupacao = $("#taxaOcupacao").val();
    let estimativaHorasMensais = 0;


    let potencialHorasMes = numBikes * horasDia * 30;

    estimativaHorasMensais = potencialHorasMes * (taxaOcupacao * 0.01);

    let premissa = JSON.stringify({
        estimativaHorasMensais: estimativaHorasMensais,
        numBikes: numBikes,
        horasDia: horasDia,
        taxaOcupacao: taxaOcupacao,
        potencialHorasMes: potencialHorasMes
    });

    $("#horasMensais").val(estimativaHorasMensais);
    $("#potencialHorasMes").val(potencialHorasMes);

    localStorage.setItem("premissas", premissa);

    return true;

}