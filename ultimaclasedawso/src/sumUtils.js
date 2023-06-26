// sumUtils.js
export function precioTotalSuma(users) {
  let total = 0
  for (const user of users) {
    total += user.price
  }
  return total
}
