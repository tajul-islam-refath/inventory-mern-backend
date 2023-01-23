const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

const SummaryController = require("../controllers/Summary/SummaryController");

router.get(
  "/ExpensesSummary",
  AuthVerifyMiddleware,
  SummaryController.ExpensesSummary
);
router.get(
  "/ReturnSummary",
  AuthVerifyMiddleware,
  SummaryController.ReturnSummary
);
router.get(
  "/PurchaseSummary",
  AuthVerifyMiddleware,
  SummaryController.PurchaseSummary
);
router.get(
  "/SalesSummary",
  AuthVerifyMiddleware,
  SummaryController.SalesSummary
);

module.exports = router;
