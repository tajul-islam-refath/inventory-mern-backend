const express = require("express");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const ReturnsController = require("../controllers/Returns/ReturnsController");
const router = express.Router();

router.post(
  "/CreateReturns",
  AuthVerifyMiddleware,
  ReturnsController.CreateReturns
);
router.get(
  "/ReturnsList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  ReturnsController.ReturnsList
);
// router.get(
//   "/ReturnDelete/:id",
//   AuthVerifyMiddleware,
//   ReturnsController.ReturnDelete
// );

module.exports = router;
