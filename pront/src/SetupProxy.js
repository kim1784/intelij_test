// // src/SetupProxy.js
// const createProxyMiddleware = require('http-proxy-middleware')
// module.exports = app => {
//     app.use(
//         createProxyMiddleware(
//             ['/api', '/socket.io'],
//             {
//                 target: 'http://localhost:8085',
//                 changeOrigin: true,
//                 ws: true,
//             }
//         )
//     )
// }