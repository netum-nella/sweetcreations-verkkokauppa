BEGIN;
UPDATE product SET product_stock=product_stock-1 WHERE product_id=1;
UPDATE cartitem SET cartitem_quantity=cartitem_quantity+1 WHERE cartitem_id=1;
COMMIT;


insert into cartitem (cartitem_cart_id, cartitem_product_id, cartitem_quantity) values (1, 1, 1);


INSERT INTO customer (customer_name, customer_city, customer_phone, customer_email) VALUES ('Jussi', 'Helsinki', 12345678, 'mail@mail.com')
INSERT INTO product (product_name, product_colour, product_scent, product_price, product_stock) VALUES ('Jokutuote', 'Jokuväri', 'Jokutuoksu', 50, 10)
INSERT INTO cart (cart_addTime, fk_customer_id) VALUES (CURRENT_DATE, 1)
INSERT INTO cartitem (cartitem_quantity, fk_product_id, fk_cart_id) VALUES (2, 1, 1)
INSERT INTO ordertable (ordertable_addTime, fk_cart_id, fk_customer_id) VALUES (CURRENT_DATE, 1, 1)