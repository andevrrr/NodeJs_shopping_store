const express = require('express')

const router = express.Router();
const AdminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');
const { body } = require('express-validator')

router.get('/add-product', isAuth, AdminController.getAddProduct);

router.post('/add-product',
    [
        body('title')
            .isString()
            .isLength({ min: 5 })
        .trim(),
        body('price')
            .isFloat(),
        body('description')
            .isLength({ min: 5 })
        .trim(),
    ],
    isAuth, AdminController.postAddProduct);

router.get('/products', isAuth, AdminController.getProducts);

router.get('/edit-product/:productId',
    [
        body('title')
            .isString()
            .isLength({ min: 5 })
        .trim(),
        body('price')
            .isFloat(),
        body('description')
            .isLength({ min: 5 })
        .trim()
    ],
    isAuth, AdminController.getEditProduct);

router.post('/edit-product', isAuth, AdminController.postEditProduct);

router.post('/delete-product', isAuth, AdminController.postDeleteProduct);


module.exports = router;