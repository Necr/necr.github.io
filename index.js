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
            title: "信息",
            area: ['600px', '342px'],
            shadeClose: 1,
            content: "<div class='row '><img class='col-sm-6' src='./imgs/header.jpeg' style='height: 100%;'><div class='col-sm-6 pull-right'><p>姓名:<span>罗国梁</span></p></div></div>"
        })
    }
});

app.controller("home", function ($scope) {

});