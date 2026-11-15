/**
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const createBlogContainerSx = {
  display: "flex",
  flex: 1,
  minHeight: 0,
  overflow: "visible",
};

/**
 * Main scrolling area
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const createBlogMainSx = {
  flex: 1,
  minWidth: 0,
  minHeight: 0,
  py: 5,
  px: 3,
  overflow: "auto",
  position: "relative",
  bgcolor: "#f1f3f5",
};

/**
 * Blog canvas and overlay positioning container
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const createBlogCanvasSx = {
  position: "relative",
  width: "100%",
  minHeight: "100%",
  overflow: "visible",
  bgcolor: "#ffffff",
  borderRadius: 1,
  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.08)",
};


/**
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const blogTreeSidebarSx = {
  width: 250,
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  borderRight: 1,
  borderColor: "divider",
  bgcolor: "background.paper",
};

/**
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const blogTreeHeaderSx = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  px: 2,
  py: 2,
  borderBottom: 1,
  borderColor: "divider",
};

/**
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const blogTreeContentSx = {
  flex: 1,
  overflow: "auto",
  p: 1,
};


/**
 * @param {boolean} sidebarOpen
 * @returns {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const editorSettingsSidebarSx = (sidebarOpen) => ({
  width: sidebarOpen ? 300 : 0,
  flexShrink: 0,
  borderLeft: sidebarOpen ? 1 : 0,
  borderColor: "divider",
  overflow: "visible",
  transition: "width 200ms ease",
  position:"relative"
});

/**
 * @type {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const editorSettingsContentSx = {
  width: 320,
  height: "100%",
  overflow: "auto",
};

/**
 * @param {boolean} sidebarOpen
 * @returns {import("@mui/material").SxProps<import("@mui/material").Theme>}
 */
export const editorSidebarToggleSx = (sidebarOpen) => ({
  position: "absolute",
  top: "calc(50% - 24px)",
  left: -50,
  transform: "translateY(-50%)",
  zIndex: 20,
  width: 48,
  height: 48,
  bgcolor: "background.paper",
  border: 1,
  borderColor: "divider",
  borderRadius: "6px 0 0 6px",
  boxShadow: 2,
  transition: "right 200ms ease",
  "&:hover": {
    bgcolor: "action.hover",
  },
});