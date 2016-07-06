var app = angular.module('formApp', []);

app.controller('RegistrationFormController', ['$scope', function($scope) {
    this.register = () => this.message = `Welcome ${$scope.user.firstName}`;

}]);