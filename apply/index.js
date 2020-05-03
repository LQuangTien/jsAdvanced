function sum(){
  const numbers = Array.from(arguments)
  return numbers.reduce((sum, number) => sum+=number, 0)
}

function average(){
  var total = sum.apply(null, arguments)
  return total / arguments.length
}

console.log(average(1,2,3,4))

//apply: func.apply(this, [param1, param2, ...])
