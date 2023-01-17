const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

const SuppliersController = require("../controllers/Suppliers/SuppliersController");

router.post(
  "/Supplier/CreateSuppliers",
  AuthVerifyMiddleware,
  SuppliersController.CreateSuppliers
);
router.post(
  "/Supplier/UpdateSuppliers/:id",
  AuthVerifyMiddleware,
  SuppliersController.UpdateSuppliers
);
router.get(
  "/Supplier/SuppliersList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  SuppliersController.SuppliersList
);
router.get(
  "/Supplier/SuppliersDropDown",
  AuthVerifyMiddleware,
  SuppliersController.SuppliersDropDown
);
router.get(
  "/Supplier/SuppliersDetailsByID/:id",
  AuthVerifyMiddleware,
  SuppliersController.SuppliersDetailsByID
);

module.exports = router;
