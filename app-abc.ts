import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";
import { createUser,readUser,writeUser,getUser } from "./controllers/users.ts";

// Using abc for API routes

const app = new Application();

const PORT = 8080;

app.post("/user", createUser);

app.get("/user/:id", getUser);

app.get("/users/:id", readUser);

app.post("/users", writeUser);

app.start({ port: PORT });
