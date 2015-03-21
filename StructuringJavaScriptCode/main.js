window.onload = function() {

    //Example 1

    //similiar to a class
    function myClosure() {
        var date = new Date();
        return function() {
            return date.getMilliseconds();
        };
    }

    var closure1 = myClosure();
    console.log(closure1());

    window.setTimeout(function() {
        console.log(closure1());
    }, 500);


    //Example 2

    //similiar to a class -> revealing module pattern
    var myClosure2 = function () {
        var date = new Date();
        var myNestedFunc = function () {
            return date.getMilliseconds();
        };

        return {
            myNestedFunc: myNestedFunc
        };
    }

    var closure2 = new myClosure2();
    console.log(closure2.myNestedFunc());

    window.setTimeout(function () {
        console.log(closure2.myNestedFunc());
    }, 500);

}