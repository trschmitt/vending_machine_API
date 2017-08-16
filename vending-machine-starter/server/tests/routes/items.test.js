const app = require("../../index");
const request = require("supertest");
const db = require("../../models");
const Item = db.item;
const Customer = db.customer;

describe("Item router", () => {
  describe("GET /api/customer/items - get list of items", () => {
    afterEach(() => {
      return Item.destroy({ where: {} });
    });

    it("has a successful status code", () => {
      return request(app).get("/api/customer/items").expect(200);
    });

    it("has a status key in json body", () => {
      return request(app).get("/api/customer/items").then(res => {
        expect(res.body.status).toEqual("success");
      });
    });

    it("has items from database", () => {
      return Item.create({
        description: "Skittles",
        cost: 75,
        quantity: 20
      }).then(item => {
        return request(app).get("/api/customer/items").then(res => {
          expect(res.body.data[0].description).toEqual("Skittles");
        });
      });
    });
  });

  describe("POST /api/customer/items/:itemId/purchases - Purchase an item", () => {
    afterEach(() => {
      return Item.destroy({ where: {} });
    });

    afterEach(() => {
      return Customer.destroy({ where: {} });
    });

    it("has a successful status code", () => {
      return Item.create({
        description: "Skittles",
        cost: 75,
        quantity: 20
      }).then(item => {
        Customer.create({
          availableMoney: 100
        }).then(customer => {
          request(app)
            .post("/api/customer/items/:itemId/purchases")
            .expect(201);
        });
      });
    });

    it("responds with status: success if customer has enough money", () => {
      return Item.create({
        description: "Oreos",
        cost: 99,
        quantity: 20
      }).then(item => {
        Customer.create({
          availableMoney: 100
        }).then(customer => {
          request(app)
            .post(`/api/customer/items/${item.id}/purchases`, {})
            .then(res.body.status)
            .toBe("success");
        });
      });
    });

    it("responds with status fail if customer doesnt have enough money", () => {
      return Item.create({
        description: "Oreos",
        cost: 99,
        quantity: 20
      }).then(item => {
        Customer.create({
          availableMoney: 90
        }).then(customer => {
          request(app)
            .post(`/api/customer/items/${item.id}/purchases`, {})
            .then(res.body.status)
            .toBe("fail");
        });
      });
    });

    it("responds with status fail if Item Quantity is 0", () => {
      return Item.create({
        description: "Oreos",
        cost: 99,
        quantity: 0
      }).then(item => {
        Customer.create({
          availableMoney: 100
        }).then(customer => {
          request(app)
            .post(`/api/customer/items/${item.id}/purchases`, {})
            .then(res.body.status)
            .toBe("fail");
        });
      });
    });

    it("Reduces the item quantity by 1", () => {
      return Item.create({
        description: "Oreos",
        cost: 99,
        quantity: 2
      }).then(item => {
        Customer.create({
          availableMoney: 100
        }).then(customer => {
          request(app)
            .post(`/api/customer/items/${item.id}/purchases`, {})
            .then(res => {
              Item.findById(item.id).then(updatedItem => {
                expect(updatedItem.quantity).toBe(item.quantity - 1);
              });
            });
        });
      });
    });

    it("Reduces the customer money by item cost", () => {
      return Item.create({
        description: "Oreos",
        cost: 99,
        quantity: 2
      }).then(item => {
        Customer.create({
          availableMoney: 100
        }).then(customer => {
          request(app)
            .post(`/api/customer/items/${item.id}/purchases`, {})
            .then(res => {
              Customer.findById(customer.id).then(updatedCustomer => {
                expect(updatedCustomer.availableMoney).toBe(
                  customer.availableMoney - item.cost
                );
              });
            });
        });
      });
    });
  });
});
