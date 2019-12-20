const sequelize = require("./node_modules/sequelize");

var con = new sequelize("app", "postgres", "Joymaaloknath123", {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

const Person = con.define("person", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true
  },
  firstname: {
    type: sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: sequelize.STRING,
    allowNull: false
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

const Post = con.define("post", {
  title: { type: sequelize.STRING },
  content: { type: sequelize.STRING },
  personid: { type: sequelize.INTEGER, foreignKey: true }
});

const Parent = con.define("parent", {
  father: { type: sequelize.STRING },
  mother: { type: sequelize.STRING },
  personid: { type: sequelize.INTEGER }
});

//con.sync({ force: true });

module.exports = con;
