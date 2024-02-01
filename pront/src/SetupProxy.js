// src/SetupProxy.js
const createProxyMiddleware = require('http-proxy-middleware')
module.exports = app => {
    app.use(
        createProxyMiddleware(
            ['/api', '/socket.io'],
            {
                target: 'http://localhost:3001/',
                changeOrigin: true,
                ws: true,
            }
        )
    )
}