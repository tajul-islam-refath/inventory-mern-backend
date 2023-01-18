const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

const CategoriesController = require("../controllers/Categories/CategoriesController");

router.post(
  "/Category/CreateCategories",
  AuthVerifyMiddleware,
  CategoriesController.CreateCategories
);
router.post(
  "/Category/UpdateCategories/:id",
  AuthVerifyMiddleware,
  CategoriesController.UpdateCategories
);
router.get(
  "/Category/CategoriesList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  CategoriesController.CategoriesList
);
router.get(
  "/Category/CategoriesDropDown",
  AuthVerifyMiddleware,
  CategoriesController.CategoriesDropDown
);

router.get(
  "/Category/CategoriesDetailsByID/:id",
  AuthVerifyMiddleware,
  CategoriesController.CategoriesDetailsByID
);

router.get(
  "/Category/DeleteCategories/:id",
  AuthVerifyMiddleware,
  CategoriesController.DeleteCategories
);

module.exports = router;
