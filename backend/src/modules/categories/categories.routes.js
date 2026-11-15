import { Router } from "express";

import { protect } from "../../middlewares/protect.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

import {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} from "./categories.controller.js";

import {
  createCategorySchema,
  updateCategorySchema,
} from "./catgories.validaton.js";

const router = Router();

router.post(
  "/",
  protect,
  validate(createCategorySchema),
  asyncHandler(createCategory)
);

router.get("/", asyncHandler(getCategories));

router.get("/:id", asyncHandler(getCategory));

router.patch(
  "/:id",
  protect,
  validate(updateCategorySchema),
  asyncHandler(updateCategory)
);

router.delete("/:id", protect, asyncHandler(deleteCategory));

export default router;