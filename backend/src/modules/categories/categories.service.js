import { Category } from "./Category.model.js";

export const createCategory = async ({
  name,
  slug,
  scope,
}) => {
  return await Category.create({
    name: name.trim(),
    slug: slug.trim().toLowerCase(),
    scope,
  });
};

export const getCategories = async (query = {}) => {
  const filter = {};
  if (query.scope)
    filter.scope = query.scope;
  return await Category.find(filter).sort({ name: 1 });
};

export const getCategoryById = async (categoryId) => {
  const category = await Category.findById(categoryId);

  if (!category) {
    const error = new Error("Category not found");
    error.statusCode = 404;
    throw error;
  }

  return category;
};

export const updateCategory = async (
  categoryId,
  { name, slug }
) => {

  const category = await Category.findByIdAndUpdate(
    categoryId,
    {
      ...(name !== undefined && { name: name.trim() }),
      ...(slug !== undefined && { slug: slug.trim().toLowerCase() }),
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!category) {
    const error = new Error("Category not found");
    error.statusCode = 404;
    throw error;
  }

  return category;
};

export const deleteCategory = async (categoryId) => {
  const category = await Category.findByIdAndDelete(categoryId);

  if (!category) {
    const error = new Error("Category not found");
    error.statusCode = 404;
    throw error;
  }

  return category;
};