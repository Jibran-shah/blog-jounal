
import { Box, Link, Typography } from "@mui/material";

const NAV_LINKS = [
  { label: "Explore Blogs", href: "/blogs" },
  { label: "Authors", href: "/authors" },
];


const Navbar = () => {
  return (
    <Box component="nav" sx={navbarSx}>
      {/* Brand */}
      <Link
        href="/"
        underline="none"
        color="inherit"
        sx={brandSx}
        aria-label="The Blog Journal home"
      >
        <Typography component="span" sx={brandTitleSx}>
          The Blog Journal
        </Typography>

        <Typography component="span" sx={brandSubtitleSx}>
          Ideas · Stories · Perspectives
        </Typography>
      </Link>

      {/* Navigation */}
      <Box component="div" sx={navigationSx}>
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            underline="none"
            sx={navLinkSx}
          >
            {label}
          </Link>
        ))}
      </Box>

      {/* Actions */}
      <Box sx={actionsSx}>
        <Link href="/login" underline="none" sx={loginSx}>
          Login
        </Link>

        <Link href="/write" underline="none" sx={writeSx}>
          Start Writing
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;




/** @type {import("@mui/material").SxProps} */
const navbarSx = {
  minHeight: 76,
  px: { xs: 2, md: 4, lg: 6 },
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 3,
  bgcolor: "background.paper",
  color: "text.primary",
  borderBottom: 1,
  borderColor: "divider",
  position: "relative",
  zIndex: 100,
};

/** @type {import("@mui/material").SxProps} */
const brandSx = {
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  lineHeight: 1,
  "&:hover": {
    color: "primary.main",
  },
};

/** @type {import("@mui/material").SxProps} */
const brandTitleSx = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: { xs: "1.25rem", md: "1.55rem" },
  fontWeight: 700,
  letterSpacing: "-0.045em",
  lineHeight: 1.15,
  whiteSpace: "nowrap",
};

/** @type {import("@mui/material").SxProps} */
const brandSubtitleSx = {
  mt: 0.5,
  fontSize: "0.58rem",
  fontWeight: 600,
  letterSpacing: "0.19em",
  textTransform: "uppercase",
  color: "text.secondary",
  whiteSpace: "nowrap",
};

/** @type {import("@mui/material").SxProps} */
const navigationSx = {
  display: { xs: "none", md: "flex" },
  alignItems: "center",
  gap: { md: 2, lg: 3 },
};

/** @type {import("@mui/material").SxProps} */
const navLinkSx = {
  position: "relative",
  py: 1,
  color: "text.secondary",
  fontSize: "0.9rem",
  fontWeight: 500,
  whiteSpace: "nowrap",
  transition: "color 150ms ease",
  "&:hover": {
    color: "primary.main",
  },
};

/** @type {import("@mui/material").SxProps} */
const actionsSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: { xs: 1.5, sm: 2.5 },
  flexShrink: 0,
};

/** @type {import("@mui/material").SxProps} */
const loginSx = {
  color: "text.primary",
  fontSize: "0.9rem",
  fontWeight: 600,
  textDecoration: "none",
  "&:hover": {
    color: "primary.main",
  },
};

/** @type {import("@mui/material").SxProps} */
const writeSx = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  px: { xs: 1.5, sm: 2.5 },
  py: 1.25,
  borderRadius: 1,
  bgcolor: "primary.main",
  color: "primary.contrastText",
  fontSize: "0.875rem",
  fontWeight: 600,
  whiteSpace: "nowrap",
  textDecoration: "none",
  transition: "background-color 150ms ease",
  "&:hover": {
    bgcolor: "primary.dark",
    color: "primary.contrastText",
  },
};