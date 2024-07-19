import { error } from "console";
import { app } from "./app";
import { env } from "./env";

app
  .listen({
    host: "0.0.0.0",
    port: env.PORT,
  })
  .then(() =>
    console.log(`Server started on port #${env.PORT} in ${env.NODE_ENV}`)
  )
  .catch(() => {
    console.error(`Error starting server on port ${env.PORT}, ${error}`);
  });
