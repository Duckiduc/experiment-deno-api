import { serve } from 'https://deno.land/std@0.136.0/http/server.ts'

function requestHandler() {
  return new Response("Hello world!")
}
  
serve(requestHandler)