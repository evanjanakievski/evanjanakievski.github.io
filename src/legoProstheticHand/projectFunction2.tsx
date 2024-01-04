import { Container, Typography, Button, Stack } from '@mui/material';
import CustomStyles from '../../components/CustomStyles.tsx';
import './projectFunction2.css';
import ReactPlayer from 'react-player';
import DescriptionIcon from '@mui/icons-material/Description';

export default function Project2() {
    return (
        <CustomStyles>
            <Container maxWidth={"md"} style={{backgroundColor: '#403e3b', justifyContent: "center", minHeight: '100vh'}}>
                <Container style={{justifyContent: "center", padding: "10px"}}>
                    <Typography variant={"h2"} align={'center'} fontWeight={"300"} gutterBottom>
                        LEGO EV3 Prosthetic Hand
                    </Typography>
                </Container>
                <Container style={{minHeight: '10vh',}}/>
                <Typography variant={"h5"}>
                    Skills Used
                </Typography>
                <Typography gutterBottom>
                    SolidWorks, Project Planning, Mechanical Design, ROBOTC, 3D Printing
                </Typography>
                <Typography variant={"h3"} style={{paddingTop: "25px"}} gutterBottom>
                    About this project
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    This project was the final project for one of my first year courses in which we were given the LEGO 
                    electronics and were told to find a problem and create a solution. My team consisted of four members 
                    and we wanted to build a prosthetic hand prototype. The robot used multiple sensors and acutuators including: 
                    an ultrasonic sensor, a touch sensor, an accelerometer, and three motors. The timeline of this project 
                    was to complete it in one month. Ideation, prototyping, programming, and final construction needed a timeline. 
                    The robot was contructed out of LEGO pieces along with three 3D printed parts for the handle. 
                    Programming the robot was done with RobotC.
                </Typography>
                <Container style={{padding: "5px", maxWidth: '400', minWidth: '200'}}>
                    <img src={"/images/legoProsthetic/overallBuildLegoPros.jpg"} alt={"Picture of LEGO prosthetic hand"} style={{height: 'auto', width: '40%'}}/>
                </Container>
                <Typography align={'center'} gutterBottom>
                    Final construction of the prosthetic hand. 
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    I assisted with designing and building the main chassis along with another partner. Then I also wrote many 
                    of the main functions for the program, such as using the ultrasonic sensor to look for objects, closing the motors and 
                    maintaining a grip on an object, and also to sensor the press of an object on the touch sensor. The 3D printed handle 
                    was designed by myself in SolidWorks and was printed on a Prusa at the University of Waterloo out of PLA filament.
                </Typography>
                <Typography variant={"h3"} style={{paddingTop: "25px"}} gutterBottom>
                    Media
                </Typography>
                <Container style={{justifyContent: 'center', padding: "10px", display: 'flex'}}>
                    <ReactPlayer style={{ width: '60%' }} controls={true} url={'/images/legoProsthetic/pickUpBottlePros.mov'} />
                </Container>
                <Typography gutterBottom>
                    Video of the prosthetic hand picking up a water bottle using the ultrasonic sensor and touch sensor.
                </Typography>
                <Container style={{justifyContent: 'center', padding: "10px", display: 'flex'}}>
                    <ReactPlayer style={{ width: '60%' }} controls={true} url={'/images/legoProsthetic/touchSensor.mov'} />
                </Container>
                <Typography gutterBottom>
                    Video of how pressing the palm redirects the press into the touch sensor facing the back of the hand.
                </Typography>



                <Typography style={{paddingTop: "25px"}}>
                    If you are interested in learning more, click on the button below to open the written report:
                </Typography>
                <Container style={{justifyContent: "center", width: "350px"}}>
                    <Stack spacing={0.25}>
                        <Button size={'large'} startIcon={<DescriptionIcon/>} color={'buttonColor'} target={'_blank'} href={'/documents/MTEFinalProjectReport.pdf'} variant={'outlined'}>
                            LEGO Prosthetic Written Report
                        </Button>
                    </Stack>
                </Container>
                <Container style={{minHeight: '10vh',}}/>
            </Container>
        </CustomStyles>
    )
}
