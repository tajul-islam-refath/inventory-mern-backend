const express = require("express");
const router = express.Router();
const PurchasesController = require("../controllers/Purchases/PurchasesController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

router.post(
  "/CreatePurchases",
  AuthVerifyMiddleware,
  PurchasesController.CreatePurchases
);
router.get(
  "/PurchasesList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  PurchasesController.PurchasesList
);
router.get(
  "/PurchasesDelete/:id",
  AuthVerifyMiddleware,
  PurchasesController.PurchasesDelete
);

module.exports = router;
