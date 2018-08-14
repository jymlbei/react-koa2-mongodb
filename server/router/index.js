const Controller = require('../controller/index.js')
const router = require('koa-router')({
    prefix:'/api'
});
// console.log(Controller);
router.post('/login', Controller.login)  //注意是在controller编写的hello函数
router.post('/register', Controller.register)
router.get('/list', Controller.list)
// router.get('/login', async (ctx, next) => {
//     ctx.response.body = {err: 1,msg: 'invalid request'}
//     console.log(ctx);
// })

// router.use('/',router.routes(),router.allowedMethods());

module.exports = router
