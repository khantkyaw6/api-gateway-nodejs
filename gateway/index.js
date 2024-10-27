const express = require('express');
const app = express();
const {createProxyMiddleware} = require('http-proxy-middleware');

const port =  3000;

app.use("/chat-service",createProxyMiddleware({
    target: "http://localhost:3001",
    pathRewrite: {
        "^/chat-service":""
    }
}))

app.use("/feed-service",createProxyMiddleware({
    target: "http://localhost:3002",
    pathRewrite: {
        "^/feed-service":""
    }
}))

app.listen(port, () => {
    console.log(`API gateway service started on port ${port}`);
})