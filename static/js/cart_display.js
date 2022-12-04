$(document).ready(() => {

    console.log('cart_display -> OK');
    const userId = $('#user_id').val();

    if (userId != 'None') {
        $.ajax({
            url: '/cart/ajax_cart_display',
            data: `uid=${userId}`,
            success: (response) => {
                $('#cart-count').text(response.count);
                $('.cart-summary').find('h5').text(response.count + 'товарів обрано');
                $('.cart-summary').find('h4').text('ВАРТІСТЬ: ' + response.amount + ' грн.');
            }
        });
    }

});
