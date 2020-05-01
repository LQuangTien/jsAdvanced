function run(callback){
  console.log('run ...')
  callback()     
}

var mouse = {
  name: 'Mickey',
  sayHi: function(){
    console.log(this.name)
  }
}

run(mouse.sayHi)

run(mouse.sayHi.bind(mouse))
