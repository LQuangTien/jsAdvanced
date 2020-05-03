class CoffeMachine{
  makeCoffe(){
    console.log('Make coffe ...')
  }
}

class SpecialCoffeMachine extends CoffeMachine{
  makeCoffe(callback) {
    console.log('Make coffe and do something ... ')
    callback()
  }
}

const machine = new SpecialCoffeMachine()
machine.makeCoffe(function(){
  console.log('Call the boss!')
})

