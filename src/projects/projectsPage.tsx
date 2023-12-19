import { Container, Typography, Button, Stack } from '@mui/material'
import ProjectCard from '../../components/projectCard.tsx'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import CustomStyles from '../../components/CustomStyles.tsx'
import './projectsPage.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

export default function Projects() {
    return (
        <CustomStyles>
            <Container maxWidth={"md"} style={{backgroundColor: '#403e3b', justifyContent: "center", minHeight: '100vh'}}>
                <Container style={{justifyContent: "center", padding: "10px"}}>
                    <Typography variant={"h1"} align={'center'} fontWeight={"300"} gutterBottom>
                        Projects
                    </Typography>
                    <Container style={{minHeight: '10vh',}}/>
                    <Typography align={'justify'} gutterBottom>
                        Projects have offered me many opportunities to learn more about various areas of engineering, 
                        programming, and technology. These projects have spanned across high school and now into university. 
                        These projects are both personal and for a design team I joined after coming to university. I have taken 
                        on multiple projects to contribute to the overall design. Striving to learn more about a variety of 
                        topics, my goal is to challenge myself with each project I pursue.
                    </Typography>
                </Container>
                <Container maxWidth={"md"}>
                    <Grid container spacing={3} justifyContent={"center"}>
                        <Grid xs={8} md={4}>
                            <ProjectCard name={"Robotic Arm"} shortDesc={"Sept. 2023 - Present"} img={"/images/robotic-arm.jpg"} link={"/roboticArm/"}/>
                        </Grid>
                        <Grid xs={8} md={4}>
                            <ProjectCard name={"LEGO Prosthetic Hand"} shortDesc={"Oct. 2023 - Nov. 2023"} img={"/images/robotic-arm.jpg"} link={"/legoProstheticHand/"}/>
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
