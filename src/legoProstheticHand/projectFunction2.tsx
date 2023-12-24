import { Container, Typography } from '@mui/material';
import CustomStyles from '../../components/CustomStyles.tsx';
import './projectFunction2.css';
import ReactPlayer from 'react-player';

export default function Project2() {
    return (
        <CustomStyles>
            <Container maxWidth={"md"} style={{backgroundColor: '#403e3b', justifyContent: "center", minHeight: '100vh'}}>
                <Container style={{justifyContent: "center", padding: "10px"}}>
                    <Typography variant={"h1"} align={'center'} fontWeight={"300"} gutterBottom>
                        LEGO EV3 Prosthetic Hand
                    </Typography>
                </Container>
                <Container style={{minHeight: '15vh',}}/>
                <Typography variant={"h2"} gutterBottom>
                    About this project
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    This project was the final project for one of my first year courses in which we were given the LEGO 
                    electronics and were told to find a problem and create a solution. My team consisted of two members 
                    and we wanted to build a prosthetic prototype. The robot used multiple sensors and acutuators including: 
                    an ultrasonic sensor, a touch sensor, an accelerometer, and three motors. The timeline of this project 
                    was to complete it in one month. Ideation, prototyping, programming, and final construction all needed to 
                    be scheduled. The robot was contructed out of LEGO pieces along with three 3D printed parts for the handle. 
                    Programming the robot was done with RobotC.
                </Typography>
                <Container style={{padding: "5px"}}>
                    <img src={"/images/legoProsthetic/overallBuildLegoPros.jpg"} alt={"Picture of LEGO prosthetic hand"} style={{ width: '100%', maxWidth: '55vh'}}/>
                </Container>
                <Typography align={'center'} gutterBottom>
                    Final construction of the prosthetic hand. 
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    The team sought to make the design lightweight, compact, and easy to operate for a potential user, so 
                    the design of the robot went through several iterations before completion. The first concepts for the 
                    design included, notably, five motorized and flexible fingers, as well as a wrist that would have the 
                    ability to rotate. These aspects were not possible to build given time and materials and would have 
                    also made the robot too heavy and bulky for general use, so the design was reduced to having only 
                    three fingers and giving the role of rotation to the user's arm. The team had also initially planned 
                    to secure the robot to the wearer’s forearm, but this would have been difficult to do safely while 
                    also keeping the robot from shifting its position during operation, so a handle was attached instead 
                    so that it can be held.
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    The working final product used an ultrasonic sensor to detect the distance of an object from the palm 
                    of the robot’s hand, which would trigger the fingers to open if that object was in close proximity. 
                    The palm of the hand was a large plate that, when pushed, would activate a touch sensor that was used 
                    to close the fingers around any object that pressed down on the plate. The fingers would then grip an 
                    object such that it could be lifted into the air without falling. The user would be able to request 
                    the fingers to release the object via a button press, and the robot would do so if an accelerometer 
                    sensor, which was placed on the hand, detected minimal movement of the robot as a whole. The robot 
                    was also able to be switched to a mode of manual control, where the fingers could be opened and 
                    closed via separate button presses. The robot was also programmed to gesture a type of wave when 
                    a specific button was pressed. Two shutdown procedures were also implemented, one of which was an 
                    emergency shutdown that could be activated at any time that would throw the fingers fully open; 
                    this was intended only to be activated if the robot was causing damage or harm. The other shutdown 
                    procedure would slowly close the fingers and could only be activated if the robot was not actively 
                    moving the fingers or gripping an object.
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    My partner and I split the work quite evenly. The programming of the robot was split between which 
                    functions each of us did. The construction of the robot was done by the two of us and bouncing ideas 
                    off each other to compact the design down more and more. I designed the handle using SolidWorks and 
                    printed it on one of the available Prusa printers at the school. 
                </Typography>
                <Container style={{justifyItems: 'center', padding: "10px"}}>
                    <ReactPlayer style={{ maxWidth: '60vh' }} controls={true} mute={true} url={'/images/legoProsthetic/pickUpBottlePros.mov'} />
                </Container>
                <Container style={{minHeight: '10vh',}}/>
            </Container>
        </CustomStyles>
    )
}
