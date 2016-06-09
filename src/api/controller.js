import 'babel-polyfill';
import koa from "koa";
import RouterGenerator from "koa-router";
const router = RouterGenerator();
const app = new koa();

router.post('/record', function(ctx, next) {
    ctx.response.set("Access-Control-Allow-Origin", "*");
    ctx.body = 'Hello World!';
    console.log(ctx);
});
app.listen(3000);
app.use(router.routes())
    .use(router.allowedMethods());
console.log('listening on port 3000');
