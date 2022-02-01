require("dotenv").config();
const express = require("express");
const expressHandlebars = require("express-handlebars");
const session = require("express-session");
const connectSessionSequelize = require("connect-session-sequelize");
const path = require("path");

const connection = require("./config/connection");
const routes = require("./routes");
const helpers = require("./helpers");

const SequelizeStore = connectSessionSequelize(session.Store);

const PORT = process.env.PORT || 4000;

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookies: {
    maxAge: 3600 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  store: new SequelizeStore({
    db: connection,
  }),
};

const hbs = expressHandlebars.create({ helpers });
const app = express();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(session(sessionOptions));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const init = async () => {
  try {
    await connection.sync({ force: false });
    console.log("[INFO]: DB connection successful");

    app.listen(PORT, () => console.log(`Navigate to http://localhost:${PORT}`));
  } catch (error) {
    console.log(`[ERROR]: DB connection failed | ${error.message}`);
  }
};

init();
