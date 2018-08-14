const url = 'localhost:27017/koademo'; // Connection URL
const db = require('monk')(url);

const collection = db.get('login')

module.exports = {
    login: async (ctx, next) => {
        let {name,password} = ctx.request.body;
        if(name && password){
            await collection.findOne({name}).then(res => {
                if(res && (password === res.password)){
                    ctx.body = {};
                }else{
                    ctx.body = {code:400,message:"暂无该用户数据或密码出错"};
                }
            }).catch((err) => {
                ctx.body = {code:400,message:'异常报错'}
            }).then(() => db.close());
        }
        next();
    },
    register: async (ctx, next) => {
        // try {
            let {name,password} = ctx.request.body;
            if(name && password){
                // await collection.findOne({name}).then(res => {
                //     if(!res){
                //         collection.insert({name,password}).then(res => {
                //             ctx.body = {};
                //             next();
                //         }).catch((err) => {
                //             ctx.body = {code:400,message:'异常报错'}
                //         }).then(() => db.close());
                //     }else{
                //         ctx.body = {code:400,message:"账号已存在，请登录或重新注册"};
                //     }
                // })
                let res = await collection.findOne({name});
                if(!res){
                    await collection.insert({name,password}).then(res => {
                        ctx.body = {};
                        // next();
                    }).catch((err) => {
                        ctx.body = {code:400,message:'异常报错'}
                    }).then(() => db.close());
                }else{
                    ctx.body = {code:400,message:"账号已存在，请登录或重新注册"};
                }
            }else{
                ctx.throw(401);
                // ctx.body = {code:400,message:"请输入完整的用户名或密码"};
            }
        // }catch (error) {
        //     ctx.throw(500)
        // }
        next();
    },
    list: async (ctx, next) => {
        // console.log(ctx);
        ctx.body = {
            array: [1, 2, 3, 4, 5]
        }
        await next();
        // ctx.response.body = 'Hello World'
    },

}
