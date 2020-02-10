const router = require("express").Router();

const bikeRouter = require("../modules/bike/bike.routes.api");

router.use("/bikes", bikeRouter);

module.exports = router;
