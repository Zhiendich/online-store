import ApiError from "../error/ApiError.js";
import { Request, Response, NextFunction } from "express";

export default function ErrorHandler(
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: "Непредвиденная ошибка!" });
}
