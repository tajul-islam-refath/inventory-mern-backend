const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

const SuppliersController = require("../controllers/Suppliers/SuppliersController");

router.post(
  "/CreateSuppliers",
  AuthVerifyMiddleware,
  SuppliersController.CreateSuppliers
);
router.post(
  "/UpdateSuppliers/:id",
  AuthVerifyMiddleware,
  SuppliersController.UpdateSuppliers
);
router.get(
  "/SuppliersList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  SuppliersController.SuppliersList
);
router.get(
  "/SuppliersDropDown",
  AuthVerifyMiddleware,
  SuppliersController.SuppliersDropDown
);
router.get(
  "/SuppliersDetailsByID/:id",
  AuthVerifyMiddleware,
  SuppliersController.SuppliersDetailsByID
);

module.exports = router;
