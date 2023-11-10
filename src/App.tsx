import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from '../pages/about.tsx'
import { Container, Typography, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import ProjectCard from '../components/project.tsx'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <Container style={{justifyContent: "center", padding: "10px", flexDirection: 'column', display: 'flex',}}>
        <Typography variant={"h1"} fontWeight={"300"} flexShrink={1} gutterBottom>
            Evan Janakievski
        </Typography>
      </Container>
      <Container style={{minHeight: '25vh',}}/>
      <About />
      <Container style={{minHeight: '12vh',}}/>
      <Container maxWidth={"md"}>
        <Typography variant={"h2"} fontWeight={"300"} flexShrink={1} gutterBottom>
            Projects
        </Typography>
        <Grid container spacing={1} justifyContent={"center"}>
          <Grid xs={8} md={4}>
            <ProjectCard name={"Robotic Arm"} shortDesc={"built and printed an arm"} img={"robotic-arm.jpg"}/>
          </Grid>
          <Grid xs={8} md={4}>
            <ProjectCard name={"Robotic Arm"} shortDesc={"built and printed an arm"} img={"robotic-arm.jpg"}/>
          </Grid>
          <Grid xs={8} md={4}>
            <ProjectCard name={"Robotic Arm"} shortDesc={"built and printed an arm"} img={"robotic-arm.jpg"}/>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Container>
      <h1>Vite + React</h1>
      <Container className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Container>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  )
}