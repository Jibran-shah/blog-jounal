


/** @type {import("@mui/material").SxProps} */
export const pageSx = {
  backgroundColor: "background.default",
};

/** @type {import("@mui/material").SxProps} */
export const heroSx = {
  minHeight: { xs: 420, md: 500 },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  px: { xs: 2, md: 4 },
  py: { xs: 7, md: 10 },
  textAlign: "center",
  backgroundColor: "primary.main",
  color: "primary.contrastText",
};

/** @type {import("@mui/material").SxProps} */
export const heroContentSx = {
  width: "100%",
  maxWidth: 800,
};

/** @type {import("@mui/material").SxProps} */
export const heroEyebrowSx = {
  color: "secondary.light",
  fontWeight: 700,
  letterSpacing: "0.14em",
};

/** @type {import("@mui/material").SxProps} */
export const heroTitleSx = {
  mt: 1,
  mb: 2,
};

/** @type {import("@mui/material").SxProps} */
export const heroDescriptionSx = {
  maxWidth: 650,
  mx: "auto",
  lineHeight: 1.8,
  opacity: 0.85,
};

/** @type {import("@mui/material").SxProps} */
export const searchContainerSx = {
  width: "100%",
  maxWidth: 600,
  mt: 4,
  mx: "auto",
};

/** @type {import("@mui/material").SxProps} */
export const searchInputSx = {
  width: "100%",
  backgroundColor: "background.paper",
  color: "text.primary",
  borderRadius: 1,
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "secondary.main",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "secondary.main",
  },
};

/** @type {import("@mui/material").SxProps} */
export const searchIconSx = {
  color: "text.secondary",
};

/** @type {import("@mui/material").SxProps} */
export const blogSectionSx = {
  px: { xs: 2, md: 4 },
  py: { xs: 6, md: 9 },
};

/** @type {import("@mui/material").SxProps} */
export const sectionHeaderSx = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: { md: "flex-end" },
  justifyContent: "space-between",
  gap: 3,
  mb: 4,
};

/** @type {import("@mui/material").SxProps} */
export const sectionEyebrowSx = {
  color: "secondary.dark",
  fontWeight: 700,
  letterSpacing: "0.14em",
};

/** @type {import("@mui/material").SxProps} */
export const sectionTitleSx = {
  mt: 1,
};

/** @type {import("@mui/material").SxProps} */
export const categoryListSx = {
  display: "flex",
  flexWrap: "wrap",
  gap: 1,
};

/** @type {import("@mui/material").SxProps} */
export const categoryButtonSx = {
  borderRadius: 1,
};

/** @type {import("@mui/material").SxProps} */
export const blogGridSx = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
  },
  gap: 3,
};