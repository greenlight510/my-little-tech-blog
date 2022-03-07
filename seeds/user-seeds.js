const { User } = require("../models");

const userData = [
  {
    username: "Jacob",
    password: "jjacob",
  },
  {
    username: "Rick",
    password: "rricky",
  },
  {
    username: "James",
    password: "jjames",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
