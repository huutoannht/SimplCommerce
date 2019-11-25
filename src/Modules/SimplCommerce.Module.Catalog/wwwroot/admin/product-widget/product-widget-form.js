/*global angular, jQuery*/
(function ($) {
    angular
        .module('simplAdmin.catalog')
        .controller('ProductWidgetFormCtrl', ProductWidgetFormCtrl);

    /* @ngInject */
    function ProductWidgetFormCtrl($state, $stateParams, productWidgetService, categoryService, translateService, summerNoteService) {
        var vm = this;
        vm.translate = translateService;
        vm.widgetZones = [];
        vm.sorts = [];
        vm.widgetInstance = { widgetZoneId: 1, displayOrder: 0, setting: { numberOfProducts: 8 }, publishStart: new Date() };
        vm.widgetInstanceId = $stateParams.id;
        vm.isEditMode = vm.widgetInstanceId > 0;
        vm.categories = [];

        vm.datePickerPublishStart = {};
        vm.datePickerPublishEnd = {};

        vm.openCalendar = function (e, picker) {
            vm[picker].open = true;
        };
        function uploadImageProduct() {
            if (vm.UploadImage) {
                return summerNoteService.upload(vm.UploadImage)
                    .then(function (response) {
                        vm.widgetInstance.setting.imageUrl = response.data;
                        return Promise.resolve();
                    });
            } else {
               return Promise.resolve();
            }
        }
        vm.save = function save() {
            var promise;
            uploadImageProduct()
                .then(function (response) {
                    if (vm.isEditMode) {
                        promise = productWidgetService.editProductWidget(vm.widgetInstance);
                    } else {
                        promise = productWidgetService.createProductWidget(vm.widgetInstance);
                    }
                }).then(function (result) {
                    promise
                        .then(function (result) {
                            $state.go('widget');
                        })
                        .catch(function (response) {
                            var error = response.data;
                            vm.validationErrors = [];
                            if (error && angular.isObject(error)) {
                                for (var key in error) {
                                    vm.validationErrors.push(error[key][0]);
                                }
                            } else {
                                vm.validationErrors.push('Could not product display widget.');
                            }
                        });
                });
        };

        function init() {
            productWidgetService.getWidgetZones().then(function (result) {
                vm.widgetZones = result.data;
                debugger
            });

            categoryService.getCategories().then(function (result) {
                vm.categories = result.data;
            });

            productWidgetService.getProductWidgetAvailableOrderBy().then(function (result) {
                vm.sorts = result.data;

                if (!vm.isEditMode) {
                    vm.widgetInstance.setting.orderBy = vm.sorts[0].id;
                }
            });

            if (vm.isEditMode) {
                productWidgetService.getProductWidget(vm.widgetInstanceId).then(function (result) {
                    vm.widgetInstance = result.data;
                    if (vm.widgetInstance.publishStart) {
                        vm.widgetInstance.publishStart = new Date(vm.widgetInstance.publishStart);
                    }
                    if (vm.widgetInstance.publishEnd) {
                        vm.widgetInstance.publishEnd = new Date(vm.widgetInstance.publishEnd);
                    }
                });
            }
        }

        init();
    }
})(jQuery);
