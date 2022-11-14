import {
    create,
    Payload,
    getNumericDate,
    Header,
  } from 'https://deno.land/x/djwt@v2.4/mod.ts'
  import { config } from 'https://deno.land/x/dotenv@v3.2.0/mod.ts'
  
  const { API_KEY } = config()

  const encoder = new TextEncoder()
const keyBuf = encoder.encode(API_KEY)

const key = await crypto.subtle.importKey(
  'raw',
  keyBuf,
  { name: 'HMAC', hash: 'SHA-256' },
  true,
  ['sign', 'verify']
)

const payload: Payload = {
  iss: 'deno-demo',
  exp: getNumericDate(300), // expires in 5 min.
}

const header: Header = {
  alg: 'HS256',
  typ: 'JWT',
}

export const generateToken = async () => {
  const token = await create(header, payload, key)

  return token;
}