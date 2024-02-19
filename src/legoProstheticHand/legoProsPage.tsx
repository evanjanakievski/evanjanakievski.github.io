import { Container, Typography, Button, Stack, List, ListItem } from '@mui/material';
import CustomStyles from '../../components/CustomStyles.tsx';
import './legoProsPage.css';
import ReactPlayer from 'react-player';
import DescriptionIcon from '@mui/icons-material/Description';
import MockFooter from '../../components/mockFooter.tsx';

export default function LegoProsPage() {
    return (
        <CustomStyles>
            <Container maxWidth={"md"} style={{justifyContent: "center", minHeight: '100vh'}}>
                <Container style={{justifyContent: "center", padding: "10px"}}>
                    <Typography variant={"h2"} align={'center'} fontWeight={"300"}>
                        LEGO EV3 Prosthetic Hand
                    </Typography>
                    <Typography variant={"h4"} gutterBottom>
                        Oct 2023 - Nov 2023
                    </Typography>
                    <Typography variant={"h6"} fontStyle={"italic"}>
                        Skills and Technologies
                    </Typography>
                    <Typography gutterBottom>
                        SolidWorks, Project Planning, Mechanical Design, ROBOTC, 3D Printing
                    </Typography>
                </Container>
                <Container style={{padding: "5px", maxWidth: '550px', minWidth: '325px'}}>
                    <img src={"/legoProsthetic/overallBuildLegoPros.JPG"} alt={"Picture of LEGO prosthetic hand"} style={{height: 'auto', width: '60%'}}/>
                </Container>
                <Typography align={'center'} gutterBottom>
                    Final construction of the prosthetic hand. 
                </Typography>
                <Typography variant={'h6'} align={'left'}>
                    Main Ideas
                </Typography>
                <List style={{ listStyleType: 'disc', paddingLeft: '30px' }} dense={true}>
                    <ListItem style={{ display: 'list-item' }}>Created an autonomous prosthetic hand prototype, requiring limited user input for control</ListItem>
                    <ListItem style={{ display: 'list-item' }}>Constructed 2 fingers and a thumb driven by 3 motors capable of holding up to 5 pounds</ListItem>
                    <ListItem style={{ display: 'list-item' }}>Programmed the hand with RobotC to pick up and release objects autonomously using 3 sensors (ultrasonic, touch, and accelerometer) and translating data into operations for the motors to execute</ListItem>
                    <ListItem style={{ display: 'list-item' }}>The 3D printed parts were designed in SolidWorks with a convex handle to make holding onto the hand more comfortable, a trade off because of the weight of the hand not allowing it to be strapped to the user’s forearm which was the original plan</ListItem>
                </List>
                <Typography align={"justify"} gutterBottom>
                    As a final project of one of my courses, we were tasked with using LEGO electronics to find and solve a problem. My team 
                    consisted of four members, and we decided to build a prosthetic hand prototype. The robot used multiple sensors and 
                    actuators including: an ultrasonic sensor, a touch sensor, an accelerometer, and three motors. The timeline of this project 
                    was to complete it in one month and we scheduled out time for prototyping, programming, and final construction. The robot 
                    was constructed out of LEGO pieces along with three 3D printed parts for the handle. Programming the robot was done with ROBOTC.
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    The robot was able to pick up items using solely the sensors. The ultrasonic would recognize if an object was close by and 
                    then open the fingers, allowing the touch sensor to be pressed which would then close the fingers and grip the object. To release 
                    the object, a button on the computer would be pressed; however, if the accelerometer measured a value over a certain limit, the 
                    object was not able to be released. A video of an object being picked up is under Media.
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    My contributions to the project included designing the construction of the robot and programming certain functions. With one 
                    of my partners, we built the main chassis out of LEGOs, simplifying it over multiple iterations. Using reversed tires to increase 
                    traction on the fingers was one of the major adjustments we made. Another significant design was how we were able to transfer 
                    the touch input on the palm to the touch sensor that was facing the back of the hand. This was done by pivoting a beam and pushing 
                    the touch sensor in. This can be seen with one of the videos under Media.
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    The handle was 3D printed and was another one of my tasks. I designed it in SolidWorks and 3D printed it on a Prusa at the University 
                    of Waterloo. It was 3 pieces and had holes to allow for LEGO to directly connect to it. The handle inside the box was convex to 
                    allow for a better grip on the hand. The bow also provided a place for the EV3 brick to connect to.
                </Typography>
                <Typography variant={"h3"} style={{paddingTop: "25px"}} gutterBottom>
                    Media
                </Typography>
                <Container style={{justifyContent: 'center', padding: "10px", display: 'flex'}}>
                    <div className={"player-wrapper-horizontal"}>
                        <ReactPlayer width={"100%"} height={"100%"} controls={true} url={"/legoProsthetic/pickUpBottlePros.MOV"} />
                    </div> 
                </Container>
                <Typography gutterBottom>
                    Video of the prosthetic hand picking up a water bottle using the ultrasonic sensor and touch sensor.
                </Typography>
                <Container style={{justifyContent: 'center', padding: "10px", display: 'flex'}}>
                    <div className={"player-wrapper-vertical"}>
                        <ReactPlayer width={"100%"} height={"100%"} controls={true} url={'/legoProsthetic/touchSensor.MOV'} />
                    </div>
                </Container>
                <Typography gutterBottom>
                    Video of how pressing the palm redirects the press into the touch sensor facing the back of the hand.
                </Typography>
                <Typography style={{paddingTop: "25px"}} gutterBottom>
                    If you are interested in learning more, click on the button below to open the written report:
                </Typography>
                <Container style={{justifyContent: "center", width: "350px"}}>
                    <Stack spacing={0.25}>
                        <Button size={'large'} startIcon={<DescriptionIcon/>} color={'buttonColor'} target={'_blank'} href={'/MTEFinalProjectReport.pdf'} variant={'outlined'}>
                            LEGO Prosthetic Written Report
                        </Button>
                    </Stack>
                </Container>
                <Container style={{minHeight: '4vh',}}/>
                <MockFooter/>
            </Container>
        </CustomStyles>
    )
}
