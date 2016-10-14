'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */
// const calculateTotals =
//   listings =>
//     carts =>
//       carts.map(cart =>
//           receipt(
//             cart.customer,
//             cart.items.map(item =>
//                             listings.map(listing =>
//                                           listedPrice(listing)
//                                         ).map(list =>
//                                                 list(item)
//                                               )
//                           )
//                   )
//                 ).map(item =>
//                         receipt(item.customer, item.total.map(nums =>
//                                                                 nums.reduce((init, x) =>
//                                                                                 init + x, 0
//                                                                             )
//                                                               ).reduce((init, x) =>
//                                                                           init + x, 0
//                                                                        )
//                                 )
//                     )

// const calculateTotals =
//   listings =>
//     carts => {
//       return carts.map(c => receipt(
//                               c.customer,
//                               c.items.map(item =>
//                                             listings.filter(listing =>
//                                                               listing.name === item
//                                                             )[0].price
//                                           ).reduce((init, x) =>
//                                                         init + x, 0
//                                                   )
//                                     )
//                       )
//     }

const calculateTotals =
  listings =>
    carts => {
      return carts
          .map(c => ({
                    customer: c.customer,
                    total: c.items
                        .map(item => listings
                                  .reduce((init, listing) => init + listedPrice(listing)(item), 0))
                        .reduce((init, obj) => init + obj, 0)
                      })
              )
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
