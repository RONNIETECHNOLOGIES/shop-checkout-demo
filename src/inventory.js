// Tiny in-memory stock tracker for the demo shop.

const stock = new Map(); // sku -> units on hand

function setStock(sku, units) {
  stock.set(sku, units);
}

function inStock(sku, qty) {
  return (stock.get(sku) || 0) >= qty;
}

/** Reserve `qty` units of `sku`. Returns true if it succeeded. */
function reserve(sku, qty) {
  if (!inStock(sku, qty)) return false;
  stock.set(sku, stock.get(sku) - qty);
  return true;
}

module.exports = { setStock, inStock, reserve };
