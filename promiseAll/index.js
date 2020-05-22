var axios = require('axios');
var url1 = "https://jsonplaceholder.typicode.com/todos/1"
var url2 = "https://jsonplaceholder.typicode.com/todos/2"
var url3 = "https://jsonplaceholder.typicode.com/todos/3"

function getData(url){
  return new Promise(function(resolve, reject){
    axios.get(url)
      .then(function(res){
      resolve(res.data);
      })
      .catch(function(error){
        reject(error);
      })
  })
}

Promise.all([
  getData(url1),
  getData(url2),
  getData(url3)
]).then(function(value){
  console.log(value);
}).catch(function(error){
  console.log(error);
})
