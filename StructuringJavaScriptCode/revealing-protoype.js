window.onload = function () {

    //extending the calculator (override the add method)
    Calculator.proptotype.add = function(x, y) {
        this.eqCtl.innerHTML = x * y;
    };


    var calc = new Calculator('Output');
    calc.add(2, 2);
    calc.subtract(2, 2);
};


//Calculator.js library
var Calculator = function (eq) {
    //State and private members
    this.eqCtl = document.getElementById(eq);
};

Calculator.proptotype = function () {
    //private members
    var add = function(x, y) {
            var val = x + y;
            this.eqCtl.innerHTML = val;
        },
        subtract = function(x, y) {
            var val = x - y;
            this.eqCtl.innerHTML = val;
        },
        setVal = function(val) {
            this.crreNumberCtl.innerHTML = val;
        },
        clearNumbers = function() {
            setVal.call(this, '0'); //passing the this context to setVal method (so now setVal can use the 'this' keyeword)
            //instead of passing 'this' context as a paramater we make it more clean
            //instead of setVal('0', this);
            //and setVal = function(val, thisObj) {}
        };

    //public members
    return {
        add: add,
        subtract: subtract
    };
}(); //self invoke