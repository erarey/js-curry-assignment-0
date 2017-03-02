'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => {
      let array = []
      for (let i = 0; i < count; i++)
      {
        array.push(itemName)
      }
      return array;
    }

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => {
      let carts = []
      customers.map((x) => {
        let array = entries(x.shoppingList)
        //array = [...array]
        //console.log("original:" + array)
        array.forEach((y) => {
          for (let ii = 0; ii < listings.length; ii++)
          {
          //console.log(listings[ii])
            if (listings[ii].name === y[0])
            {
              //console.log(listings[ii].name)
              return listings[ii]
            }
          }
          return y
          })
          let cart = []
          const customer = x.name
          //console.log(array)
          let items = []
          array.forEach((w) => {
            //console.log(w)
            items = itemRepeater(w[0])(w[1])
            //console.log(items)

          })
          let c = {customer, items}
          //console.log(c)
          carts.push(c)
          //for (let q = 0, q < array)
          //console.log(cart)
          //return cart
        //return
      })
      console.log(carts)
      return carts
      //console.log(customers)
    }


module.exports = {
  listing,
  customer,
  constructCarts
}
