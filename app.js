import express from "express";
import morgan from "morgan";
import routesMdw from "./middlewares/routes.mdw.js";
import dbConnect from "./database/Connection.js";
import viewsMdw from "./middlewares/views.mdw.js";
import localMdw from "./middlewares/local.mdw.js";

dbConnect();

const app = express();
const port = 3000;
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));
viewsMdw(app);
app.use("/public", express.static("public"));

localMdw(app);
routesMdw(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
