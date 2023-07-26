const express = require('express');
const router = express.Router();
const session = require('express-session');
// utils
const CryptoUtil = require('../utils/CryptoUtil');
const EmailUtil = require('../utils/EmailUtil');
// utils
const JwtUtil = require('../utils/JwtUtil');
// daos
const CategoryDAO = require('../models/CategoryDAO');
const ProductDAO = require('../models/ProductDAO');
// daos
const CustomerDAO = require('../models/CustomerDAO');
// daos
const OrderDAO = require('../models/OrderDAO');

router.use(
    session({
        secret: '55063etrytuj135trwhgnfbdv657sae',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 }, // Set secure to true in production with HTTPS
    }),
);

// category
router.get('/categories', async function (req, res) {
    const categories = await CategoryDAO.selectAll();
    res.json(categories);
});
// product
router.get('/products/new', async function (req, res) {
    const products = await ProductDAO.selectTopNew(10);
    res.json(products);
});
router.get('/products/all', async function (req, res) {
    const products = await ProductDAO.selectAll();
    res.json(products);
});
router.get('/products/hot', async function (req, res) {
    const products = await ProductDAO.selectTopHot(10);
    res.json(products);
});
// product
router.get('/products/category/:cid', async function (req, res) {
    const _cid = req.params.cid;
    const products = await ProductDAO.selectByCatID(_cid);
    res.json(products);
});
// product
router.get('/products/search/:keyword', async function (req, res) {
    const keyword = req.params.keyword;
    const products = await ProductDAO.selectByKeyword(keyword);
    res.json(products);
});
// product
router.get('/products/:id', async function (req, res) {
    const _id = req.params.id;
    const product = await ProductDAO.selectByID(_id);
    res.json(product);
});
// customer
router.post('/register', async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const image = req.body.image;
    const dbCust = await CustomerDAO.selectByUsernameOrEmail(username, email);
    if (dbCust) {
        res.json({ success: false, message: 'Đã tồn tại Email hoặc Username' });
    } else {
        const now = new Date().getTime(); // milliseconds
        const token = CryptoUtil.md5(now.toString());
        const newCust = {
            username: username,
            password: password,
            name: username,
            phone: null,
            email: email,
            active: 0,
            token: token,
            image: null,
        };
        const result = await CustomerDAO.insert(newCust);
        console.log(result);
        if (result) {
            const send = await EmailUtil.send(email, result._id, token);
            if (send) {
                res.json({ success: true, message: 'Hãy kiểm tra Email của bạn' });
            } else {
                res.json({ success: false, message: 'Email không đúng' });
            }
        } else {
            res.json({ success: false, message: 'Đăng ký thất bại' });
        }
    }
});
// customer
router.post('/active', async function (req, res) {
    const _id = req.body.id;
    const token = req.body.token;
    const result = await CustomerDAO.active(_id, token, 1);
    res.json(result);
});
// customer
router.post('/login', async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
        const customer = await CustomerDAO.selectByUsernameAndPassword(username, password);
        if (customer) {
            if (customer.active === 1) {
                const token = JwtUtil.genToken();
                res.json({
                    success: true,
                    message: 'Đăng nhập thành công',
                    token: token,
                    customer: customer,
                });
            } else {
                res.json({ success: false, message: 'Tài khoản không hoạt động' });
            }
        } else {
            res.json({ success: false, message: 'Username hoặc mật khẩu không đúng' });
        }
    } else {
        res.json({ success: false, message: 'Vui lòng nhập đầy đủ thông tin' });
    }
});
router.get('/token', JwtUtil.checkToken, function (req, res) {
    const token = req.headers['x-access-token'] || req.headers['authorization'];
    res.json({ success: true, message: 'Token is valid', token: token });
});
// myprofile
router.put('/customers/:id', JwtUtil.checkToken, async function (req, res) {
    const _id = req.params.id;
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const image = req.body.image;

    const customer = {
        _id: _id,
        username: username,
        password: password,
        name: name,
        phone: phone,
        email: email,
        image: image,
    };
    const result = await CustomerDAO.update(customer);
    res.json(result);
});
// mycart
router.post('/checkout', JwtUtil.checkToken, async function (req, res) {
    const now = new Date().getTime(); // milliseconds
    const total = req.body.total;
    const items = req.body.items;
    const customer = req.body.customer;
    const order = {
        cdate: now,
        total: total,
        status: 'PENDING',
        customer: customer,
        items: items,
    };
    const result = await OrderDAO.insert(order);
    res.json(result);
});
// myorders
router.get('/orders/customer/:cid', JwtUtil.checkToken, async function (req, res) {
    const _cid = req.params.cid;
    const orders = await OrderDAO.selectByCustID(_cid);
    res.json(orders);
});

module.exports = router;
