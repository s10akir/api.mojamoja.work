import express from "express";
import path from "path";
import apiRouter from "./api";

const app: express.Express = express();

// Allow CORS
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", apiRouter);
app.use(express.static(path.join(__dirname, "assets")));

const port: number = Number(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
