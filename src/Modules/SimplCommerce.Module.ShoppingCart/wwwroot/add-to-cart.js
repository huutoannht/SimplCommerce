/*global $ */
$(function () {
    $('body').on('click', '.btn-add-cart', function (e) {
        e.preventDefault();
        $('#productOverview').modal('hide');
        $('.btn-add-cart').attr('disabled', true);
        var quantity,
            $form = $(this).closest("form"),
            productId = $(this).closest("form").find('input[name=productId]').val(),
            contactName = $(this).closest("form").find('input[name=contactName]').val(),
            phone = $(this).closest("form").find('input[name=phone]').val(),
            email = $(this).closest("form").find('input[name=email]').val(),
            $quantityInput = $form.find('.quantity-field');

        quantity = $quantityInput.length === 1 ? $quantityInput.val() : 1;

        $.ajax({
            type: 'POST',
            url: '/cart/add-item',
            data: JSON.stringify({ productId: productId, quantity: quantity }),
            contentType: "application/json"
        }).done(function (data) {
            $('.btn-add-cart').attr('disabled', false);
            $('.cart-badge .badge').text($('#shopModal').find('.cart-item-count').text());
            $.ajax({
                type: 'POST',
                url: '/user/address/create',
                data: JSON.stringify({ contactName: contactName, phone: phone, addressLine1:email }),
                contentType: "application/json"
            }).done(function (data) {
                $.ajax({
                    type: 'GET',
                    url: '/Checkout/shipping',
                    data: null,
                    contentType: "application/json"
                }).done(function (data) {
                    $.ajax({
                        type: 'GET',
                        url: '/Cod/CoDCheckout',
                        data: null,
                        contentType: "application/json"
                    }).done(function (data) {
                        alert('Đăng ký khóa học thành công!');
                        window.location.replace("/");
                    });
                });
               
            });

            }).fail(function () {

            /*jshint multistr: true */
            $('#shopModal').find('.modal-content').html(' \
                <div class="modal-header"> \
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> \
                    <h4 class="modal-title" id="myModalLabel">Oops</h4> \
                </div> \
                <div class="modal-body"> \
                    Something went wrong. \
                </div>');
            $('#shopModal').modal('show');
        });
    });
});
