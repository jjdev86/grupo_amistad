const express = require("express");
const app = express();
const morgan = require("morgan");
// const bodyParser = require("body-parser");
const cors = require("cors");

const path = require('path');

const userRoutes = require("./routes/user");
const reportRoutes = require("./routes/report");
const grouptRoutes = require('./routes/group');
const memberRoutes = require('./routes/member');

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(path.join(__dirname + "/../client/dist")));

app.use("/user", userRoutes);
app.use('/report', reportRoutes);
app.use('/group', grouptRoutes);
app.use('/member', memberRoutes);

app.use((req, res, next) => {
  const error = new Error("Route Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

const port = process.env.PORT || 3000;


app.listen(port, () => console.log("listening on ", port));


