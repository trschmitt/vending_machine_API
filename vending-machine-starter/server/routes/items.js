const express = require("express");
const router = express.Router();
const db = require('../models');
const Item = db.item;

router.get("/api/customer/items", (req, res) => {
  Item.findAll().then((items) => {
    res.json({
      status: "success",
      data: items
    });
  })
})

router.post("/api/customer/items/:itemId/purchases", (req, res) => {
  Item.findById({ where: {id: req.params.itemId} }).then((item) => {
    res.json({
      status: "success",
      data: item
    });
  }).catch(err => {
    throw(err); 
  });
});

module.exports = router
