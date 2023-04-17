import { NextFunction, Response, Request, RequestHandler } from "express";
import { IToken } from "../models/token.js";
import tokenServices from "../services/tokenService.js";
import dotenv from "dotenv";
import ApiError from "../error/ApiError.js";
import { RequestUser } from "../models/user.js";
dotenv.config();
export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === "OPTIONS") {
    next();
  }
  const token = (req.headers?.authorization || "").replace(/Bearer\s?/, "");
  if (token) {
    try {
      const data = tokenServices.validateToken(token) as IToken;
      const typedReq = req as RequestUser;
      typedReq.user = data;
      next();
    } catch (error) {
      next(ApiError.forbidden("Нет доступа"));
    }
  } else {
    next(ApiError.forbidden("Нет доступа"));
  }
};
