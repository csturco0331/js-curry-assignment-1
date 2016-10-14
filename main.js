'use strict'

const {
  listing,
  cart,
  calculateTotals
} = require('./lib.js')

const regularListings = [
  listing('detergent', 10),
  listing('hennessey', 100),
  listing('carlo rozzi', 20),
  listing('coffee', 5),
  listing('cookies', 6),
  listing('hennessey', -15),
  listing('mountain dew', 2)
]

const saleListings = [
  listing('detergent', 5),
  listing('hennessey', 50),
  listing('carlo rozzi', 10),
  listing('coffee', 2.5),
  listing('cookies', 3),
  listing('mountain dew', 1)
]

const carts = [
  cart(
    'adam',
    'carlo rozzi',
    'carlo rozzi',
    'carlo rozzi',
    'carlo rozzi',
    'carlo rozzi',
    'carlo rozzi'
  ),
  cart(
    'david',
    'detergent',
    'hennessey',
    'coffee'
  ),
  cart(
    'michael',
    'coffee',
    'hennessey',
    'coffee',
    'hennessey',
    'coffee',
    'hennessey'
  ),
  cart(
    'dillon',
    'cookies',
    'cookies',
    'cookies',
    'mountain dew',
    'mountain dew',
    'mountain dew'
  )
]

const regularTotals = calculateTotals(regularListings)
const saleTotals = calculateTotals(saleListings)

regularTotals(carts)
  .forEach(cart => console.log(`${cart.customer}, your total is ${cart.total}`))

saleTotals(carts)
  .forEach(cart => console.log(`${cart.customer}, your total could have been ${cart.total} if you were smart enough to come on a sale day! (you dummy)`))
