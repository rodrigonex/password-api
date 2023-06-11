import express from "express";
import userRoutes from "./routes/routes";

const app = express();

app.use(express.json());

app.use("/api/password/", userRoutes);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
