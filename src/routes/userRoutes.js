const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const UsersController = require("../controllers/Users/UsersController");

router.post("/Registration", UsersController.Registration);
router.post("/Login", UsersController.Login);
router.post(
  "/ProfileUpdate",
  AuthVerifyMiddleware,
  UsersController.ProfileUpdate
);
router.get(
  "/ProfileDetails",
  AuthVerifyMiddleware,
  UsersController.ProfileDetails
);
router.get("/RecoverVerifyEmail/:email", UsersController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp", UsersController.RecoverVerifyOTP);
router.post("/RecoverResetPass", UsersController.RecoverResetPass);

module.exports = router;
