import 'babel-polyfill';
import koa from "koa";
import RouterGenerator from "koa-router";
const router = RouterGenerator();
const app = new koa();

// async function checkWhatKoaDoing(ctx,next)
// {
//   console.log(ctx.req.originalUrl);
//   if(ctx.req.originalUrl !== "/aaa"){
//    ctx.body = "Rejected!!";
//       return;
//  }
//    await next();
//    console.log(ctx);
// }

async function corsAccept(ctx,next){
  await next();
  ctx.response.set("Access-Control-Allow-Origin","*");
  ctx.response.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  ctx.response.set('Access-Control-Allow-Headers', 'Content-Type');
}

router.post('/test', function(ctx, next) {
    ctx.body = 'Hello World!';
    console.log(ctx);
});
app.listen(3000);
app
    .use(corsAccept)
    .use(router.routes())
    .use(router.allowedMethods());
console.log('listening on port 3000');
