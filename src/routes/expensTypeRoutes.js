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

router.get(
  "/DeleteExpenseTypes/:id",
  AuthVerifyMiddleware,
  ExpenseTypesController.DeleteExpenseTypes
);

module.exports = router;
