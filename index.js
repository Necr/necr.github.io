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
    $scope.showLogo = function (name) {
        var imgName = "./imgs/" + name;
        layer.open({
            type: 1,
            title: "信息",
            area: ['600px', '642px'],
            shadeClose: 1,
            content: "<img style='height: 100%;' src='" +
            imgName +
            "'>"
        })
    }
});

app.controller("home", function ($scope) {

});