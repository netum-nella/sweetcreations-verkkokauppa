const oneCustomerShoppingcart = require("./oneCustomerShoppingcart.js"); // filename for the function

describe("gets one customers shopping cart ", function () {
    it(" shows one customers shopping cart", async function () {
        const result = await oneCustomerShoppingcart(1); // id
        expect(result).toEqual([
            {
                cartitem_quantity: 3,
                product_name: 'Autumn Candle',
                product_price: '25.90',
                product_scent: 'Vanilla Pumpkin',
                product_colour: 'Natural',
                customer_name: 'Jussi',
                customer_email: 'mail@mail.com'
            }
        ])

    })
});