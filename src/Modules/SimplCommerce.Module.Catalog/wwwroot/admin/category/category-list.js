/*global angular, confirm*/
(function () {
    angular
        .module('simplAdmin.catalog')
        .controller('CategoryListCtrl', CategoryLitsCtrl);

    /* @ngInject */
    function CategoryLitsCtrl(categoryService, translateService) {
        var vm = this;
        vm.translate = translateService;
        vm.categories = [];

        vm.getCategories = function getCategories() {
            categoryService.getCategories().then(function (result) {
                vm.categories = result.data;
            });
        };

        vm.deleteCategory = function deleteCategory(category) {
            bootbox.confirm('Bạn muốn xóa danh mục này không ' + category.name, function (result) {
                if (result) {
                    categoryService.deleteCategory(category)
                       .then(function (result) {
                           vm.getCategories();
                           toastr.success(category.name + ' đã được xóa');
                        })
                        .catch(function (response) {
                            toastr.error(response.data.error);
                        });
                }
            });
        };

        vm.getCategories();
    }
})();
