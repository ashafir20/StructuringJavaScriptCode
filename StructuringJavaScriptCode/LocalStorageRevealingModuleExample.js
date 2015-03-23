$(document).ready(function() {
    var ls = new LocalStorage();
    ls.loadSettings();
});


var LocalStorage = function () {

};

LocalStorage.prototype = function() {
    //private members
    var loadSettings = function() {

        },
        storeSettings = function() {

        },
        hasLocalStorage = function() {

        };

    //public members 
    return {
        loadSettings: loadSettings,
        storeSettings: storeSettings,
        hasLocalStorage: hasLocalStorage
    };
}();