/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  var categorys = [];
  for (var i = 0; i < transactions.length; i++) {

    var type = transactions[i].category;

    let foundObject = categorys.find(obj => obj.category === type);
    if (foundObject) {
      var price = transactions[i].price;
      var category_price = foundObject.totalSpent;

      var total = price + category_price;
      foundObject.totalSpent = total;
    } else {
      let newObject = { "category": type, "totalSpent": transactions[i].price };
      categorys.push(newObject);
    }

  }

  return categorys;
}

module.exports = calculateTotalSpentByCategory;