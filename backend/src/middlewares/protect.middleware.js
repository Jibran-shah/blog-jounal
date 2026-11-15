import { UnauthorizedError, ForbiddenError } from "../errors/index.js";
import { verifyAccessToken } from "../utils/jwt.js";

export const protect = (...roles) => {
  return (req, _, next) => {
    try {
      const token =
        req.cookies?.["jwt-access-token"] ||
        req.headers?.authorization?.split(" ")[1];

      if (!token) {
        return next(new UnauthorizedError("Access token missing"));
      }

      const payload = verifyAccessToken(token);

      req.user = {
        id: payload.id,
        role: payload.role
      };

      console.log(roles, req.user.role)
      if(!roles.includes(req.user.role))
        new UnauthorizedError("Action not allowed")

      console.log("inside protect",req.user)

      next();
    } catch (err) {
      next(err);
    }
  };
};