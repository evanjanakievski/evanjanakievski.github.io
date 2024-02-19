import { Container, Typography } from '@mui/material'
import ProjectCard from '../../components/projectCard.tsx'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import CustomStyles from '../../components/CustomStyles.tsx';
import MockFooter from '../../components/mockFooter.tsx';

export default function About() {
    return (
        <CustomStyles>
            <Container maxWidth={"md"} style={{justifyContent: "center"}}>
                <Container style={{minHeight: '10vh',}}/>
                <Container style={{justifyContent: "center", padding: "10px", flexDirection: 'column', display: 'flex'}}>
                    <Typography variant={"h1"} fontWeight={"300"} flexShrink={1} gutterBottom>
                        Evan Janakievski
                    </Typography>
                </Container>
                <Container style={{minHeight: '10vh'}}/>
                <Typography variant={"h2"} gutterBottom>About</Typography>
                <Grid container spacing={2} alignItems={'center'} justifyContent={'center'}>
                    <Grid xs={10} md={6}>
                        <Container style={{padding: "5px", maxWidth: '1000px' , minWidth: '325px'}}>
                            <img src={"/Photos/Evan_Headshot.jpg"} alt={"My headshot"} style={{height: 'auto', width: '70%'}}/>
                        </Container>
                    </Grid>
                    <Grid xs={10} md={6}>
                        <Typography align={"left"} gutterBottom>
                            I'm Evan Janakievski, currently a student at the University of Waterloo, majoring in Mechatronics Engineering. It 
                            was important to me to have an education with a strong interdisciplinary, didactic program combined with hands-on 
                            learning and it is why I selected the University of Waterloo, along with its renowned co-op program. As a first-year 
                            student, I understand that I have a lot to learn, but I believe that my curriculum and extracurriculars will prepare 
                            me to be an asset in any position I hold.
                        </Typography>
                        <Typography align={"left"} gutterBottom>
                            Technology has always fascinated me, and I'm continually eager to broaden my knowledge through different 
                            opportunities. Mechanical design, robotics, automation, and software captivate my interest. While I am not focusing 
                            on school, I like to pursue personal projects to develop hands-on skills in any field that draws my interest!
                        </Typography>
                        <Typography align={"left"} gutterBottom>
                            My other interests include soccer, tennis, Formula 1, scuba diving, and rock climbing! I also enoy traveling with my family, cooking, 
                            and baking. Photography is something I am slowly getting introduced to, and I love viewing beutiful landscapes.
                        </Typography>
                    </Grid>
                </Grid>
                <Container style={{minHeight: '8vh',}}/>
                <Container maxWidth={"md"}>
                    <Typography variant={"h2"} fontWeight={"300"} flexShrink={1} gutterBottom>
                        Featured Projects
                    </Typography>
                    <Grid container spacing={3} justifyContent={"center"}>
                        <Grid xs={8} md={4}>
                            <ProjectCard name={"Robotic Arm"} shortDesc={"Sept. 2023 - Present"} img={"/roboticArm/roboticArmSquare.jpg"} link={"/roboticArm/"}/>
                        </Grid>
                        <Grid xs={8} md={4}>
                            <ProjectCard name={"LEGO Prosthetic Hand"} shortDesc={"Oct. 2023 - Nov. 2023"} img={"/legoProsthetic/legoProsSquare.JPG"} link={"/legoProstheticHand/"}/>
                        </Grid>
                        <Grid xs={8} md={4}>
                            <ProjectCard name={"Larva Identifier"} shortDesc={"Apr. 2022 - Feb. 2023"} img={"/larvaIdentifier/larvaIdentifierSquare2.jpg"} link={"/larvaIdentifier/"}/>
                        </Grid>
                    </Grid>
                </Container>
                <Container style={{minHeight: '8vh',}}/>
                <Container maxWidth={"md"}>
                    <Typography variant={"h2"} fontWeight={"300"} flexShrink={1} gutterBottom>
                        My Photos!
                    </Typography>
                    <Container style={{padding: "5px", paddingBottom: "0px", maxWidth: '1000px' , minWidth: '325px'}}>
                        <img src={"/Photos/Vestrahorn.jpg"} alt={"Landscape of Vestrahorn"} style={{height: 'auto', width: '70%'}}/>
                    </Container>
                    <Typography gutterBottom>
                        Vestrahorn - Iceland
                    </Typography>
                    <Container style={{padding: "5px", paddingBottom: "0px", maxWidth: '1000px' , minWidth: '325px'}}>
                        <img src={"/Photos/Studlagil.jpg"} alt={"Landscape at Studlagil"} style={{height: 'auto', width: '70%'}}/>
                    </Container>
                    <Typography gutterBottom>
                        Stuðlagil Canyon - Iceland
                    </Typography>
                    <Container style={{padding: "5px", paddingBottom: "0px", maxWidth: '1000px' , minWidth: '325px'}}>
                        <img src={"/Photos/Stars.JPG"} alt={"Night photography"} style={{height: 'auto', width: '70%'}}/>
                    </Container>
                    <Typography gutterBottom>
                        Waimea, Hawaii
                    </Typography>
                </Container>
                <Container style={{minHeight: '8vh',}}/>
                <MockFooter/>
            </Container>
        </CustomStyles>
    )
}
