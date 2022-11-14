# Experiment Deno API

Deno is kinda hot right now so I had to get a taste of it.
This is my take on Deno. I'll document in this README the things that I find relevant. 

# Deno

<img align="right" src="https://deno.land/logo.svg?__frsh_c=3jp2spaxhx80" height="150px">

Deno is a _simple_, _modern_ and _secure_ runtime for **JavaScript** and
**TypeScript** that uses V8 and is built in Rust.

### Features

- Secure by default. No file, network, or environment access, unless explicitly
  enabled.
- Supports TypeScript out of the box.
- Ships only a single executable file.
- Built-in utilities like a dependency inspector (deno info) and a code
  formatter (deno fmt).
- Set of reviewed standard modules that are guaranteed to work with
  [Deno](https://deno.land/std/).

### Installation

Visit [Deno's website](https://deno.land/#installation)

---

### Testing the API

Easily test the API by importing `experiment-deno-api.json` into Postman.

---

### Findings

**Deno with VSCode**

As everything is in TypeScript with Deno including imports, I had errors and warning when importing from a TS file according to my pre-existant Linter.
I had to add a `settings.json` file inside the `.vscode` folder I created with the content below:

```json
{
  "deno.enable": true
}
```