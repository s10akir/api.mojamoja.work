import { Router } from "express";
import slackRouter from "./slack";

const router = Router();

router.use("/slack", slackRouter);

export default router;
