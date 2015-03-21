window.onload = function() {
    var calc = new Calculator('eq');
    calc.add(2, 2);
};

//prototyping
var Calculator = function (eq) {
    this.eqCtl = document.getElementById(eq);
};

Calculator.proptotype = {
    add: function(x, y) {
        var val = x + y;
        this.eqCtl.innerHTML = val;
    }
};