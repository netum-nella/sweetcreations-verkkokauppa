const products = require("./listAllProducts.js"); // filename for the function

describe("Testing the listAllProducts function for product table to list all products", function () { // describe is a test suite
    it("Lists all products from a product table", async function () {
        const result = await products();
        expect(result).toEqual([
            {
                product_id: 10,
                product_name: 'Teddy Earrings',
                product_colour: 'White',
                product_scent: 'Faux fur',
                product_price: '9.90',
                product_stock: 50,
                image: 'https://sweety-images.s3.us-east-2.amazonaws.com/20220117_144226.jpg'
            },
            {
                product_id: 11,
                product_name: 'Rattan Tray',
                product_colour: 'Natural',
                product_scent: 'Rattan',
                product_price: '12.90',
                product_stock: 50,
                image: 'https://sweety-images.s3.us-east-2.amazonaws.com/processed_c957e880873f4d5e80aad5ccb61f1e2b.jpeg'
            },
            {
                product_id: 12,
                product_name: 'Waxmelts',
                product_colour: 'Natural',
                product_scent: 'Pumpkin Spice',
                product_price: '7.90',
                product_stock: 25,
                image: 'https://sweety-images.s3.us-east-2.amazonaws.com/processed_3ff54f17a6ce401f89b1af4d4f0ce075.jpeg'
            },
            {
                product_id: 9,
                product_name: 'Autumn Candle',
                product_colour: 'Natural',
                product_scent: 'Vanilla Pumpkin',
                product_price: '25.90',
                product_stock: 49,
                image: 'https://sweety-images.s3.us-east-2.amazonaws.com/thumbnail_IMG_20210728_132312.jpg'
            }
        ]);
    })
});