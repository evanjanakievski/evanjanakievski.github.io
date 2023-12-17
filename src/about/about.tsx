import { Container, Typography } from '@mui/material'
import ProjectCard from '../../components/projectCard.tsx'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import CustomStyles from '../../components/CustomStyles.tsx'
import FixedImage from '../../components/FixedImage.tsx'

export default function About() {
    return (
        <CustomStyles>
            <FixedImage link={'/images/blueprint-backdrop.jpg'}/>
            <Container maxWidth={"md"} style={{backgroundColor: '#403e3b', justifyContent: "center"}}>
                <Container style={{justifyContent: "center", padding: "10px", flexDirection: 'column', display: 'flex'}}>
                    <Typography variant={"h1"} fontWeight={"300"} flexShrink={1} gutterBottom>
                        Evan Janakievski
                    </Typography>
                </Container>
                <Container style={{minHeight: '10vh',}}/>
                <Typography variant={"h2"} gutterBottom>About</Typography>
                <Typography align={"justify"} gutterBottom>
                    I'm Evan, currently a student at the University of Waterloo, majoring in Mechatronics Engineering.
                    It was important to me to have an education with a strong interdisciplinary didactic program combined 
                    with hands-on learning and it is why I selected the University of Waterloo, along with its renowned 
                    co-op program. As a first-year student, I understand that I have a lot to learn, but I believe that 
                    my curriculum and extracurriculars will prepare me to be an asset in any position I hold. 
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    Technology has always fascinated me, and I'm continually eager to broaden my knowledge in this domain.
                    Mechanical design, artificial intelligence, robotics, and automation captivate my interest. At uWaterloo
                    I joined a design team called Waterloo Aerial Robotics Group as an opportunity to apply  
                    the mechanical design strategies I have learned in class. An interest in design teams came from my participation 
                    on my high school's First Robotics Competition team, I gained experience in many areas of the 
                    engineering process through the mechanical and electrical subteams helping fuel my interest in engineering.
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    During high school, I gained practical experience in web design while creating and managing
                    a website for a middle school Model United Nations conference hosted by my high school. Moreover, I
                    pursued a research project involving the development of an image classification model using TensorFlow
                    and a custom database.
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    Currently, I like to pursue personal projects to develop hands-on skills. These projects include
                    many disciplines including mechanical design, circuits, and programming. Developing the fundamentals for these skills
                    will allow me to be successful in any position I am placed.
                </Typography>
                <Container style={{minHeight: '12vh',}}/>
                <Container>

                </Container>
                <Container maxWidth={"md"}>
                    <Typography variant={"h2"} fontWeight={"300"} flexShrink={1} gutterBottom>
                        Featured Projects
                    </Typography>
                    <Grid container spacing={3} justifyContent={"center"}>
                        <Grid xs={8} md={4}>
                            <ProjectCard name={"Robotic Arm"} shortDesc={"built and printed an arm"} img={"/images/robotic-arm.jpg"} link={"/project1/"}/>
                        </Grid>
                        <Grid xs={8} md={4}>
                            <ProjectCard name={"Robotic Arm"} shortDesc={"built and printed an arm"} img={"/images/robotic-arm.jpg"} link={"/project2/"}/>
                        </Grid>
                        <Grid xs={8} md={4}>
                            <ProjectCard name={"Robotic Arm"} shortDesc={"built and printed an arm"} img={"/images/robotic-arm.jpg"} link={"/project3/"}/>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </CustomStyles>
    )
}
