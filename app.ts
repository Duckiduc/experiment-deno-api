import { serve } from "https://deno.land/std@0.136.0/http/server.ts";

const PORT = 8000

function getUser(path: URL): Response {
  const userId = path.searchParams.get("u")
  if (userId !== null && userId !== "") {
    // Insert DB search here
    const body = JSON.stringify({ userId, message: "User found" });
    // If user exists (assuming here it exists)
    return new Response(body, {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }
  const body = JSON.stringify({ userId, message: "No user provided" });
  // If user not provided
  return new Response(body, {
    status: 404,
    headers: {
      "content-type": "application/json",
    },
  });
}

function requestHandler(req: Request): Response {
  const body = JSON.stringify({ message: "Successfully created" });

  const { url } = req

  const newUrl = new URL(url)

  // Using simple routing
  if (newUrl.pathname === '/user' ) {
    return getUser(newUrl)
  }

  if (newUrl.pathname === '/about' ) {
    return new Response(`About ${req.url}`);
  }

  // This response is delivered on every path
  return new Response(body, {
    status: 201,
    headers: {
      "content-type": "application/json",
    },
  });

}

serve(requestHandler, { port: PORT });
