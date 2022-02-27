var firstnumber = "";
var action = "";
var secondnumber = "";









function putnumbers(n) {
    if (action == "") {
        firstnumber += n
    }
    else {
        secondnumber += n
    }
    document.getElementById("text").innerHTML = firstnumber + action + secondnumber;
}











function actions(n) {
    if (firstnumber != "") {
        if (secondnumber == "") {
            action = n
        }
    }


    document.getElementById("text").innerText = firstnumber + action + secondnumber;
}







function AC() {
    firstnumber = '';
    action = '';
    secondnumber = '';
    document.getElementById("text").innerText = firstnumber + action + secondnumber;
}







function answer() {
    if (firstnumber !== '' && secondnumber !== '') {
        firstnumber = parseFloat(firstnumber)
        secondnumber = parseFloat(secondnumber)
        if (action == "+") {
            firstnumber = firstnumber + secondnumber

        }
        if (action == "-") {
            firstnumber = firstnumber - secondnumber

        }
        if (action == "x") {
            firstnumber = firstnumber * secondnumber

        }
        if (action == "/") {
            firstnumber = firstnumber / secondnumber

        }
        document.getElementById("text").innerText = firstnumber
        firstnumber = String(firstnumber)
        action = ''
        secondnumber = ''
    }
}






document.addEventListener("keydown", key)
function key(w) {
    var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
    if (arr.indexOf(w.key) !== -1) {
        putnumbers(w.key)
    }

    if (w.key == "c") {
        AC()
    }
    if (w.key == "+" || w.key == "-" || w.key == "x" || w.key == "/") {
        actions(w.key)
    }
    if (w.key == "Enter") {
        answer()
    }
}

