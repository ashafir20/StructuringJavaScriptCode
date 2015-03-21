window.onload = function() {

    //similiar to a class
    function closure() {
        var date = new Date();
        return function () {
            return date.getMilliseconds();
        }
    }

    console.log(closure());

    window.setTimeout(function() {
        console.log(closure());
    }, 500);

}