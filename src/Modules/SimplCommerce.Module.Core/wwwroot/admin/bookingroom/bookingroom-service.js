/*global angular*/
(function () {
    angular
        .module('simplAdmin.core')
        .factory('bookingRoomService', bookingRoomService);

    /* @ngInject */
    function bookingRoomService($http) {
        var service = {
            editBookingRoom: editBookingRoom,
            getBookingRoom: getBookingRoom,
            createBookingRoom: createBookingRoom,
            deleteBookingRoom: deleteBookingRoom,
            getAllBookingRoom: getAllBookingRoom
        };
        return service;

        function getAllBookingRoom(params) {
            return $http.post('api/booking-room/grid', params);
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
