const express = require("express");
const router = express.Router();
const controlerMail = require("./../controllers/email/email.controler");

/* GET users listing. */
router.put("/", controlerMail.add);

module.exports = router;
