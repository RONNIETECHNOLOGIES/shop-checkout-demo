// Cart pricing for the shop checkout.
// Money is handled in the store's major unit (e.g. dollars) and rounded to cents at the end.

const TAX_RATE = 0.075; // 7.5% sales tax

/**
 * A promo code. Either a percentage off, or a fixed amount off.
 * @typedef {Object} Promo
 * @property {'percent'|'fixed'} type
 * @property {number} amount  - for 'percent', e.g. 10 = 10% off; for 'fixed', e.g. 10 = $10 off
 * @property {number} expires - unix ms; the promo is ignored after this
 */

/**
 * Work out what the customer pays for a cart.
 *
 * @param {Array<{price:number, qty:number}>} items - line items
 * @param {Promo} [promo] - optional promo code (percent or fixed amount off)
 * @returns {number} the amount to charge, rounded to 2 dp
 */
function priceCart(items, promo) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  let total = subtotal * (1 + TAX_RATE);

  if (promo && promo.expires > Date.now()) {
    total = total - total * (promo.amount / 100);
  }

  return Math.round(total * 100) / 100;
}

module.exports = { priceCart, TAX_RATE };
