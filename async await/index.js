var fs = require('fs');
var axios = require('axios');

fs.readFile(
  './data.json', 
  { encoding: 'utf8'}, 
  function(err, data) {
    console.log('Data loaded from disk', data);

    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(function(res) {
        console.log('Data downloaded from url', res.data);
      });
  }
);

function readData(path){
  return new Promise(function(resolve, reject){
    fs.readFile(
      path,
      { encoding: 'utf8'}, 
      function(error, data){
        resolve(data);
      }
    )
  })
}
function readLink(url){
  return new Promise(function(resolve, reject){
    axios.get(url)
      .then(function(response){
        resolve(response.data)
      })
  })
}  

async function run(){
  var dataPath = await readData('./data.json');
  var dataLink = await readLink('https://jsonplaceholder.typicode.com/todos/1');
  return [dataPath, dataLink];
}

run().then(function(values){
  console.log(...values);
}).catch(function(error){
  console.log(error);
})




