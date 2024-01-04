import { Container, Typography, Button, Stack } from '@mui/material'
import ProjectCard from '../../components/projectCard.tsx'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import CustomStyles from '../../components/CustomStyles.tsx';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

export default function About() {
    return (
        <CustomStyles>
            <Container maxWidth={"md"} style={{backgroundColor: '#403e3b', justifyContent: "center"}}>
                <Container style={{justifyContent: "center", padding: "10px", flexDirection: 'column', display: 'flex'}}>
                    <Typography variant={"h1"} fontWeight={"300"} flexShrink={1} gutterBottom>
                        Evan Janakievski
                    </Typography>
                </Container>
                <Container style={{minHeight: '10vh',}}/>
                <Typography variant={"h2"} gutterBottom>About</Typography>
                <Typography align={"justify"} gutterBottom>
                    I'm Evan Janakievski, currently a student at the University of Waterloo, majoring in Mechatronics Engineering.
                    It was important to me to have an education with a strong interdisciplinary, didactic program combined 
                    with hands-on learning and it is why I selected the University of Waterloo, along with its renowned 
                    co-op program. As a first-year student, I understand that I have a lot to learn, but I believe that 
                    my curriculum and extracurriculars will prepare me to be an asset in any position I hold. 
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    Technology has always fascinated me, and I'm continually eager to broaden my knowledge in this domain.
                    Mechanical design, artificial intelligence, robotics, and automation captivate my interest. At uWaterloo
                    I joined a design team called Waterloo Aerial Robotics Group as an opportunity to apply  
                    the mechanical design strategies I have learned in class. An interest in design teams came from my participation 
                    on my high school's First Robotics Competition team, where I gained experience in many areas of the 
                    engineering process through the mechanical and electrical subteams.
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    During high school, I gained practical experience in web design while creating and managing
                    a website for a middle school Model United Nations conference hosted by my high school. Moreover, I
                    pursued a research project involving the development of an image classification model using TensorFlow
                    and a custom database.
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    While I am not focusing on school, I like to pursue personal projects to develop hands-on skills. These projects include
                    many disciplines such as: mechanical design, circuits, and programming. Developing the fundamentals for these skills
                    will allow me to be successful in any position I am placed.
                </Typography>
                <Container style={{minHeight: '12vh',}}/>
                <Container maxWidth={"md"}>
                    <Typography variant={"h2"} fontWeight={"300"} flexShrink={1} gutterBottom>
                        Featured Projects
                    </Typography>
                    <Grid container spacing={3} justifyContent={"center"}>
                        <Grid xs={8} md={4}>
                            <ProjectCard name={"Robotic Arm"} shortDesc={"Sept. 2023 - Present"} img={"/images/robotic-arm.jpg"} link={"/roboticArm/"}/>
                        </Grid>
                        <Grid xs={8} md={4}>
                            <ProjectCard name={"LEGO Prosthetic Hand"} shortDesc={"Oct. 2023 - Nov. 2023"} img={"/images/legoProsthetic/legoProsSquare.jpg"} link={"/legoProstheticHand/"}/>
                        </Grid>
                        <Grid xs={8} md={4}>
                            <ProjectCard name={"Larva Identifier"} shortDesc={"Apr. 2022 - Feb. 2023"} img={"/images/robotic-arm.jpg"} link={"/larvaIdentifier/"}/>
                        </Grid>
                    </Grid>
                </Container>
                <Container style={{minHeight: '8vh',}}/>
                <Container style={{justifyContent: "center", width: "350px"}}>
                    <Stack spacing={0.25}>
                        <Button size={'large'} startIcon={<LinkedInIcon/>} color={'buttonColor'} target={'_blank'} href={'https://linkedin.com/in/evan-janakievski'}>
                            Evan Janakievski
                        </Button>
                        <Button size={'large'} startIcon={<MailIcon/>} color={'buttonColor'} target={'_blank'} href={'mailto:evanjanakievski@gmail.com'}>
                            evanjanakievski@gmail.com
                        </Button>
                    </Stack>
                </Container>
            </Container>
        </CustomStyles>
    )
}
