// take the icecream array and check
// if acc has a property with one of the icecream names
// if true, then add one to its value {icecream: value+1}
// if false, create the property with initial val of 1
// update the acc for next iteration

const data = [
  { name: 'Tyler', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
  { name: 'Richard', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
  { name: 'Amanda', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
  { name: 'Andrew', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
  { name: 'David', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
  { name: 'Karl', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
]

let iceCreamTotals = data.reduce((accumulator, currentValue) => {
  currentValue.favoriteIceCreams.map((icecream) => {
    if (accumulator.hasOwnProperty(icecream)) accumulator[icecream] += 1
    else accumulator[icecream] = 1
  })
  return accumulator
}, {})
