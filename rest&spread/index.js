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

//shalow clone
obj1 ={
  a: 1,
  b: 2,
  c: 3,
  d: {e: 10}
}

obj2={
  ...obj1,
  z: 20
}

//deep clone
obj3={
  ...obj1,
  z: 20,
  d: {...obj1.d}
}
console.log({obj1, obj2, obj3}) //shallow clone
obj2.d.e=12
obj3.d.e=190
console.log({obj1, obj2, obj3}) //deep clone
