import { Hono } from "hono";

export interface Bindings {}

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => c.json({ message: "Hello World" }));

// // CORS Middleware
// app.use(
//   "*",
//   cors({
//     origin: "http://localhost:3000",
//     allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
//     allowMethods: ["POST", "GET", "OPTIONS"],
//     exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
//     maxAge: 600,
//     credentials: true,
//   })
// );

export default {
  port: 8080,
  fetch: app.fetch,
};
