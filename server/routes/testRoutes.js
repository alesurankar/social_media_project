import { Router } from "express";
const router = Router();

router.get("/test", (req, res) => {
  res.json({ message: "API is working!, Hello from Server" });
});

export default router;