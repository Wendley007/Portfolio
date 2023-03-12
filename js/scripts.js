function openNav() {

    var x = document.getElementById("menu");

    if (x.className === "menu") {
        x.className += " menujs";
        document.getElementById("icone").innerHTML = "&Cross;";

    } else {
        x.className = "menu";
        document.getElementById("icone").innerHTML = "&#9776;";

    }

}

