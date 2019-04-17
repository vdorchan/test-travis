const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
  console.log('get est-travis');
});

app.listen(6767, function () {
  console.log('test-travis app listening at port 6767');
});