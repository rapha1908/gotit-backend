import { app } from "./app";
import { env } from "./env";

const port = env.PORT;
// Start the server
app
  .listen({
    port,
    host: "0.0.0.0",
  })
  //when the server is successfully started, log the URL to the console
  .then(() => {
    console.log(`Server is running on http://localhost:${port}`);
  });
