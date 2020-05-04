var btncalculo = document.getElementById("btncalcular");

btncalculo.onclick = function(){

    var valorProjeto = document.getElementById ("valortotal");
    var diasEfetivos = document.getElementById ("diastrab");
    var horasDiarias = document.getElementById ("qht");
    var diasFerias = document.getElementById ("diasferias");
    
    var diasFerias = parseInt(diasferias.value);
    var valorProjeto = parseFloat(valortotal.value);
    var diasEfetivos = parseFloat(diastrab.value);
    var horasDiarias = parseFloat(qht.value);

    var valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) )

    var resultado = document.getElementById("resu1");

    resultado.innerText = (`R$ ${valorHora.toFixed(2)}`);
    
    console.log(2-2)

}
