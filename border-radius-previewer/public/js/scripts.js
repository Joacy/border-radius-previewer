let topleft1;
let topleft2;

document
    .getElementById("topleft1")
    .addEventListener('change', function () {
        topleft1 = document.getElementById("topleft1").value;
        topleft2 = document.getElementById("topleft2").value;
        console.log(topleft1);
        if (topleft1 >= 150) topleft1 = 150;
        if (topleft2 >= 150) topleft2 = 150;
        document.getElementById("caixa").style.borderTopLeftRadius = topleft1 + "px" + " " + topleft2 + "px";
        document.getElementById("btl").innerText = topleft1 + "px" + " " + topleft2 + "px";
    });

document
    .getElementById("topleft2")
    .addEventListener('change', function () {
        topleft1 = document.getElementById("topleft1").value;
        topleft2 = document.getElementById("topleft2").value;
        console.log(topleft2);
        if (topleft1 >= 150) topleft1 = 150;
        if (topleft2 >= 150) topleft2 = 150;
        document.getElementById("caixa").style.borderTopLeftRadius = topleft1 + "px" + " " + topleft2 + "px";
        document.getElementById("btl").innerText = topleft1 + "px" + " " + topleft2 + "px";
    });

let topright1;
let topright2;

document
    .getElementById("topright1")
    .addEventListener('change', function () {
        topright1 = document.getElementById("topright1").value;
        topright2 = document.getElementById("topright2").value;
        console.log(topright1);
        if (topright1 >= 150) topright1 = 150;
        if (topright2 >= 150) topright2 = 150;
        document.getElementById("caixa").style.borderTopRightRadius = topright1 + "px" + " " + topright2 + "px";
        document.getElementById("btr").innerText = topright1 + "px" + " " + topright2 + "px";
    });

document
    .getElementById("topright2")
    .addEventListener('change', function () {
        topright1 = document.getElementById("topright1").value;
        topright2 = document.getElementById("topright2").value;
        console.log(topright2);
        if (topright1 >= 150) topright1 = 150;
        if (topright2 >= 150) topright2 = 150;
        document.getElementById("caixa").style.borderTopRightRadius = topright1 + "px" + " " + topright2 + "px";
        document.getElementById("btr").innerText = topright1 + "px" + " " + topright2 + "px";
    });

let bottomleft1;
let bottomleft2;

document
    .getElementById("bottomleft1")
    .addEventListener('change', function () {
        bottomleft1 = document.getElementById("bottomleft1").value;
        bottomleft2 = document.getElementById("bottomleft2").value;
        console.log(bottomleft1);
        if (bottomleft1 >= 150) bottomleft1 = 150;
        if (bottomleft2 >= 150) bottomleft2 = 150;
        document.getElementById("caixa").style.borderBottomLeftRadius = bottomleft1 + "px" + " " + bottomleft2 + "px";
        document.getElementById("bbl").innerText = bottomleft1 + "px" + " " + bottomleft2 + "px";
    });

document
    .getElementById("bottomleft2")
    .addEventListener('change', function () {
        bottomleft1 = document.getElementById("bottomleft1").value;
        bottomleft2 = document.getElementById("bottomleft2").value;
        console.log(bottomleft2);
        if (bottomleft1 >= 150) bottomleft1 = 150;
        if (bottomleft2 >= 150) bottomleft2 = 150;
        document.getElementById("caixa").style.borderBottomLeftRadius = bottomleft1 + "px" + " " + bottomleft2 + "px";
        document.getElementById("bbl").innerText = bottomleft1 + "px" + " " + bottomleft2 + "px";
    });

let bottomright1;
let bottomright2;

document
    .getElementById("bottomright1")
    .addEventListener('change', function () {
        bottomright1 = document.getElementById("bottomright1").value;
        bottomright2 = document.getElementById("bottomright2").value;
        console.log(bottomright1);
        if (bottomright1 >= 150) bottomright1 = 150;
        if (bottomright2 >= 150) bottomright2 = 150;
        document.getElementById("caixa").style.borderBottomRightRadius = bottomright1 + "px" + " " + bottomright2 + "px";
        document.getElementById("bbr").innerText = bottomright1 + "px" + " " + bottomright2 + "px";
    });

document
    .getElementById("bottomright2")
    .addEventListener('change', function () {
        bottomright1 = document.getElementById("bottomright1").value;
        bottomright2 = document.getElementById("bottomright2").value;
        console.log(bottomright2);
        if (bottomright1 >= 150) bottomright1 = 150;
        if (bottomright2 >= 150) bottomright2 = 150;
        document.getElementById("caixa").style.borderBottomRightRadius = bottomright1 + "px" + " " + bottomright2 + "px";
        document.getElementById("bbr").innerText = bottomright1 + "px" + " " + bottomright2 + "px";
    });

function setTexto () {
    document
        .getElementById("conteudoCopiar").innerHTML =
        "border-top-left-radius: " +
        document.getElementById("topleft1").value + "px " +
        document.getElementById("topleft2").value + "px;\n" +
        "border-top-right-radius: " +
        document.getElementById("topright1").value + "px " +
        document.getElementById("topright2").value + "px;\n" +
        "border-bottom-left-radius: " +
        document.getElementById("bottomleft1").value + "px " +
        document.getElementById("bottomleft2").value + "px;\n" +
        "border-bottom-right-radius: " +
        document.getElementById("bottomright1").value + "px " +
        document.getElementById("bottomright2").value + "px;";
}

document
    .getElementById("botaoCopiar").addEventListener('click', function () {
        setTexto();
        var copiarTexto = document.getElementById("conteudoCopiar");
        copiarTexto.select();
        document.execCommand("copy");
    });