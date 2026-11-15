import { createTheme } from "@mui/material/styles";

const theme = createTheme({

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  palette: {
    mode: "light",

    primary: {
      main: "#1E3A5F",
      light: "#34577D",
      dark: "#122944",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#E5B52B",
      light: "#F2CB59",
      dark: "#B88D16",
      contrastText: "#17212B",
    },

    background: {
      default: "#F7F8FA",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#172B45",
      secondary: "#5D6B7A",
      disabled: "#9AA4AF",
    },

    divider: "#E1E6EC",

    success: {
      main: "#3F7655",
    },

    warning: {
      main: "#C18A22",
    },

    error: {
      main: "#B54747",
    },

    info: {
      main: "#39749B",
    },

    action: {
      active: "#1E3A5F",
      hover: "rgba(30, 58, 95, 0.05)",
      selected: "rgba(30, 58, 95, 0.09)",
      disabled: "rgba(30, 58, 95, 0.35)",
      disabledBackground: "rgba(30, 58, 95, 0.08)",
    },
  },

  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),

    htmlFontSize: 16,

    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
      fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
      lineHeight: 1.05,
      fontWeight: 600,
      letterSpacing: "-0.04em",
    },

    h2: {
      fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
      lineHeight: 1.08,
      fontWeight: 600,
      letterSpacing: "-0.035em",
    },

    h3: {
      fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
      lineHeight: 1.1,
      fontWeight: 600,
      letterSpacing: "-0.03em",
    },

    h4: {
      fontSize: "clamp(1.6rem, 2.5vw, 2.25rem)",
      lineHeight: 1.15,
      fontWeight: 600,
      letterSpacing: "-0.025em",
    },

    h5: {
      fontSize: "1.4rem",
      lineHeight: 1.25,
      fontWeight: 600,
      letterSpacing: "-0.015em",
    },

    h6: {
      fontSize: "1.1rem",
      lineHeight: 1.3,
      fontWeight: 600,
    },

    subtitle1: {
      fontSize: "1.05rem",
      lineHeight: 1.6,
      fontWeight: 500,
    },

    subtitle2: {
      fontSize: "0.9rem",
      lineHeight: 1.5,
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
      fontWeight: 400,
    },

    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.65,
      fontWeight: 400,
    },

    button: {
      fontSize: "0.9rem",
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0",
    },

    caption: {
      fontSize: "0.75rem",
      lineHeight: 1.5,
      fontWeight: 500,
    },

    overline: {
      fontSize: "0.7rem",
      lineHeight: 1.5,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
    },
  },

  shape: {
    borderRadius: 6,
  },

  spacing: 8,

  shadows: [
    "none",

    "0 1px 2px rgba(23, 33, 43, 0.04)",

    "0 2px 6px rgba(23, 33, 43, 0.06)",

    "0 4px 12px rgba(23, 33, 43, 0.07)",

    "0 6px 18px rgba(23, 33, 43, 0.08)",

    "0 8px 24px rgba(23, 33, 43, 0.09)",

    "0 10px 30px rgba(23, 33, 43, 0.10)",

    "0 12px 36px rgba(23, 33, 43, 0.11)",

    "0 14px 42px rgba(23, 33, 43, 0.12)",

    "0 16px 48px rgba(23, 33, 43, 0.13)",

    "0 18px 54px rgba(23, 33, 43, 0.14)",

    "0 20px 60px rgba(23, 33, 43, 0.15)",

    "0 22px 66px rgba(23, 33, 43, 0.16)",

    "0 24px 72px rgba(23, 33, 43, 0.17)",

    "0 26px 78px rgba(23, 33, 43, 0.18)",

    "0 28px 84px rgba(23, 33, 43, 0.19)",

    "0 30px 90px rgba(23, 33, 43, 0.20)",
  ],

  components: {

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F6F3ED",
          color: "#17212B",
        },

        "*": {
          boxSizing: "border-box",
        },

        "::-webkit-scrollbar": {
          width: "6px",
          height: "6px",
        },

        "::-webkit-scrollbar-track": {
          background: "transparent",
        },

        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#C7C1B7",
          borderRadius: "3px",
        },

        "::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#AFA89D",
        },

        "::selection": {
          backgroundColor: "#B08D57",
          color: "#FFFFFF",
        },

        a: {
          color: "inherit",
          textDecoration: "none",
        },
      },
    },

    MuiButton: {

      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: "9px 18px",
          minHeight: 42,
        },

        containedPrimary: {
          "&:hover": {
            backgroundColor: "#0E1C27",
          },
        },

        containedSecondary: {
          "&:hover": {
            backgroundColor: "#80663E",
          },
        },

        outlined: {
          borderColor: "#C9C3B9",

          "&:hover": {
            borderColor: "#172A3A",
            backgroundColor: "rgba(23, 42, 58, 0.04)",
          },
        },

        text: {
          "&:hover": {
            backgroundColor: "rgba(23, 42, 58, 0.05)",
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,

          "&:hover": {
            backgroundColor: "rgba(23, 42, 58, 0.07)",
          },
        },
      },
    },

    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid #E1DDD5",
        },

        rounded: {
          borderRadius: 8,
        },
      },
    },

    MuiCard: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          border: "1px solid #E1DDD5",
          borderRadius: 8,
          backgroundColor: "#FFFFFF",
          backgroundImage: "none",
        },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 24,

          "&:last-child": {
            paddingBottom: 24,
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "medium",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          backgroundColor: "#FFFFFF",

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D5D0C7",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#A9A298",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#172A3A",
            borderWidth: "1px",
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#6A716F",

          "&.Mui-focused": {
            color: "#172A3A",
          },
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#DDD8CE",
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          fontWeight: 600,
        },
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#172A3A",
          color: "#FFFFFF",
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#172A3A",
          color: "#FFFFFF",
          fontSize: "0.75rem",
          borderRadius: 4,
          padding: "6px 9px",
        },

        arrow: {
          color: "#172A3A",
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: "#80663E",
          fontWeight: 500,

          "&:hover": {
            color: "#172A3A",
          },
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,

          "&.Mui-selected": {
            backgroundColor: "rgba(23, 42, 58, 0.08)",

            "&:hover": {
              backgroundColor: "rgba(23, 42, 58, 0.12)",
            },
          },
        },
      },
    },

    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
        elevation: 0,
      },

      styleOverrides: {
        root: {
          border: "1px solid #DDD8CE",
          borderRadius: "6px !important",
          backgroundColor: "#FFFFFF",

          "&:before": {
            display: "none",
          },

          "& + &": {
            marginTop: 8,
          },
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: 56,
        },

        content: {
          margin: "16px 0",
        },
      },
    },

    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0 20px 20px",
          color: "#5E6871",
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: "#E1DDD5",
        },

        head: {
          fontWeight: 700,
          color: "#172A3A",
          backgroundColor: "#F3F0E9",
        },
      },
    },

    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          backgroundColor: "#F6F3ED",
          color: "#17212B",
          borderBottom: "1px solid #DDD8CE",
          backgroundImage: "none",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#F6F3ED",
          borderColor: "#DDD8CE",
          backgroundImage: "none",
        },
      },
    },

    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          backgroundColor: "#172A3A",
        },
      },
    },
  },
});

export default theme;