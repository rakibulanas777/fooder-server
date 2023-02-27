const express = require("express");
const { getUsers, login, register } = require("../controllers/user");
const router = express.Router();

router.post("/", register);
router.get("/", getUsers);
router.post("/login", login);

module.exports = router;
