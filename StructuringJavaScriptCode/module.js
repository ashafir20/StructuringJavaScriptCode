window.onload = function() {
    var calc = new myNS.Calculator('eq');
    calc.add(2, 2);
}


var myNS = myNS || {};

//calculator.js
//Similiar to a class container
myNS.Calculator = function (eq) {
    //private member
    var eqCtl = document.getElementById(eq);

    return {
        //expose public member
        add: function(x, y) {
            var val = x + y;
            eqCtl.innerHTML = val;
        }
    };
};