const logger = require('koa-logger')
const Koa = require('koa')
const router = require('./router/index.js');
const koaBody = require('koa-body')
const app = new Koa();
const middleWare = require('./middleware/index.js');

// middleWare(app)
app.use(logger());
/**
* 错误捕捉中间件
*/
app.use(async (ctx, next) => {
    try {
        ctx.error = (code, message) => {
            // if (typeof code === 'string') {
            //     message = message;
            //     code = 500;
            // }
            ctx.throw(code || 500, message || '服务器错误');
        };
        await next();
    } catch (e) {
        let code = e.status || 500;
        let message = e.message || '服务器错误';
        ctx.response.body = {
            code,
            message
        };
    }
});
app.use(koaBody());
app.use(router.routes(), router.allowedMethods())
app.use(middleWare);


// router(app)
app.listen(1745, () => {
    console.log('server is running at http://localhost:1745')
})
