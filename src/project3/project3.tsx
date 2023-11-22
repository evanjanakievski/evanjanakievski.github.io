import { Container, Typography, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import '../App.css'
import ReactDOM from 'react-dom/client';
import React from 'react';


const theme = responsiveFontSizes(createTheme({
palette: {
    primary: { main: '#3a3542' },
    secondary: { main: '#3D4235' },
}
}));

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Container style={{justifyContent: "center", padding: "10px", flexDirection: 'column', display: 'flex',}}>
                <Typography variant={"h1"} fontWeight={"300"} flexShrink={1} gutterBottom>
                    Project 3
                </Typography>
            </Container>
        </ThemeProvider>
    </React.StrictMode>,
)
