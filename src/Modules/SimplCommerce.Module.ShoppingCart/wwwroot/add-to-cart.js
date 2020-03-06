/*global $ */
$(function () {
    $('.cart-required').css('display', 'none');
    $('body').on('click', '.btn-add-cart', function (e) {
        e.preventDefault();
        //$('#productOverview').modal('hide');

        //$('.cart-required').css('display', 'none');
        //var quantity,
        //    $form = $(this).closest("form"),
        //    productId = $(this).closest("form").find('input[name=productId]').val(),
        //    contactName = $(this).closest("form").find('input[name=contactName]').val(),
        //    phone = $(this).closest("form").find('input[name=phone]').val(),
        //    email = $(this).closest("form").find('input[name=email]').val(),
        //    $quantityInput = $form.find('.quantity-field');
        //if (!contactName) {
        //    $('#contactName-error').css('display', 'block');
        //    return;
        //}
        //if (!phone) {
        //    $('#phone-error').css('display', 'block');
        //    return;
        //}
        //if (!email) {
        //    $('#email-error').css('display', 'block');
        //    return;
        //}
        //$('.btn-add-cart').attr('disabled', true);
        //quantity = $quantityInput.length === 1 ? $quantityInput.val() : 1;



        $.ajax({
            type: 'POST',
            url: '/cart/add-item',
            data: JSON.stringify({ productId: 246, quantity: 1 }),
            contentType: "application/json"
        }).done(function (data) {
            $('.btn-add-cart').attr('disabled', false);
            $('.cart-badge .badge').text($('#shopModal').find('.cart-item-count').text());
            window.location.replace("/Checkout/shipping")
            //$.ajax({
            //    type: 'POST',
            //    url: '/user/address/create',
            //    data: JSON.stringify({ contactName: contactName, phone: phone, addressLine1:email }),
            //    contentType: "application/json"
            //}).done(function (data) {
            //    $.ajax({
            //        type: 'GET',
            //        url: '/Checkout/shipping',
            //        data: null,
            //        contentType: "application/json"
            //    }).done(function (data) {
            //        $.ajax({
            //            type: 'GET',
            //            url: '/Cod/CoDCheckout',
            //            data: null,
            //            contentType: "application/json"
            //        }).done(function (data) {
            //            show_modal('modal_success');
            //            //window.location.replace("/");
            //        });
            //    });

            //});

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
