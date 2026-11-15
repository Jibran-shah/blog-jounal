import * as authorService from "./authors.service.js";

export const getAllAuthors = async (req, res) => {
  const authors = await authorService.getAllAuthors();

  res.status(200).json({
    success: true,
    data: authors,
  });
};

export const getAuthor = async (req, res) => {
  const author = await authorService.getAuthorById(req.params.id);

  res.status(200).json({
    success: true,
    data: author,
  });
};

export const updateAuthor = async (req, res) => {
  const author = await authorService.updateAuthor(
    req.user.id,
    req.validated.body
  );

  res.status(200).json({
    success: true,
    message: "Author profile updated successfully",
    data: author,
  });
};
