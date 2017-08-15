const app = require("../../index");
const request = require("supertest");

describe('Item router', () => {
  describe('GET /api/customer/items - get list of items', () => {
    it('has a successful status code', () => {
      return request(app)
        .get("/api/customer/items")
        .expect(200);
    })
  })
})
