/*global angular*/
(function () {
    angular
        .module('simplAdmin.core')
        .controller('BookingRoomListCtrl', BookingRoomListCtrl);

    /* @ngInject */
    function BookingRoomListCtrl(bookingRoomService, translateService, $state, $stateParams) {
        var vm = this;
        vm.tableStateRef = {};

        vm.BookingRoom = [];
        vm.translate = translateService;

      
        vm.getBookingRoom = function (tableState) {
            vm.tableStateRef = tableState;
            vm.isLoading = true;
            bookingRoomService.getAllBookingRoom(tableState).then(function (result) {
                vm.BookingRoom = result.data.items;
                tableState.pagination.numberOfPages = result.data.numberOfPages;
                tableState.pagination.totalItemCount = result.data.totalRecord;
                vm.isLoading = false;
            });
        };

        vm.deleteBookingRoom = function deleteBookingRoom(BookingRoom) {
            bootbox.confirm('Are you sure you want to delete this booking type: ' + BookingRoom.name, function (result) {
                if (result) {
                    bookingRoomService.deleteStateProvince(BookingRoom)
                        .then(function (result) {
                            vm.getBookingRoom(vm.tableStateRef);
                            toastr.success(BookingRoom.name + ' has been deleted');
                        })
                        .catch(function (response) {
                            toastr.error(response.data.error);
                        });
                }
            });
        };

        //function init() {
        //    bookingRoomService.getAllBookingRoom().then(function (result) {
        //        vm.BookingRoom = result.data;
        //    });
        //}

        //init();
    }
})();
