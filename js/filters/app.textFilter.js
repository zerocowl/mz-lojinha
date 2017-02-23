var app = angular.module("Produtos", []);
app.filter('truncate', function() {
    return function(text, length, end) {
        if (text) {
            if (isNaN(length)) length = 10;
            if (end === undefined) end = "...";
            if (text.length <= length) return text;
            else return String(text).substring(0, length) + end;
        }
    };
});