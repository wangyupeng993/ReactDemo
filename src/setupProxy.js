const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function (app) {
    app.use('/product', createProxyMiddleware({
        target: 'http://49.232.43.137:9006',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            '^/product':'/product'
        }
    }))
}
