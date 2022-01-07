var app = angular.module('myApp', []);

app.controller('myControllerPersonel', function ($scope, $http) {
    $http.get("/Admin/GetPersonelList/").then(
       function (response) {
           $scope.personelList = response.data;
       });
    $http.get("/Admin/GetDepartmanList/").then(
       function (response) {
           $scope.departmanList = response.data;
       });
});