const assert = require('node:assert');
const { priceCart } = require('./pricing');

// subtotal 100 -> +7.5% tax -> 107.50
assert.strictEqual(priceCart([{ price: 50, qty: 2 }]), 107.5);

// empty cart
assert.strictEqual(priceCart([]), 0);

console.log('pricing tests passed');
