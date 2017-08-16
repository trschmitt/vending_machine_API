const db = require('../../models');
const Item = db.item;

afterEach(() => {
  return Item.destroy({ where: {description: "Skittles"} });
})

describe('Item', ()=> {
  it('can be persisted', () => {
    return Item.create({ description:"Skittles", cost:75, quantity:20 }).then((item) => {
      expect(item.id).toBeTruthy();
    })
  });
});
