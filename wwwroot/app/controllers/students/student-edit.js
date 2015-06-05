(function () {
    'use strict';
    angular.module('abt').controller('StudentEditController', StudentEditController);

    StudentEditController.$inject = ['$http','$routeParams','$location'];

    function StudentEditController($http, $routeParams, $location) {
        var vm = this;
        vm.student = {};
        
        activate();

        function activate() {
            $http.get('api/students/' + $routeParams.id).success(function (res) {
                vm.student = res;
            });
        }
        
        vm.submit = function () {
            $http.put('api/students/' + $routeParams.id, vm.student).success(function (res) {
                toastr.success(vm.student.Name + ' atualizado com sucesso', 'Sucesso');
                $location.path('/students');
            });
        };
    }
})();