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
    $scope.showLogo = function () {
        layer.open({
            type: 1,
            title: 0,
            area: ['400px', '400px'],
            shadeClose: 1,
            content: "<img src='./imgs/header.jpeg'>"
        })
    }
});

app.controller("home", function ($scope) {

});