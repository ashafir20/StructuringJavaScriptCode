$(document).ready(function() {
    var ls = new myNS.LocalStorage();
    ls.loadSettings();
});

var myNS = myNS || {};

myNS.LocalStorage = function () {

};

myNS.LocalStorage.prototype = function () {
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