import { authHandler, initAuthConfig, verifyAuth } from "@hono/auth-js";
import Google from "@auth/core/providers/google";
import { cors } from "hono/cors";
import { Hono } from "hono";

export interface Bindings {
  AUTH_SECRET: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
}

const app = new Hono<{ Bindings: Bindings }>();

// CORS Middleware
app.use(
  "*",
  cors({
    origin: "http://localhost:3000",
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
    credentials: true,
  })
);

app.get("/", (c) => c.json({ message: "Hello World" }));

app.use(
  "*",
  initAuthConfig((c) => ({
    basePath: "/api/auth",
    secret: c.env.AUTH_SECRET,
    providers: [
      Google({
        clientId: c.env.GOOGLE_CLIENT_ID || process.env.GOOGLE_CLIENT_ID,
        clientSecret:
          c.env.GOOGLE_CLIENT_SECRET || process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
  }))
);

app.use("/api/auth/*", authHandler());

app.use("/api/*", verifyAuth());

app.get("/api/protected", (c) => {
  const auth = c.get("authUser");
  console.log(auth);
  return c.json({ message: "Protected" });
});

export default {
  port: 8080,
  fetch: app.fetch,
};
