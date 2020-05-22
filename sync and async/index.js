var axios = require('axios');
var url1 ="https://jsonplaceholder.typicode.com/todos/1";
var url2 ="https://jsonplaceholder.typicode.com/todos/2";

function getAxios(url){
  axios.get(url).then(function(res){
    console.log(res.data);
  })
}
getAxios(url1);
getAxios(url2);
