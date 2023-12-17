import { Container, Typography } from '@mui/material'
import ProjectCard from '../../components/projectCard.tsx'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import CustomStyles from '../../components/CustomStyles.tsx'
import FixedImage from '../../components/FixedImage.tsx'
import './contact.css'

export default function Contact() {
    return (
        <CustomStyles>
            <FixedImage link={'/images/blueprint-backdrop.jpg'}/>
            <Container maxWidth={"md"} style={{backgroundColor: '#403e3b', justifyContent: "center", minHeight: '100vh'}}>
                <Container style={{justifyContent: "center", padding: "10px"}}>
                    <Typography variant={"h1"} align={'center'} fontWeight={"300"} gutterBottom>
                        Contact
                    </Typography>
                    <Typography align={'justify'} gutterBottom>
                        Projects have offered me many opportunities to learn more about various areas of engineering, 
                        programming, and technology. These projects have spanned across high school and now into university. 
                        While being a member of a design team in university, I have taken on multiple projects to contribute 
                        to the overall design. Striving to learn more about a variety of topics, my goal is to challenge myself 
                        with each project I pursue.
                    </Typography>
                </Container>
                <Container maxWidth={"md"}>
                    <Grid container spacing={3} justifyContent={"center"}>
                        <Grid xs={8} md={4}>
                            <ProjectCard name={"Robotic Arm"} shortDesc={"Sept. 2023 - Present"} img={"/images/robotic-arm.jpg"} link={"/project1/"}/>
                        </Grid>
                        <Grid xs={8} md={4}>
                            <ProjectCard name={"LEGO Prosthetic Hand"} shortDesc={"Oct. 2023 - Nov. 2023"} img={"/images/robotic-arm.jpg"} link={"/project2/"}/>
                        </Grid>
                        <Grid xs={8} md={4}>
                            <ProjectCard name={"Larva Identifier"} shortDesc={"Apr. 2022 - Feb. 2023"} img={"/images/robotic-arm.jpg"} link={"/project3/"}/>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </CustomStyles>
    )
}
