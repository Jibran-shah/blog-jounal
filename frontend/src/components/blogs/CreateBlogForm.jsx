import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Autocomplete,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditNoteIcon from "@mui/icons-material/EditNote"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../api/client.api";

const blogDetailsSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),

  description: z
    .string()
    .trim()
    .min(1, "Description is required")
    .max(300, "Description cannot exceed 300 characters"),

  image: z
    .custom((value) => value instanceof File, "Card image is required")
    .refine((file) => file.type.startsWith("image/"), "Please select an image file")
    .refine((file) => file.size <= 5 * 1024 * 1024, "Image must be 5 MB or smaller"),

  category: z.object({
    name: z.string().trim(),
    id: z.string().trim(),
  }),
});

const BlogDetailsForm = ({ onSubmit, isSubmitting = false }) => {

  const [imagePreview, setImagePreview] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

  const { data, isLoading, isError, error } = useQuery({
    queryKey:["categories"],
    queryFn: async () => (await apiClient.get("/categories")).data?.data
  })

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(blogDetailsSchema),
    defaultValues: {
      title: "",
      description: "",
      image: null,
      category: {
        name: "",
        id: "",
      },
    },
  });

  const image = watch("image");

  useEffect(() => {
    if (!image) {
      setImagePreview("");
      return;
    }
    const previewUrl = URL.createObjectURL(image);
    setImagePreview(previewUrl);
    return () => URL.revokeObjectURL(previewUrl);
  }, [image]);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("image", file, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
    event.target.value = "";
  };

  const handleRemoveImage = () => {
    setValue("image", null, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const categories = data?.categories

  return (
    <Box component="main" sx={blogDetailsContainerSx}>
      <Paper elevation={0} variant="outlined" sx={blogDetailsPaperSx}>
        <Stack spacing={3}>
          {/* Header */}
          <Box sx={blogDetailsHeaderSx}>
            <Box sx={blogDetailsIconSx}>
              <EditNoteIcon />
            </Box>

            <Box>
              <Typography variant="h5" fontWeight={700} color="text.primary">
                Create a new blog
              </Typography>

              <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                Add the basic details before bringing your blog to life.
              </Typography>
            </Box>
          </Box>

          {/* Blog details form */}
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2.5}>
              <TextField
                label="Blog title"
                placeholder="Give your blog a meaningful title"
                fullWidth
                {...register("title")}
                error={!!errors.title}
                helperText={errors.title?.message}
                sx={blogDetailsFieldSx}
              />

              <TextField
                label="Description"
                placeholder="Briefly describe what your blog is about..."
                fullWidth
                multiline
                minRows={3}
                maxRows={6}
                {...register("description")}
                error={!!errors.description}
                helperText={
                  errors.description?.message ||
                  `${watch("description")?.length || 0}/300 characters`
                }
                sx={blogDetailsFieldSx}
              />

              {
                !isLoading && 
                !isError &&
                <Autocomplete
                  freeSolo
                  options={categories ?? []}
                  loading={isLoading}
                  inputValue={categoryInput}

                  getOptionLabel={(option) =>
                    typeof option === "string" ? option : option.name
                  }

                  onInputChange={(_, value) => {
                    setCategoryInput(value);
                    setValue("category", {
                      name: value.trim(),
                      id: "",
                    }, {
                      shouldDirty: true,
                      shouldValidate: true,
                    });
                  }}

                  onChange={(_, value) => {
                    if (value && typeof value !== "string") {
                      setValue("category", {
                        name: value.name,
                        id: value._id,
                      }, {
                        shouldDirty: true,
                        shouldValidate: true,
                      });
                      setCategoryInput(value.name);
                    } else {
                      const name = value?.trim() ?? "";
                      setValue("category", {
                        name,
                        id: "",
                      }, {
                        shouldDirty: true,
                        shouldValidate: true,
                      });
                      setCategoryInput(name);
                    }
                  }}
                  
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Category"
                      placeholder="Select or create a category"
                    />
                  )}
                />              }

              {/* Featured image */}
              <Box>
                <Typography
                  variant="subtitle2"
                  fontWeight={600}
                  color="text.primary"
                  sx={{ mb: 0.5 }}
                >
                  Featured image
                </Typography>

                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block", mb: 1.5 }}
                >
                  This image will represent your blog in listings and previews.
                </Typography>

                {imagePreview ? (
                  <Box sx={blogImagePreviewContainerSx}>
                    <Box
                      component="img"
                      src={imagePreview}
                      alt="Blog featured image preview"
                      sx={blogImagePreviewSx}
                    />

                    <Button
                      type="button"
                      size="small"
                      color="error"
                      startIcon={<DeleteOutlineIcon />}
                      onClick={handleRemoveImage}
                      sx={blogImageRemoveButtonSx}
                    >
                      Remove image
                    </Button>
                  </Box>
                ) : (
                  <Button
                    component="label"
                    variant="outlined"
                    fullWidth
                    sx={blogImageUploadSx}
                  >
                    <ImageOutlinedIcon fontSize="large" />

                    <Typography variant="body2" fontWeight={600}>
                      Choose an image
                    </Typography>

                    <Typography variant="caption" color="text.secondary">
                      JPG, PNG or WebP · Maximum size 5 MB
                    </Typography>

                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleImageChange}
                    />
                  </Button>
                )}

                {errors.image && (
                  <Typography
                    variant="caption"
                    color="error"
                    sx={blogImageErrorSx}
                  >
                    {errors.image.message}
                  </Typography>
                )}
              </Box>

              {/* Actions */}
              <Box sx={blogDetailsActionsSx}>
                <Button
                  variant="outlined"
                  size="large"
                  disabled={isSubmitting}
                  sx={blogDetailsCancelButtonSx}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  endIcon={!isSubmitting && <ArrowForwardIcon />}
                  sx={blogDetailsSubmitButtonSx}
                >
                  {isSubmitting ? "Creating draft..." : "Continue to editor"}
                </Button>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

/**
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
const formFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    bgcolor: "#ffffff",
    "& fieldset": {
      borderColor: "#e5e7eb",
    },
    "&:hover fieldset": {
      borderColor: "#a5b4fc",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6366f1",
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#4f46e5",
  },
};

/**
 * Main blog details page container.
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const blogDetailsContainerSx = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  p: { xs: 2, md: 4 },
  bgcolor: "background.default",
};

/**
 * Main blog details form card.
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const blogDetailsPaperSx = {
  width: "100%",
  maxWidth: 680,
  p: { xs: 2.5, md: 4 },
  borderRadius: 1,
  bgcolor: "background.paper",
  borderColor: "divider",
};

/**
 * Blog details header layout.
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const blogDetailsHeaderSx = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: 2,
  p: 1,
};

/**
 * Header icon container.
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const blogDetailsIconSx = {
  width: 52,
  height: 52,
  display: "grid",
  placeItems: "center",
  flexShrink: 0,
  borderRadius: 1,
  bgcolor: "action.hover",
  color: "primary.main",

  "& .MuiSvgIcon-root": {
    fontSize: 32,
  },
};

/**
 * Shared styles for blog title and description fields.
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const blogDetailsFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 1,
    bgcolor: "background.paper",

    "& fieldset": {
      borderColor: "divider",
    },

    "&:hover fieldset": {
      borderColor: "text.secondary",
    },

    "&.Mui-focused fieldset": {
      borderColor: "primary.main",
    },
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "primary.main",
  },
};

/**
 * Featured image preview container.
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const blogImagePreviewContainerSx = {
  position: "relative",
  overflow: "hidden",
  border: 1,
  borderColor: "divider",
  borderRadius: 1,
  bgcolor: "background.paper",
};

/**
 * Featured image preview.
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const blogImagePreviewSx = {
  display: "block",
  width: "100%",
  aspectRatio: "16 / 9",
  objectFit: "cover",
};

/**
 * Remove featured image button.
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const blogImageRemoveButtonSx = {
  m: 1,
  textTransform: "none",
};

/**
 * Featured image upload area.
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const blogImageUploadSx = {
  minHeight: 160,
  borderStyle: "dashed",
  borderWidth: 1,
  borderColor: "divider",
  borderRadius: 1,
  bgcolor: "background.default",
  color: "text.secondary",
  display: "flex",
  flexDirection: "column",
  gap: 1,
  textTransform: "none",

  "&:hover": {
    bgcolor: "action.hover",
    borderColor: "primary.main",
    borderStyle: "dashed",
  },

  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
};

/**
 * Featured image validation error.
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const blogImageErrorSx = {
  display: "block",
  mt: 0.5,
};

/**
 * Blog form footer and action buttons layout.
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const blogDetailsActionsSx = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  pt: 2,
  mt: 1,
  borderTop: 1,
  borderColor: "divider",
  gap: 2,
};

/**
 * Cancel button.
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const blogDetailsCancelButtonSx = {
  minWidth: 120,
  borderRadius: 1,
  textTransform: "none",
};

/**
 * Continue to editor button.
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const blogDetailsSubmitButtonSx = {
  minWidth: 180,
  borderRadius: 1,
  textTransform: "none",
  fontWeight: 600,
};

export default BlogDetailsForm;