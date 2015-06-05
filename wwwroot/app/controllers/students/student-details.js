(function () {
    'use strict';
    angular.module('abt').controller('StudentDetailsController', StudentDetailsController);

    StudentDetailsController.$inject = ['$http','$routeParams'];

    function StudentDetailsController($http, $routeParams) {
        var vm = this;
        vm.student = {};
        
        activate();

        function activate() {
            $http.get('api/students/' + $routeParams.id).success(function (res) {
                vm.student = res;
            });
        }
    }
})();