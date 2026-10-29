
function multiplicacao() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let resultado = n1 * n2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
