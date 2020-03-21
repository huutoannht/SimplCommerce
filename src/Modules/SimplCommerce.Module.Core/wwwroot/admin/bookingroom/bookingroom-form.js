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
        vm.isEditMode = vm.bookingRoomId > 0;

        vm.save = function save() {
            var promise;
            if (vm.isEditMode) {
                promise = bookingRoomService.editBookingRoom(vm.bookingRoom);
            } else {
                promise = bookingRoomService.createBookingRoom(vm.bookingRoom);
            }

            promise
                .then(function (result) {
                    $state.go('bookingroom');
                })
                .catch(function (response) {
                    var error = response.data;
                    vm.validationErrors = [];
                    if (error && angular.isObject(error)) {
                        for (var key in error) {
                            vm.validationErrors.push(error[key][0]);
                        }
                    } else { 
                        vm.validationErrors.push(translateService.get('Could not add Booking type.'));
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
