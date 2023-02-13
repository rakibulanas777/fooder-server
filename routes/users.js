const express = require("express");
const { getUsers, getUser, register } = require("../controllers/user");
const router = express.Router();

router.post("/", register);
router.get("/", getUsers);
router.get("/:email", getUser);

module.exports = router;
