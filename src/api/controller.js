import 'babel-polyfill';
import koa from "koa";
import RouterGenerator from "koa-router";
import bodyParser from "koa-bodyparser";
const router = RouterGenerator();
const app = new koa();
router.post('/record',async function(ctx, next) {
    ctx.response.set("Access-Control-Allow-Origin", "*");
    await next();
    ctx.response.body = null;
    console.log(ctx.request.body);
});

router.options('/record',async function(ctx,next)
{
  await next();
  ctx.response.set("Access-Control-Allow-Origin", "*");
  ctx.response.set("Access-Control-Allow-Headers","Content-Type");
});
app.listen(3000);
app
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());
console.log('listening on port 3000');
