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

router.get('/test', function(ctx, next) {
    ctx.body = 'Hello World!';
});
app.listen(3000);
app
    .use(router.routes())
    .use(router.allowedMethods())
console.log('listening on port 3000');
