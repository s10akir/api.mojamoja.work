import { Router } from "express";
import hondaRouter from "./honda";

const router: Router = Router();

router.use("/honda", hondaRouter);

export default router;
