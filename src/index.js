// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
//
// const express = require('express');
// const cors = require('cors')
// const app = express();
const axios = require('axios');
//
//
// app.use(cors());




var config = {
  method: 'get',
  url: 'https://hammoq.api-us1.com/api/3/lists',
  headers: {
    'Api-Token': '5732d521ee46f4a7bf5397e9fb4228156b29b5cb9a8198c96dddf21d75f8edecc5311ce2',
    //'Cookie': '__cfduid=d884be75555a796c534eec9f93eba6c751603408620'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});











// var myHeaders = new Headers();
// myHeaders.append("Api-Token", "5732d521ee46f4a7bf5397e9fb4228156b29b5cb9a8198c96dddf21d75f8edecc5311ce2");
// myHeaders.append("Cookie", "__cfduid=d884be75555a796c534eec9f93eba6c751603408620");
//
// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow',
//   mode: 'no-cors'
// };
//
// fetch("https://hammoq.api-us1.com/api/3/lists", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
