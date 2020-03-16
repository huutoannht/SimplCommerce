 /*global angular*/
(function () {
    angular
        .module('simplAdmin.core')
        .controller('BookingRoomFormCtrl', BookingRoomFormCtrl);

    /* @ngInject */
    function BookingRoomFormCtrl($state, $stateParams, bookingRoomService, translateService) {
        var vm = this;
        vm.translate = translateService;
        vm.bookingRoom = {};
        vm.bookingRoomId = $stateParams.id;
        vm.countryId = $stateParams.countryId;
        vm.isEditMode = vm.bookingRoomId > 0;

        vm.save = function save() {
            var promise;
            if (vm.isEditMode) {
                promise = bookingRoomService.editBookingRoom(vm.bookingRoom);
            } else {
                vm.bookingRoom.countryId = vm.countryId;
                promise = bookingRoomService.createBookingRoom(vm.bookingRoom);
            }

            promise
                .then(function (result) {
                    $state.go('country-states-provinces', {countryId: vm.countryId});
                })
                .catch(function (response) {
                    var error = response.data;
                    vm.validationErrors = [];
                    if (error && angular.isObject(error)) {
                        for (var key in error) {
                            vm.validationErrors.push(error[key][0]);
                        }
                    } else { 
                        vm.validationErrors.push(translateService.get('Could not add State or Province.'));
                    }
                });
        };

        function init() {
            if (vm.isEditMode) {
                bookingRoomService.getBookingRoom(vm.bookingRoomId).then(function (result) {
                    vm.bookingRoom = result.data;
                });
            }
        }

        init();
    }
})();
