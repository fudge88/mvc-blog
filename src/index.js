const express = require("express");
// bring session middleware into teh app
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const connection = require("./config/connection");
const { sequelize } = require("./models/blog");
const routes = require("./routes");

const PORT = process.env.PORT || 4000;

const app = express();

// session config
const sess = {
  secret: "Secret123",
  cookie: {
    maxAge: 86400,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// connect sess to app
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const init = async () => {
  try {
    await connection.sync({ force: false });

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`[ERROR]: Connection to DB failed - ${error.message}`);
  }
};

init();
