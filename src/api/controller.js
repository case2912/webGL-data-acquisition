import koa from "koa";
const app = new koa();
app.use(ctx => {
  ctx.body = 'Hello Koa';
});
app.listen(3000);
