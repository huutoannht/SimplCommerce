/*global angular*/
(function () {
    angular
        .module('simplAdmin.core')
        .controller('BookingRoomListCtrl', BookingRoomListCtrl);

    /* @ngInject */
    function BookingRoomListCtrl(countryService, stateProvinceService, translateService, $state, $stateParams) {
        var vm = this;
        vm.tableStateRef = {};

        vm.countries = [];
        vm.BookingRoom = [];
        vm.countryId = $stateParams.countryId;
        vm.translate = translateService;

        vm.onCountrySelected = function (countryId) {
            vm.getBookingRoom(vm.tableStateRef);
        };

        vm.getBookingRoom = function (tableState) {
            vm.tableStateRef = tableState;
            vm.isLoading = true;
            stateProvinceService.getBookingRoom(vm.countryId, tableState).then(function (result) {
                vm.BookingRoom = result.data.items;
                tableState.pagination.numberOfPages = result.data.numberOfPages;
                tableState.pagination.totalItemCount = result.data.totalRecord;
                vm.isLoading = false;
            });
        };

        vm.deleteBookingRoom = function deleteBookingRoom(BookingRoom) {
            bootbox.confirm('Are you sure you want to delete this state or province: ' + BookingRoom.name, function (result) {
                if (result) {
                    stateProvinceService.deleteStateProvince(BookingRoom)
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

        function init() {
            countryService.getAllCountries().then(function (result) {
                vm.countries = result.data;
                vm.countryId = vm.countryId || vm.countries[0].id.toString();
            });
        }

        init();
    }
})();
