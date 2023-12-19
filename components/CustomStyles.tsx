import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import {ReactNode} from 'react';
import CssBaseline from '@mui/material/CssBaseline';

interface Props {
    children?: ReactNode
}

// Augment the palette to include an ochre color
declare module '@mui/material/styles' {
    interface Palette {
      buttonColor: Palette['primary'];
    }
  
    interface PaletteOptions {
      buttonColor?: PaletteOptions['primary'];
    }
  }
  
  // Update the Button's color options to include an ochre option
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      buttonColor: true;
    }
  }

const theme = responsiveFontSizes(createTheme({
    palette: {
        background: {
            default: 'transparent',
        },
        text: {
            primary: '#FFFFFF',
        },
        primary: { main: '#393d3a' },
        secondary: { main: '#3f5843' },
        buttonColor: { main: '#FFFFFF'},
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    }
}));

export default function CustomStyles ( { children }: Props ) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}