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
            area: ['50%', '50%'],
            shadeClose: 1,
            content: "<div style='height: 100%;' class='text-center'><img src='" +
            imgName +
            "'></div>"
        })
    }
});

app.controller("home", function ($scope) {

});