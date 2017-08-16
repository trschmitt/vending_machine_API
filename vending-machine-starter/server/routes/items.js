const express = require("express");
const router = express.Router();
const db = require("../models");
const Item = db.item;
const Customer = db.customer;

function currentCustomer(callback) {
  Customer.findOne().then(callback);
}

router.get("/api/customer/items", (req, res) => {
  Item.findAll().then(items => {
    res.json({
      status: "success",
      data: items
    });
  });
});

router.post("/api/customer/items/:itemId/purchases", (req, res) => {
  currentCustomer(customer => {
    Item.findById(req.params.itemId).then(item => {
      let result;
      if (customer.money >= item.cost && item.quantity > 0) {
        item.quantity -= 1;
        customer.availableMoney -= item.cost;
        item.save().then(() => {
          customer.save().then(() => {
            res.json({ status: "success" });
          });
        });
      } else {
        res.json({ status: "fail" });
      }
      res.json(result);
    });
  });
});

module.exports = router;
