import { app } from "./app";

const port = 3000;
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
