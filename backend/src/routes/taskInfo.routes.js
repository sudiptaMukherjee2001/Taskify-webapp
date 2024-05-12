import { Router } from "express";
import handelTaskInformation from "../controller/taskInfo.controller.js";
import getAllCompletedTask from "../controller/completedTask.controller.js";
import handelUpdateController from "../controller/updateTask.controller.js";
import handelDeleteTask from "../controller/delete.controller.js";
import getAllTask from "../controller/allTask.controller.js";

const router = Router();

router.route("/").get(getAllTask);
router.route("/creation").post(handelTaskInformation);
router.route("/completed-task/:id").get(getAllCompletedTask);
router.route("/update/:id").put(handelUpdateController);
router.route("/delete/:id").delete(handelDeleteTask);

export default router;