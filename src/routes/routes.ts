import express, { Request, Response } from "express";
import PasswordController from "../controller/passworldController";

const router = express.Router();

router.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Api inicialization" });
});

router.get("/generate", (request: Request, response: Response) => {
  const passworldController = new PasswordController();
  return passworldController.generatePassword(request, response);
});

router.post("/validate", (request: Request, response: Response) => {
  const passworldController = new PasswordController();
  return passworldController.validatePassword(request, response);
});

export default router;
