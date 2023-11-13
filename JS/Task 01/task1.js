function rollbtn() {
    var num = Math.floor(Math.random() * 6) + 1;
    var para = document.getElementById("result");
    para.innerText = "The dice rolled\n" + num;
}