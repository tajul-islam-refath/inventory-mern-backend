const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

const ExpenseTypesController = require("../controllers/Expenses/ExpenseTypesController");

router.post(
  "/CreateExpenseTypes",
  AuthVerifyMiddleware,
  ExpenseTypesController.CreateExpenseTypes
);
router.post(
  "/UpdateExpenseTypes/:id",
  AuthVerifyMiddleware,
  ExpenseTypesController.UpdateExpenseTypes
);
router.get(
  "/ExpenseTypesList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  ExpenseTypesController.ExpenseTypesList
);
router.get(
  "/ExpenseTypesDropDown",
  AuthVerifyMiddleware,
  ExpenseTypesController.ExpenseTypesDropDown
);
router.get(
  "/ExpenseTypesDetailsByID/:id",
  AuthVerifyMiddleware,
  ExpenseTypesController.ExpenseTypesDetailsByID
);

module.exports = router;
