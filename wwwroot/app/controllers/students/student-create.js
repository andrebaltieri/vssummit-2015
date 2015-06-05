(function () {
    'use strict';
    angular.module('abt').controller('StudentCreateController', StudentCreateController);

    StudentCreateController.$inject = ['$http', '$location', '$scope'];

    function StudentCreateController($http, $location, $scope) {
        var vm = this;
        vm.student = {
            Name: '',
            Email: '',
            Image: ''
        };

        activate();

        function activate() {
        }

        vm.submit = function () {
            $http.post('api/students', vm.student).success(function (res) {
                toastr.success(vm.student.Name + ' incluido com sucesso', 'Sucesso');
                $location.path('/students');
            });
        };

        vm.myImage = '';
        vm.myCroppedImage = '';

        var handleFileSelect = function (evt) {
            var file = evt.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                $scope.$apply(function ($scope) {
                    vm.myImage = evt.target.result;                    
                });
            };
            reader.readAsDataURL(file);
        };
        angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);
    }
})();