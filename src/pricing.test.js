const assert = require('node:assert');
const { priceCart } = require('./pricing');

const SOON = Date.now() + 60 * 60 * 1000; // 1 hour from now

// subtotal 100 -> +7.5% tax -> 107.50
assert.strictEqual(priceCart([{ price: 50, qty: 2 }]), 107.5);

// empty cart
assert.strictEqual(priceCart([]), 0);

// 10% off: 107.50 - 10% = 96.75
assert.strictEqual(priceCart([{ price: 50, qty: 2 }], { type: 'percent', amount: 10, expires: SOON }), 96.75);

// expired promo is ignored
assert.strictEqual(priceCart([{ price: 50, qty: 2 }], { type: 'percent', amount: 10, expires: 1 }), 107.5);

console.log('pricing tests passed');
