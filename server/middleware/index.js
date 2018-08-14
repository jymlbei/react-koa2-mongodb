var response_formatter = async (ctx, next) => {
    //先去执行路由
    // await next();
    //如果有返回数据，将返回数据添加到data中
    if(ctx.body && ctx.body != {} && ctx.body.code){
        ctx.body = {
            code: ctx.body.code,
            message: ctx.body.message,
            data: ctx.body.data || []
        }
    }else{
        ctx.body = {
            code: 200,
            message: 'success',
            data: []
        }
    }
}

module.exports = response_formatter;
