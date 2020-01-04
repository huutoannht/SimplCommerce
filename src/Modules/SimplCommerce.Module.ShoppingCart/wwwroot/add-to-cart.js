/*global $ */
$(function () {
    $('.cart-required').css('display', 'none');
    $('body').on('click', '#btn-reg', function (e) {
        e.preventDefault();
        $('#productOverview').modal('hide');

        $('.cart-required').css('display', 'none');
        var quantity,
            $form = $(this).closest("form"),
            productId = $('#productId').val(),
            contactName = $('#contactName').val(),
            phone = $('#phone').val(),
            email = $('#email').val();
        if (!contactName) {
            alert('Mời nhập họ và tên');
            // $('#contactName-error').css('display', 'block');
            return;
        }
        if (!phone) {
            alert('Mời số điện thoại');
            //$('#phone-error').css('display', 'block');
            return;
        }
        if (!email) {
            alert('Mời nhập địa chỉ email');
            //$('#email-error').css('display', 'block');
            return;
        }
        $('#contactName').val('');
        $('#phone').val('');
        $('#email').val('');
        $('.btn-add-cart').attr('disabled', true);
        quantity = 1;
        $('#modal-reg').modal('hide');
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
                data: JSON.stringify({ contactName: contactName, phone: phone, addressLine1: email }),
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
                        $('#modal-success').modal('show');
                        //window.location.replace("/");
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
    $('body').on('click', '.btn-close-message-cart', function (e) {
        window.location.replace("/");
    });
});
