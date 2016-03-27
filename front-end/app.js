var angular = require('angular');
require('./Github/github');

angular.module('myApp', ['github']).controller('MyController', function ($scope, GithubService) {
    $scope.message = 'Hello from angular - built with webpack!';
    
    GithubService.search('iot').then(function (resp) {
        console.log(resp.data);
    });
});