var axios = require('axios');
var co = require('co');
var urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5'
];
function getLink(url){
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
var readLink = co.wrap(function*(links){
  return yield links.map(function(link){
    return getLink(link);
  })
})

readLink(urls)
  .then(function(values){
    console.log(values);
  })
  .catch(function(error){
    console.log(error);
  })

