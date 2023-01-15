import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router.get("/:abc/:iiii", (ctx) => {
  ctx.response.body = ctx;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });