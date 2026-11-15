
import {
  Box,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Footer = () => {
  return (
    <Box component="footer" sx={footerSx}>
      <Box sx={footerMainSx}>
        {/* Introduction */}
        <Box sx={footerStatementSx}>
          <Typography variant="h3" sx={footerHeadingSx}>
            Ideas worth sharing.{" "}
            <Box component="span" sx={footerHeadingAccentSx}>
              Stories worth reading.
            </Box>
          </Typography>

          <Typography variant="body1" sx={footerDescriptionSx}>
            Discover interesting stories, explore different perspectives,
            and share your ideas with the world.
          </Typography>
        </Box>

        {/* Blogs */}
        <Box sx={footerExploreSx}>
          <Typography variant="overline" sx={footerLabelSx}>
            Blogs
          </Typography>

          <Stack spacing={1}>
            <Link href="/blogs" underline="hover" sx={footerLinkSx}>
              Explore Blogs
            </Link>
            <Link href="/categories" underline="hover" sx={footerLinkSx}>
              Categories
            </Link>
          </Stack>
        </Box>

        {/* Authors */}
        <Box sx={footerExploreSx}>
          <Typography variant="overline" sx={footerLabelSx}>
            Authors
          </Typography>

          <Stack spacing={1}>
            <Link href="/authors" underline="hover" sx={footerLinkSx}>
              Discover Authors
            </Link>
            <Link href="/write" underline="hover" sx={footerLinkSx}>
              Start Writing
            </Link>
          </Stack>
        </Box>

        {/* Support */}
        <Box sx={footerExploreSx}>
          <Typography variant="overline" sx={footerLabelSx}>
            Support
          </Typography>

          <Stack spacing={1}>
            <Link href="/contact" underline="hover" sx={footerLinkSx}>
              Contact Us
            </Link>
            <Link href="/help" underline="hover" sx={footerLinkSx}>
              Help Center
            </Link>
          </Stack>
        </Box>
      </Box>

      <Divider sx={footerDividerSx} />

      {/* Bottom section */}
      <Box sx={footerBottomSx}>
        <Box sx={footerBrandContainerSx}>
          <Typography variant="h6" sx={footerBrandSx}>
            Blog Journal
          </Typography>

          <Typography variant="caption" sx={footerCopyrightSx}>
            © {new Date().getFullYear()} BlogSpace. All rights reserved.
          </Typography>
        </Box>

        <Stack direction="row" spacing={3} sx={footerBottomLinksSx}>
          <Link href="/privacy" underline="hover" sx={footerBottomLinkSx}>
            Privacy Policy
          </Link>

          <Link href="/terms" underline="hover" sx={footerBottomLinkSx}>
            Terms of Service
          </Link>

          <Link
            href="/contact"
            underline="hover"
            sx={footerContactLinkSx}
          >
            Get in Touch
            <ArrowOutwardIcon sx={{ fontSize: 16 }} />
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

/** @type {import("@mui/material").SxProps} */
const footerSx = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
  p: { xs: 2.5, md: 5 },
  bgcolor: "primary.main",
  color: "primary.contrastText",
};

/** @type {import("@mui/material").SxProps} */
const footerMainSx = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr 1fr",
    md: "2fr 1fr 1fr 1fr",
  },
  gap: { xs: 4, md: 5 },
};

/** @type {import("@mui/material").SxProps} */
const footerStatementSx = {
  gridColumn: { xs: "1 / -1", md: "auto" },
  maxWidth: 600,
};

/** @type {import("@mui/material").SxProps} */
const footerHeadingSx = {
  fontWeight: 700,
  lineHeight: 1.2,
};

/** @type {import("@mui/material").SxProps} */
const footerHeadingAccentSx = {
  display: "inline",
  color: "secondary.light",
};

/** @type {import("@mui/material").SxProps} */
const footerDescriptionSx = {
  mt: 2,
  maxWidth: 500,
  color: "text.secondary",
  lineHeight: 1.8,
};

/** @type {import("@mui/material").SxProps} */
const footerExploreSx = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

/** @type {import("@mui/material").SxProps} */
const footerLabelSx = {
  color: "secondary.light",
  fontWeight: 700,
  letterSpacing: "0.14em",
};

/** @type {import("@mui/material").SxProps} */
const footerLinkSx = {
  width: "fit-content",
  color: "inherit",
  opacity: 0.75,
  transition: "opacity 0.2s ease",
  "&:hover": {
    opacity: 1,
  },
};

/** @type {import("@mui/material").SxProps} */
const footerDividerSx = {
  borderColor: "divider",
};

/** @type {import("@mui/material").SxProps} */
const footerBottomSx = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: { md: "center" },
  justifyContent: "space-between",
  gap: 2.5,
};

/** @type {import("@mui/material").SxProps} */
const footerBrandContainerSx = {
  display: "flex",
  flexDirection: "column",
  gap: 0.5,
};

/** @type {import("@mui/material").SxProps} */
const footerBrandSx = {
  fontWeight: 800,
  letterSpacing: "-0.03em",
};

/** @type {import("@mui/material").SxProps} */
const footerCopyrightSx = {
  color: "text.secondary",
};

/** @type {import("@mui/material").SxProps} */
const footerBottomLinksSx = {
  flexWrap: "wrap",
  rowGap: 1,
};

/** @type {import("@mui/material").SxProps} */
const footerBottomLinkSx = {
  color: "text.secondary",
  fontSize: "0.8rem",
};

/** @type {import("@mui/material").SxProps} */
const footerContactLinkSx = {
  display: "flex",
  alignItems: "center",
  gap: 0.5,
  color: "secondary.light",
  fontSize: "0.8rem",
};

export default Footer;
