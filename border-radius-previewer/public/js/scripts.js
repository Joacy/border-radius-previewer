document
    .getElementById("topleft")
    .addEventListener('change', function () {
        var topleft = document.getElementById("topleft").value;
        console.log(topleft);
        if (topleft >= 150) topleft = 150;
        document.getElementById("caixa").style.borderTopLeftRadius = topleft + "px";
    });

document
    .getElementById("topright")
    .addEventListener('change', function () {
        var topright = document.getElementById("topright").value;
        console.log(topright);
        if (topright >= 150) topright = 150;
        document.getElementById("caixa").style.borderTopRightRadius = topright + "px";
    });

document
    .getElementById("bottomleft")
    .addEventListener('change', function () {
        var bottomleft = document.getElementById("bottomleft").value;
        console.log(bottomleft);
        if (bottomleft >= 150) bottomleft = 150;
        document.getElementById("caixa").style.borderBottomLeftRadius = bottomleft + "px";
    });

document
    .getElementById("bottomright")
    .addEventListener('change', function () {
        var bottomright = document.getElementById("bottomright").value;
        console.log(bottomright);
        if (bottomright >= 150) bottomright = 150;
        document.getElementById("caixa").style.borderBottomRightRadius = bottomright + "px";
    });