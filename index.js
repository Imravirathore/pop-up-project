var btn = document.getElementById("open");

btn.addEventListener('click', function () {

    document.getElementById("popUp").style.transform = "translateY(0)"


})

var oKbtn = document.getElementById("close");

oKbtn.addEventListener('click', function () {

    document.getElementById("popUp").style.transform = "translateY(-900px)"


})