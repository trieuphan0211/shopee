const express = require("express");
const router = express.Router();
// utils
const JwtUtil = require("../utils/JwtUtil");
// daos
const AdminDAO = require("../models/AdminDAO");
// daos
const CategoryDAO = require("../models/CategoryDAO");
// daos
const ProductDAO = require("../models/ProductDAO");
// daos
const OrderDAO = require("../models/OrderDAO");
// daos
const CustomerDAO = require("../models/CustomerDAO");
// utils
const EmailUtil = require("../utils/EmailUtil");

// login
router.post("/login", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  if (username && password) {
    const admin = await AdminDAO.selectByUsernameAndPassword(
      username,
      password
    );
    if (admin) {
      const token = JwtUtil.genToken();
      res.json({
        success: true,
        message: "Authentication successful",
        token: token,
      });
    } else {
      res.json({ success: false, message: "Incorrect username or password" });
    }
  } else {
    res.json({ success: false, message: "Please input username and password" });
  }
});
router.get("/token", JwtUtil.checkToken, function (req, res) {
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  res.json({ success: true, message: "Token is valid", token: token });
});

// category
router.get("/categories", JwtUtil.checkToken, async function (req, res) {
  const categories = await CategoryDAO.selectAll();
  res.json(categories);
});

// category
router.post("/categories", JwtUtil.checkToken, async function (req, res) {
  const name = req.body.name;
  const category = { name: name };
  const result = await CategoryDAO.insert(category);
  res.json(result);
});
// category
router.put("/categories/:id", JwtUtil.checkToken, async function (req, res) {
  const _id = req.params.id;
  const name = req.body.name;
  const category = { _id: _id, name: name };
  const result = await CategoryDAO.update(category);
  res.json(result);
});
// category
router.delete("/categories/:id", JwtUtil.checkToken, async function (req, res) {
  const _id = req.params.id;
  const result = await CategoryDAO.delete(_id);
  res.json(result);
});

// product
router.get("/products", JwtUtil.checkToken, async function (req, res) {
  // get data
  var products = await ProductDAO.selectAll();
  // pagination
  const sizePage = 4;
  const noPages = Math.ceil(products.length / sizePage);
  var curPage = 1;
  if (req.query.page) curPage = parseInt(req.query.page); // /products?page=xxx
  const offset = (curPage - 1) * sizePage;
  products = products.slice(offset, offset + sizePage);
  // return
  const result = { products: products, noPages: noPages, curPage: curPage };
  res.json(result);
});
// product
router.post("/products", JwtUtil.checkToken, async function (req, res) {
  const name = req.body.name;
  const price = req.body.price;
  const cid = req.body.category;
  const image = req.body.image;
  const now = new Date().getTime(); // milliseconds
  const category = await CategoryDAO.selectByID(cid);
  const product = {
    name: name,
    price: price,
    image: image,
    cdate: now,
    category: category,
  };
  const result = await ProductDAO.insert(product);
  res.json(result);
});
// product
router.put("/products/:id", JwtUtil.checkToken, async function (req, res) {
  const _id = req.params.id;
  const name = req.body.name;
  const price = req.body.price;
  const cid = req.body.category;
  const image = req.body.image;
  const now = new Date().getTime(); // milliseconds
  const category = await CategoryDAO.selectByID(cid);
  const product = {
    _id: _id,
    name: name,
    price: price,
    image: image,
    cdate: now,
    category: category,
  };
  const result = await ProductDAO.update(product);
  res.json(result);
});
// product
router.delete("/products/:id", JwtUtil.checkToken, async function (req, res) {
  const _id = req.params.id;
  const result = await ProductDAO.delete(_id);
  res.json(result);
});
// order
router.get("/orders", JwtUtil.checkToken, async function (req, res) {
  const orders = await OrderDAO.selectAll();
  res.json(orders);
});
// order
router.put("/orders/status/:id", JwtUtil.checkToken, async function (req, res) {
  const _id = req.params.id;
  const newStatus = req.body.status;
  const result = await OrderDAO.update(_id, newStatus);
  res.json(result);
});
// customer
router.get("/customers", JwtUtil.checkToken, async function (req, res) {
  const customers = await CustomerDAO.selectAll();
  res.json(customers);
});
// order
router.get(
  "/orders/customer/:cid",
  JwtUtil.checkToken,
  async function (req, res) {
    const _cid = req.params.cid;
    const orders = await OrderDAO.selectByCustID(_cid);
    res.json(orders);
  }
);
// customer
router.put(
  "/customers/deactive/:id",
  JwtUtil.checkToken,
  async function (req, res) {
    const _id = req.params.id;
    const token = req.body.token;
    const result = await CustomerDAO.active(_id, token, 0);
    res.json(result);
  }
);
// customer
router.get(
  "/customers/sendmail/:id",
  JwtUtil.checkToken,
  async function (req, res) {
    const _id = req.params.id;
    const cust = await CustomerDAO.selectByID(_id);
    if (cust) {
      const send = await EmailUtil.send(cust.email, cust._id, cust.token);
      if (send) {
        res.json({ success: true, message: "Please check email" });
      } else {
        res.json({ success: false, message: "Email failure" });
      }
    } else {
      res.json({ success: false, message: "Not exists customer" });
    }
  }
);
// order - admin
router.get("/orders", JwtUtil.checkToken, async function (req, res) {
  const orders = await OrderDAO.selectAll();
  res.json(orders);
});

module.exports = router;
