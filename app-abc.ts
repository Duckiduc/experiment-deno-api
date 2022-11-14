import { Application, Context } from "https://deno.land/x/abc@v1.3.3/mod.ts";

// Using abc for API routes

const app = new Application();

const PORT = 8080;

async function createUser(ctx: Context) {
  const user = await ctx.body;
  // Insert DB POST here

  return ctx.json({ user, message: "User created" }, 200);
}

app.post("/user", createUser);

function getUser(ctx: Context) {
  const { id } = ctx.params;

  // Insert DB search here
  const body = JSON.stringify({ id, message: "User found" });

  return ctx.json(body, 200);
}

app.get("/user/:id", getUser);

app.start({ port: PORT });
