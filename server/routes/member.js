const router = require("express").Router();
const memberController = require("../controllers/member");

// router.post("/login", UserController.user_login);
// router.delete("/user:id", UserController.delete_user);
router.post("/new", memberController.add_member);
router.get('/all', memberController.get_members);

module.exports = router;
