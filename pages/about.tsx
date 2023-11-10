import { Container, Box, Typography } from '@mui/material'
import { School, Engineering, Code } from '@mui/icons-material/';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 'true',
  }));

export default function About() {
    return (
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
    )
}