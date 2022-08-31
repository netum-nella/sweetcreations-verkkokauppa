const oneProduct = require("./one_product.js"); // filename for the function

describe("Test to get one product, based on id, from product table", function () {
    it("Gets one product, based on id, from product table", async function () {
        const result = await oneProduct(9); // id of the product
        expect(result).toEqual([
            {
                product_id: 9,
                product_name: 'Autumn Candle',
                product_colour: 'Natural',
                product_scent: 'Vanilla Pumpkin',
                product_price: '25.90',
                product_stock: 49,
                image: 'https://sweety-images.s3.us-east-2.amazonaws.com/thumbnail_IMG_20210728_132312.jpg'
            }
        ])
    })
});