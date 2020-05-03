function greeting(){
  console.log(`Hi, ${this.name}, i am ${this.age}`)
}

const cat ={
  name: 'Tom',
  age: 19
}

greeting.call(cat)

// call: func.call(this, param1, param2)
