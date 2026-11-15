import { NotFoundError } from "../../errors/Http.error.js";

export const getAllAuthors = async () => {
  return Author.find()
    .select("name bio avatar createdAt")
    .sort({ createdAt: -1 })
    .lean();
};

export const getAuthorById = async (id) => {
  const author = await Author.findById(id)
    .select("name bio avatar createdAt")
    .lean();

  if (!author) {
    throw new NotFoundError("Author Not Found")
  }

  return author;
};

export const updateAuthor = async (userId, data) => {
  const author = await Author.findOneAndUpdate(
    { user: userId },
    { $set: data },
    {
      new: true,
      runValidators: true,
    }
  ).select("name bio avatar");

  if (!author) {
    throw new NotFoundError("Author Not Found")
  }

  return author;
};
