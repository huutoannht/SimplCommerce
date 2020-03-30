/*global angular confirm*/
(function () {
    angular
        .module('simplAdmin.catalog')
        .controller('ProductAlbumListCtrl', ProductAlbumListCtrl);

    /* @ngInject */
    function ProductAlbumListCtrl(productService, translateService) {
        var vm = this;
        vm.tableStateRef = {};
        vm.translate = translateService;
        vm.products = [];

        vm.getProducts = function getProducts(tableState) {
            vm.tableStateRef = tableState;
            vm.isLoading = true;
            tableState["search"]["PredicateObject"] = { 'IsAlbum': true };
            productService.getProducts(tableState).then(function (result) {
                vm.products = result.data.items;
                tableState.pagination.numberOfPages = result.data.numberOfPages;
                tableState.pagination.totalItemCount = result.data.totalRecord;
                vm.isLoading = false;
            });
        };

        vm.changeStatus = function changeStatus(product) {
            productService.changeStatus(product).then(function () {
                product.isPublished = !product.isPublished;
            });
        };

        vm.deleteProduct = function deleteProduct(product) {
            bootbox.confirm('Bạn muốn xóa bài viết này không : ' + product.name, function (result) {
                if (result) {
                    productService.deleteProduct(product)
                       .then(function (result) {
                           vm.getProducts(vm.tableStateRef);
                           toastr.success(product.name + ' đã được xóa');
                       })
                        .catch(function (response) {
                            toastr.error(response.data.error);
                       });
                }
            });
        };
    }
})();
