import { Router } from "express";
import {
  getAuthor,
  getAllAuthors,
  updateAuthor,
} from "./authors.controller.js";
import { protect } from "../../middlewares/protect.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { updateAuthorSchema } from "./authors.validation.js";

const router = Router();

router.get("/", asyncHandler(getAllAuthors));
router.get("/:id", asyncHandler(getAuthor));

router.patch(
  "/me",
  protect("author"),
  validate(updateAuthorSchema, "body"),
  asyncHandler(updateAuthor)
);

export default router;
