const express = require('express');

const ShopController = require('../controllers/shop');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/', ShopController.getIndex);

router.get('/products', ShopController.getProducts);

router.get('/products/:productId', ShopController.getProduct);

router.get('/cart', isAuth, ShopController.getCart);

router.post('/cart', isAuth, ShopController.postCart);

router.post('/cart-delete-item', isAuth, ShopController.postCartDeleteProduct);

router.get('/checkout', isAuth, ShopController.getCheckout);

router.get('/checkout/success', ShopController.getCheckoutSuccess);

router.get('/checkout/cancel', ShopController.getCheckout);

router.get('/orders', isAuth, ShopController.getOrders);

router.post('/create-order', isAuth, ShopController.postOrders);

router.get('/orders/:orderId', isAuth, ShopController.getInvoice);

module.exports = router;   