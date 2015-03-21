window.onload = function () {

    //overriding the calculator's (from 3rd party) add function
    myNamespace.Calculator.proptotype.add = function (x, y) {
        var val = x - y;
        this.eqCtl.innerHTML = val;
    };

    var calc = new myNamespace.Calculator('eq');
    calc.add(2, 2);
};



//prototyping (assume source code from 3rd party library)
//use existing namespace or create new
var myNamespace = myNamespace || {};

myNamespace.Calculator = function (eq) {
    this.eqCtl = document.getElementById(eq);
};

myNamespace.Calculator.proptotype = {
    add: function(x, y) {
        var val = x + y;
        this.eqCtl.innerHTML = val;
    }
};