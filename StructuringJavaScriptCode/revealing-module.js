window.onload = function() {
    calculator.add(2, 2);
    calculator.subtract(2, 2);
};

//calculator.js
var calculator = function (eq) {

    //private members
    var eqCtl = document.getElementById(eq),
        add = function(x, y) {
            eqCtl.innerHTML = x + y;
        },
        subtract = function(x, y) {
            eqCtl.innerHTML = x - y;
        };

    //public API
    //Expose public member
    return {
        add: add,
        subtract: subtract
    }; 

}('Output'); //self invoked module