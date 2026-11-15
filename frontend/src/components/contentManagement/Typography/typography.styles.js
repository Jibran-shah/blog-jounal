/** @type {import("@mui/material").SxProps<import("@mui/material").Theme>} */
export const typographyStyles = {  
  width: "100%",
  boxSizing: "border-box",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  backgroundColor:"#6665650c",
  "& p, & h1, & h2, & h3, & h4, & h5, & h6": {
    margin: 0,
  },

  "& .tiptap": {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "100%",
    minHeight: 0,
  },

  "& .ProseMirror": {
    outline: "none",
    flex: 1,
    width: "100%",
    minHeight: "100%",
    height: "100%",
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    border: 0,
    background: "transparent",
    color: "inherit",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: "inherit",
    lineHeight: "inherit",
    letterSpacing: "inherit",
    textAlign: "inherit",
  },
}

/** @type {import("@mui/material").SxProps<import("@mui/material").Theme>} */
export const typographyContentStyles = {
  width: "100%",
  flex: 1,
  minHeight: 0,
  boxSizing: "border-box",
};

/** @type {import("@mui/material").SxProps<import("@mui/material").Theme>} */
export const typographyPreviewStyles = {
  width: "100%",
  minHeight: "1lh",
  boxSizing: "border-box",
}