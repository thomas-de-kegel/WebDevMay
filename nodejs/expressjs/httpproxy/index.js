// npm install --save-dev http-proxy-middleware
const express = require('express');
const cors = require('cors');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

// use middleware
app.use(cors());
app.use(express.json())
// proxy server
app.use('/news',createProxyMiddleware({
    target: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7bb69938615c468fa36934049aea7a87',
    pathRewrite:{['/news']:''}, //http://localhost:4000/news
    changeOrigin:true,
    secure:true
}))

//if we want to fetch something from our backend app in a react app we do it like this:
/*
useEffect(()=>{
    fetch('/jsonplaceholder/todos')
}) 
//*/

//multiple api's example. Can be helpful to avoid using multiple routes in React. Just load everything in backend first and then use it in frontend.
app.use('/jsonplaceholder',createProxyMiddleware({
    target:'https://jsonplaceholder.typicode.com',
    pathRewrite:{['/jsonplaceholder']:''},
    changeOrigin:true,
    secure:true
}))

app.listen(4000, ()=> console.log("Server running on port 4000"))