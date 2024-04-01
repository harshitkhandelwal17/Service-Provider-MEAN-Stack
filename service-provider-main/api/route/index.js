const router = require("express").Router();

const providerRouter = require("./provider");

router.use("/provider", providerRouter);

module.exports = router;
