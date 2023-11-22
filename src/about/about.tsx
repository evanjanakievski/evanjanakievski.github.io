import { Container, Typography, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import '../App.css'
import ProjectCard from '../../components/projectCard.tsx'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function About() {
    const theme = responsiveFontSizes(createTheme({
        palette: {
            primary: { main: '#3a3542' },
            secondary: { main: '#3D4235' },
        }
    }));
    
    return (
        <ThemeProvider theme = { theme } >
            <Container style={{justifyContent: "center", padding: "10px", flexDirection: 'column', display: 'flex',}}>
                <Typography variant={"h1"} fontWeight={"300"} flexShrink={1} gutterBottom>
                    Evan Janakievski
                </Typography>
            </Container>
            <Container style={{minHeight: '25vh',}}/>
            <Container maxWidth={"md"}>
                <Typography variant={"h2"} gutterBottom>About</Typography>
                <Typography align={"justify"} gutterBottom>
                    I'm Evan, currently a student at the University of Waterloo, majoring in Mechatronics Engineering.
                    Technology has always fascinated me, and I'm continually eager to broaden my knowledge in this domain.
                    Mechanical design, artificial intelligence, robotics, and automation captivate my interest.
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    During my high school years, I gained practical experience in web design while creating and managing
                    a website for a middle school Model United Nations conference hosted by my high school. Moreover, I
                    pursued a research project involving the development of an image classification model using TensorFlow
                    and a custom database. Also a participant on my high school's First Robotics Competition team, I gained
                    experience in many areas of the engineering process through the mechanical and electrical subteams.
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    Now in University, I like to pursue personal projects to develop hands-on skills. These projects include
                    many disciplines including mechanical design, circuits, and programming. Developing the fundamentals for these skills
                    will allow me to be successful in any position I am placed.
                </Typography>
            </Container>
            <Container style={{minHeight: '12vh',}}/>
            <Container maxWidth={"md"}>
                <Typography variant={"h2"} fontWeight={"300"} flexShrink={1} gutterBottom>
                    Projects
                </Typography>
                <Grid container spacing={3} justifyContent={"center"}>
                <Grid xs={8} md={4}>
                    <ProjectCard name={"Robotic Arm"} shortDesc={"built and printed an arm"} img={"/images/robotic-arm.jpg"}/>
                </Grid>
                <Grid xs={8} md={4}>
                    <ProjectCard name={"Robotic Arm"} shortDesc={"built and printed an arm"} img={"/images/robotic-arm.jpg"}/>
                </Grid>
                <Grid xs={8} md={4}>
                    <ProjectCard name={"Robotic Arm"} shortDesc={"built and printed an arm"} img={"/images/robotic-arm.jpg"}/>
                </Grid>
                </Grid>
            </Container>
            <h1>Vite + React</h1>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </ThemeProvider>
    )
}
