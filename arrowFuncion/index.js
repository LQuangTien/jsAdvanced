// PART 1
var sum = (a,b) => a+b
console.log('sum: ', sum(3,2))
var square = x => x*x;
console.log('square: ', square(2))
var arr = [1, 3, 5]
var newArr = arr.map((x) => x*2 )
console.log('new arr: ', newArr)

// PART 2
var a = {
  name: 'AAA',
  run: function(){
    var run2= () => {
      console.log(this.name)
    }
    run2()
  }
}
a.run()
