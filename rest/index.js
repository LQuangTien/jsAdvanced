function concat(separator, ...strings){
  return strings.join(separator)
}
console.log(concat('.', 'a', 'b', 'c'))

function sum(...numbers){
  return numbers.reduce((sum, num) => sum +num)
}
console.log(sum(2,3,4,2,1,5))
