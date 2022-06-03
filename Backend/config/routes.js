const express = require("express");
const router = express.Router();
const refercltr = require("../app/controllers/refercltr");

router.get("/api/referalcandidate", refercltr.list);
router.post("/api/referalcandidate", refercltr.create);

module.exports = router;
