// ...rest
function concat(separator, ...strings){
  return strings.join(separator)
}
console.log(concat('.', 'a', 'b', 'c'))

function sum(...numbers){
  return numbers.reduce((sum, num) => sum +num)
}
console.log(sum(2,3,4,2,1,5))

//...spread
console.log('')

const a = [1, 2, 3]
const b = [0, ...a, 4]
console.log(b)
console.log(sum(...b)) // sum(0, 1, 2, 3, 4)
