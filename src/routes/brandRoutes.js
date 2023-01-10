const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

const BrandsController = require("../controllers/Brands/BrandsController");

router.post(
  "/Brand/CreateBrand",
  AuthVerifyMiddleware,
  BrandsController.CreateBrand
);
router.post(
  "/Brand/UpdateBrand/:id",
  AuthVerifyMiddleware,
  BrandsController.UpdateBrand
);
router.get(
  "/Brand/BrandList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  BrandsController.BrandList
);
router.get(
  "/Brand/BrandDropDown",
  AuthVerifyMiddleware,
  BrandsController.BrandDropDown
);
router.get(
  "/Brand/BrandDetailsByID/:id",
  AuthVerifyMiddleware,
  BrandsController.BrandDetailsByID
);

module.exports = router;
