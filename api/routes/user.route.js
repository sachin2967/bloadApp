import express from "express";
import {
  deleteUser,
<<<<<<< HEAD
  getUser,
=======
>>>>>>> 741367dfc230e27f63868e94abd5cab298460d97
  getUsers,
  signout,
  test,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signout);
router.get("/getusers", verifyToken, getUsers);
<<<<<<< HEAD
router.get("/:userId", getUser);
=======
>>>>>>> 741367dfc230e27f63868e94abd5cab298460d97
export default router;
