import { Request, Response } from "express";
import secureRandomPassword from "secure-random-password";

interface ValidPassword {
  valid: boolean;
  error: string;
}

class PasswordController {
  generatePassword(req: Request, res: Response) {
    const password = secureRandomPassword.randomPassword({
      length: 12,
      characters:
        secureRandomPassword.lower +
        secureRandomPassword.upper +
        secureRandomPassword.digits +
        secureRandomPassword.symbols,
    });
    return res
      .status(201)
      .json({ message: "Password successfully generated", password });
  }

  validatePassword(req: Request, res: Response) {
    const body = req.body;
    const length = 12;

    // Check if a password was entered in the body
    if (body.password == undefined) {
      return res.status(400).json({ error: "New password required" });
    }

    // Check password length
    if (body.password.length < length) {
      return res
        .status(400)
        .json({ error: "The password must be at least 12 characters long." });
    }

    // Validate if the password has lowercase, uppercase, numbers and symbols
    const validation: ValidPassword = validPassword(body.password);

    if (validation.valid == false) {
      return res.status(400).json({ message: validation.error });
    }

    return res.status(200).json({ message: "valid password" });
  }
}

function validPassword(str: string): ValidPassword {
  const validations = ["symbol", "lowerCase", "upperCase", "numeric"];
  let result: ValidPassword = { valid: true, error: "" };

  for (let valid of validations) {
    const check = checkPassword(str, valid);
    if (check == false) {
      result = {
        valid: false,
        error: `Must have at least one ${valid} character.`,
      };
    }
  }
  return result;
}

function checkPassword(str: string, caseType: string): boolean {
  switch (caseType) {
    case "lowerCase":
      return /[a-z]/.test(str);
    case "upperCase":
      return /[A-Z]/.test(str);
    case "symbol":
      return /[!@#$%^&*()]/.test(str);
    case "numeric":
      return /\d/.test(str);
    default:
      return false;
  }
}

export default PasswordController;
