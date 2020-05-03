// constructor function
function Mouse(name){
  this.name = name
}
Mouse.prototype.run = function(){
  console.log(`${this.name} is running`)
}
const mickey = new Mouse('Mickey')
mickey.run()

// object literals
var jerry = {
  name: 'Jerry',
  run: function(){
    console.log(`${this.name} runnnnnnn`)
  }
}
jerry.run()

//enhanced object literals
const name = 'Tom'
const cat ={
  name,
  run(){
    console.log(`${this.name} is runningggggggg`)
  }
}
cat.run()
