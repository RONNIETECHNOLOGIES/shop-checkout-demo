// Cart pricing for the shop checkout.
// Money is handled in the store's major unit (e.g. dollars) and rounded to cents at the end.

const TAX_RATE = 0.075; // 7.5% sales tax

/**
 * Work out what the customer pays for a cart.
 *
 * @param {Array<{price:number, qty:number}>} items - line items
 * @returns {number} the amount to charge, rounded to 2 dp
 */
function priceCart(items) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal * (1 + TAX_RATE);
  return Math.round(total * 100) / 100;
}

module.exports = { priceCart, TAX_RATE };
