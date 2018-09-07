var app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider, $httpProvider) {
    //设置每次$http请求都会带上cookie
    $httpProvider.defaults.withCredentials = true;

    $routeProvider.when("/", {
        templateUrl: "template/home.html",
        controller: "home"
    }).otherwise({
        redirectTo: "/"
    })
});

app.controller("mainCtrl", function ($scope) {

});

app.controller("home", function ($scope) {

});