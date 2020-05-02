var names = ['A', 'B', 'C']
for(let i = 0; i < names.length; i++){
  console.log(names[i])
}

console.log('')

var obj = {
  0: 'A',
  1: 'B',
  2: 'C',
  length: 3
}
for(let i = 0; i < obj.length; i++){
  console.log(obj[i])
}

function sum(){
  var numbers = Array.from(arguments)
  return numbers.reduce(function(sum, number){
    return sum += number
  }, 0)
}
console.log(sum(1,2,3,4,5,10))
