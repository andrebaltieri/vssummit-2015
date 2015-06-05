(function () {
    'use strict';
    angular.module('abt').controller('StudentDeleteController', StudentDeleteController);

    StudentDeleteController.$inject = ['$http', '$routeParams', '$location'];

    function StudentDeleteController($http, $routeParams, $location) {
        var vm = this;
        vm.student = {};
        
        activate();

        function activate() {
            $http.get('api/students/' + $routeParams.id).success(function (res) {
                vm.student = res;
            });
        }
        
        vm.submit = function () {
            $http.delete('api/students/' + $routeParams.id).success(function (res) {
                toastr.success(vm.student.Name + ' excluido com sucesso', 'Sucesso');
                $location.path('/students');
            });
        };
    }
})();