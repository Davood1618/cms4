const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const createPostRoute = require("./routes/post/create");
const readPostRoute = require("./routes/post/read");
const updatePostRoute = require("./routes/post/update");
const deletePostRoute = require("./routes/post/delete");

const createCommentRoute = require("./routes/comment/create");
const readCommentRoute = require("./routes/comment/read");
const updateCommentRoute = require("./routes/comment/update");
const deleteCommentRoute = require("./routes/comment/delete");

const createProductRoute = require("./routes/product/create");
const readProductRoute = require("./routes/product/read");
const updateProductRoute = require("./routes/product/update");
const deleteProductRoute = require("./routes/product/delete");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  "/posts/",
  createPostRoute,
  readPostRoute,
  updatePostRoute,
  deletePostRoute
);

app.use(
  "/comment/",
  createCommentRoute,
  readCommentRoute,
  updateCommentRoute,
  deleteCommentRoute,
);

app.use(
  "/products/",
  createProductRoute,
  readProductRoute,
  updateProductRoute,
  deleteProductRoute
);

// not found
app.all("*", (req, res, next) => {
  const error = new Error("not found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({ error: err.message });
    return;
  }

  res.status(500).json({ error: "something went wrong" });
});

mongoose
  .connect(
    "mongodb+srv://davoodmoradi1618:kirekhar@cluster0.gzanoko.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(8000, () => {
      console.log("Server is up and running on port 8000");
    });
  })
  .catch((err) => {
    throw new Error("Database connection failed!");
  });
