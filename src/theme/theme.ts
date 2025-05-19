import { createTheme, ThemeOptions } from '@mui/material/styles';
import { alpha } from '@mui/material';

// Extend the Material-UI theme to include our custom colors
declare module '@mui/material/styles' {
  interface Palette {
    bionic: Palette['primary'];
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    bionic?: PaletteOptions['primary'];
    accent?: PaletteOptions['primary'];
  }
  interface Theme {
    customPalette: {
      yomiHighlight: string;
      platinumGray: string;
      midnightTech: string;
      gradientPrimary: string;
      gradientHighlight: string;
      gradientCoral: string;
    };
  }
  interface ThemeOptions {
    customPalette?: {
      yomiHighlight: string;
      platinumGray: string;
      midnightTech: string;
      gradientPrimary: string;
      gradientHighlight: string;
      gradientCoral: string;
    };
  }
}

// "Tech Precision" Color Palette - 2025 Edition
// A jaw-dropping, energetic palette that positions Dr. Pedro as a technological innovator
// Primary: Electric Azure - vibrant blue that conveys precision technology
// Secondary: Deep Ultraviolet - rich purple suggesting premium service
// Accents: Bionic Mint and Laser Coral for highlighting Yomi technology
// Foundation: Clean whites with deep tech-inspired backgrounds

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0B3B60', // Deep blue - authoritative, trustworthy
      light: '#11507E',
      dark: '#092C47',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#005F59', // Medical teal - clinical, precise
      light: '#00736C',
      dark: '#004A45',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF', // Pure white - clinical clean
      paper: '#F8FAFC', // Off-white - subtle warmth
    },
    // Custom colors need to be accessed via theme.palette.bionic.main, etc.
    bionic: {
      main: '#005F59', // Clinical teal - professional, medical
      light: '#00736C',
      dark: '#004A45',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#B99454', // Subtle gold - premium, high-end
      light: '#D1AF6F',
      dark: '#9E7B42',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#1A1E35', // Midnight Tech - deep, rich text
      secondary: '#566190', // Muted tech blue
      disabled: '#A0A5BD',
    },
    success: {
      main: '#2CE69B', // Vibrant neon green
    },
    error: {
      main: '#FF3364', // Bright red
    },
    warning: {
      main: '#FFAA00', // Vibrant amber
    },
    info: {
      main: '#0095FF', // Bright info blue
    },
    divider: alpha('#1A1E35', 0.12),
  },
  // Custom palette tokens (accessed via theme.customPalette)
  customPalette: {
    yomiHighlight: '#00F5D4',
    platinumGray: '#E6E7F9',
    midnightTech: '#1A1E35',
    gradientPrimary: 'linear-gradient(120deg, #0B84FF 0%, #6C2FF2 100%)',
    gradientHighlight: 'linear-gradient(90deg, #00F5D4 0%, #2CE69B 100%)',
    gradientCoral: 'linear-gradient(90deg, #FF3D71 0%, #FF9F8E 100%)',
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '28px',
          fontWeight: 700,
          boxShadow: '0px 4px 24px rgba(11,132,255,0.18)',
          background: 'linear-gradient(90deg, #0B84FF 0%, #6C2FF2 100%)',
          color: '#FFFFFF',
          textTransform: 'none',
          letterSpacing: '0.5px',
          transition: 'all 0.3s',
          padding: '10px 24px',
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
            transition: 'transform 0.6s',
            transform: 'translateX(-100%)',
          },
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 8px 32px rgba(108,47,242,0.24)',
            '&::after': {
              transform: 'translateX(100%)',
            },
          },
        },
        containedSecondary: {
          background: 'linear-gradient(90deg, #00F5D4 0%, #2CE69B 100%)',
          color: '#1A1E35',
          boxShadow: '0px 4px 20px rgba(0,245,212,0.20)',
          '&:hover': {
            boxShadow: '0px 8px 32px rgba(44,230,155,0.25)',
          },
        },
        outlinedPrimary: {
          borderColor: '#0B84FF',
          color: '#0B84FF',
          borderWidth: '2px',
          '&:hover': {
            borderColor: '#6C2FF2',
            backgroundColor: 'rgba(108,47,242,0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0px 8px 40px rgba(26,30,53,0.06)',
          background: '#FFFFFF',
          overflow: 'hidden',
          transition: 'transform 0.3s, box-shadow 0.3s',
          border: '1px solid rgba(230,231,249,0.7)',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 16px 48px rgba(108,47,242,0.12)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          fontWeight: 600,
          fontSize: '0.8rem',
        },
        colorPrimary: {
          backgroundColor: 'rgba(11,132,255,0.08)',
          color: '#0B84FF',
          '&:hover': {
            backgroundColor: 'rgba(11,132,255,0.15)',
          },
        },
        colorSecondary: {
          backgroundColor: 'rgba(108,47,242,0.08)',
          color: '#6C2FF2',
          '&:hover': {
            backgroundColor: 'rgba(108,47,242,0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 30px rgba(26,30,53,0.06)',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    // Customizing Badge for Yomi Technology highlights
    MuiBadge: {
      styleOverrides: {
        root: {
          '& .yomi-badge': {
            background: 'linear-gradient(90deg, rgba(0,245,212,0.9) 0%, rgba(0,245,212,0.2) 100%)',
            color: '#1A1E35',
            fontWeight: 700,
            padding: '6px 14px',
            borderRadius: '20px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.85rem',
            letterSpacing: '0.5px',
            boxShadow: '0px 4px 20px rgba(0,245,212,0.25)',
            border: '1px solid rgba(0,245,212,0.4)',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Inter", "Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
