function findEMI() {
    var p = parseFloat(document.getElementById("LoamAmnt").value);
    var r = parseFloat(document.getElementById("IntrstRate").value);
    var n = parseFloat(document.getElementById("Period").value);

    var mr = (r / 12) / 100;
    var emi = (p * mr * Math.pow(1 + mr, n)) / (Math.pow(1 + mr, n) - 1)

    var resultElement = document.getElementById("result");
    resultElement.innerText = "EMI: " + emi.toFixed(2);
}