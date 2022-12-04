$(document).ready(() => {

    console.log('cart.js -> OK');

    $('.products').on('click', '.add-to-cart-btn', (event) => {
        console.log('add-btn -> click');
        //
        let mess = 'Для використання кошика Ви можете обрати один із двох режимів:\n'
        mess += '1 - збереження кошика у базі данних \n(буде доступно в усіх браузерах та пристроях)\n';
        mess += '2 - збереження кошика у браузері користувача \n(буде доступно тільки в цьому браузері)\n';
        mess += 'Підтверджуєте вибір більш надійного першого варіанту?';
        //
        if (confirm(mess)) {
            // 1.Збереження кошика у базі данних
            console.log('Збереження кошика у базі данних');
            const userId = $('#user_id').val();
            console.log('User-ID: ' + userId);
            //
            if (userId == 'None') {
                alert('Для збереження кошика Ви повинні авторизуватись')
            }
            else {
                let productId = $(event.target).prev().val();
                console.log('Product-Id: ' + productId);
                // Відправка AJAX-запиту на сервер для збереження товару у БД:
                $.ajax({
                    url: '/cart/ajax_cart',
                    data: `uid=${userId}&pid=${productId}`,
                    success: (response) => {
                        console.log('AJAX -> work');
                        $('#cart-count').text(response.count);
                        $('.cart-summary').find('h5').text(response.count + ' товарів обрано')
                        $('.cart-summary').find('h4').text('ВАРТІСТЬ: ' + response.amount + ' грн.')

                    }
                });
            }
        } else {
            // 2. Збереження кошика у браузері
            console.log('Збереження кошика у браузері');
        }
    });

});