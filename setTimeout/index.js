function doAfter(fn, xs) {
  return new Promise(function(res, rej){
    setTimeout(function(){
      res(fn());
    }, xs);
  })
}

function sayHello() {
  console.log('Hello');
}

function sayGoodbye() {
  console.log('Goodbye');
}

doAfter(sayHello, 1000).then(sayGoodbye);
