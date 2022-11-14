import { Application, Context } from "https://deno.land/x/abc@v1.3.3/mod.ts";
import User from "./interfaces/user.ts";

// Using abc for API routes

const app = new Application();

const PORT = 8080;

async function createUser(ctx: Context) {
  // Body of request
  const user = await ctx.body;
  // Insert DB POST here

  return ctx.json({ user, message: "User created" }, 200);
}

app.post("/user", createUser);

async function getUsers(ctx: Context) {
  // Params inside request url
  const { id } = ctx.params

  // Reading files with Deno
  const users: User[] = JSON.parse(await Deno.readTextFile('./users.json'))

  // Params are always string formatted as it is extracted from an url
  const userId = parseInt(id)

  const user = users.find((u) => u.id === userId)

  if (user) {
    return ctx.json({ user, message: 'Success' }, 200)
  } else {
    return ctx.json({ message: 'User not found' }, 404)
  }
}

app.get("/users/:id", getUsers);

function getUser(ctx: Context) {
  const { id } = ctx.params;

  // Insert DB search here
  const body = JSON.stringify({ id, message: "User found" });

  return ctx.json(body, 200);
}

app.get("/user/:id", getUser);

app.start({ port: PORT });
