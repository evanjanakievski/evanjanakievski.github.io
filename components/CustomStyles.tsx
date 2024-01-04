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
            default: 'e9e9da',
        },
        text: {
            primary: '#000000',
        },
        primary: { main: '#000000' },
        secondary: { main: '#4e624d' },
        buttonColor: { main: '#000000'},
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