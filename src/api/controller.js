import 'babel-polyfill';
import koa from "koa";
import RouterGenerator from "koa-router";
import bodyParser from "koa-bodyparser";
import * as db from "./db";
import * as statistics from "./statistics";
const router = RouterGenerator();
const app = new koa();
router.post('/record', async function(ctx, next) {
    ctx.response.set("Access-Control-Allow-Origin", "*");
    await next();
    ctx.response.body = null;
    db.put(ctx.request.body);
});
router.options('/record', async function(ctx, next) {
    await next();
    ctx.response.set("Access-Control-Allow-Origin", "*");
    ctx.response.set("Access-Control-Allow-Headers", "Content-Type");
});
router.get('/list',async function(ctx, next) {
    const result = await db.scan();
    ctx.response.body = result;
});
router.get('/show', async function(ctx, next) {
    const result = await db.scan();
    ctx.response.body = {
      count:statistics.extensions_count(result),
      min:statistics.parameters_min(result),
      max:statistics.parameters_max(result)
    };
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
app
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());
