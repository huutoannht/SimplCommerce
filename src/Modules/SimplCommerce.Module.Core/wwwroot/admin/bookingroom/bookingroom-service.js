/*global angular*/
(function () {
    angular
        .module('simplAdmin.core')
        .factory('stateBookingRoomService', stateBookingRoomService);

    /* @ngInject */
    function stateBookingRoomService($http) {
        var service = {
            editBookingRoom: editBookingRoom,
            getBookingRoom: getBookingRoom,
            createBookingRoom: createBookingRoom,
            deleteBookingRoom: deleteBookingRoom,
            getStateOrProvinces: getStateOrProvinces
        };
        return service;

        function getStateOrProvinces(countryId, params) {
            return $http.post('api/booking-room/grid?countryId=' + countryId, params);
        }

        function getBookingRoom(id) {
            return $http.get('api/booking-room/' + id, null);
        }

        function editBookingRoom(BookingRoom) {
            return $http.put('api/booking-room/' + BookingRoom.id, BookingRoom);
        }

        function createBookingRoom(BookingRoom) {
            return $http.post('api/booking-room/', BookingRoom);
        }

        function deleteBookingRoom(BookingRoom) {
            return $http.delete('api/booking-room/' + BookingRoom.id, null);
        }
    }
})();
