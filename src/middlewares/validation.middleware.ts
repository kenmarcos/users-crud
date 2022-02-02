import * as yup from "yup";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: yup.AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    try {
      const validatedData = await schema.validate(body, {
        abortEarly: false,
        stripUnknown: true,
      });
      req.validatedData = validatedData;
      return next();
    } catch (e: any) {
      res.status(422).json({ message: e.errors });
    }
  };
