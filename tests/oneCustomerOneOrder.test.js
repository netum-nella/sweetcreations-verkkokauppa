const oneCustomerOneOrder = require("./oneCustomerOneOrder.js"); // filename for the function

describe("tests one customers one order", function () {
    it("returns one customers one order based on ordertable id", async function () {
        const result = await oneCustomerOneOrder(1); // ordertable id
        expect(result).toEqual(
            [
                {
                    ordertable_id: 1,
                    cartitem_quantity: 3,
                    product_name: 'Autumn Candle',
                    product_price: '25.90',
                    product_scent: 'Vanilla Pumpkin',
                    product_colour: 'Natural',
                    customer_name: 'Jussi',
                    customer_email: 'mail@mail.com'
                }
            ]);
    })
});