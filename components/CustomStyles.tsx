import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import {ReactNode} from 'react';
import CssBaseline from '@mui/material/CssBaseline';

interface Props {
    children?: ReactNode
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