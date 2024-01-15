import { Container, Typography, List, ListItem } from '@mui/material';
import CustomStyles from '../../components/CustomStyles';
import './roboticArmPage.css';
import MockFooter from '../../components/mockFooter';
import ReactPlayer from 'react-player';

export default function roboticArmPage() {
    return (
        <CustomStyles>
            <Container maxWidth={"md"} style={{justifyContent: "center", minHeight: '100vh'}}>
                <Container style={{justifyContent: "center", padding: "10px"}}>
                    <Typography variant={"h1"} align={'center'} fontWeight={"300"}>
                        Robotic Arm
                    </Typography>
                    <Typography variant={"h4"} gutterBottom>
                        In Development
                    </Typography>
                    <Typography variant={"h6"} fontStyle={"italic"}>
                        Skills and Technologies
                    </Typography>
                    <Typography gutterBottom>
                        SolidWorks, Project Planning, Mechanical Design, Arduino, Servos, C++
                    </Typography>
                </Container>
                <Container style={{padding: "5px", maxWidth: '1000px' , minWidth: '325px'}}>
                    <img src={"/roboticArm/roboticArmCad.jpg"} alt={"Picture of the robotic arm in SolidWorks"} style={{height: 'auto', width: '70%'}}/>
                </Container>
                <Typography align={'center'} gutterBottom>
                    Assembly of robotic arm in SolidWorks.
                </Typography>
                <Typography variant={'h6'} align={'left'}>
                    Main Ideas
                </Typography>
                <List style={{ listStyleType: 'disc', paddingLeft: '30px' }} dense={true}>
                    <ListItem style={{ display: 'list-item' }}>Designed the mechanical parts of the robot with SolidWorks to be 3D printed allowing 4 degrees of freedom and assembled using M3 bolts and various screws</ListItem>
                    <ListItem style={{ display: 'list-item' }}>Wired the servo motors to an Arduino Uno using a PCA9685 PWM motor controller board powered by 5 volts and 10 amps</ListItem>
                    <ListItem style={{ display: 'list-item' }}>Programming the arm to mimic the movements of the user’s hand using a HuskyLens ‐ AI Sensor using computer vision</ListItem>
                </List>
                <Typography align={"justify"} gutterBottom>
                    This project I started in September 2023 to push myself to learn more about assemblies, electronics, and programming. My goal of 
                    the project is to build a robotic arm driven by servo motors, that will follow and reflect the movements of my hand that is tracked 
                    with a camera. Hand gestures will also tell the Arduino when to open or close the claw. My current task is programming to follow 
                    the hand movements.
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    The arm is being designed on SolidWorks, and the first version was printed out of PLA filament on a Prusa printer. This first construction 
                    is not the sturdiest but has allowed me to develop my programming skills and make tweaks to the code. A more structural arm is my next 
                    step to improve the overall quality.
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    The electronics for this project include an Arduino Uno R4, an Adafruit PCA9685 Servo-Driver, and multiple servo motors. I am also 
                    using a HUSKYLENS Machine Vision camera. This machine visions camera allows me to use the object tracking feature of the board to 
                    translate pixels into real world angles and coordinates. As my skills develop, I may attempt programming my own machine vision 
                    algorithm to track one’s hand.
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    So far, multiple challenges have emerged, and I have been working on each to improve them. The 3D printing tolerances have created 
                    issues with my methods of connecting the servos because the fit was too close. I have needed to drill the holes slightly larger or 
                    file down edges to allow the servos to fit. Learning the methods to communicate between the camera, Arduino, and driver board has had 
                    its learning curve. Error in the machine vision has also needed workarounds. 
                </Typography>
                <Container style={{padding: "5px", maxWidth: '1000px' , minWidth: '325px'}}>
                    <img src={"/roboticArm/roboticArmBuild1.jpg"} alt={"Picture of the robotic arm built"} style={{height: 'auto', width: '50%'}}/>
                </Container>
                <Typography align={'center'} gutterBottom>
                    Current assembled portion of the robot for testing. The base was constructed to hold the weight of the robot and test 3 of the 4 degrees of freedom.
                </Typography>
                <Container style={{justifyContent: 'center', padding: "10px", display: 'flex'}}>
                    <div className={"player-wrapper-vertical"}>
                        <ReactPlayer width={"100%"} height={"100%"} controls={true} url={'/roboticArm/arm1TestVid.mov'} />
                    </div>
                </Container>
                <Typography gutterBottom>
                    Video demonstration of the top ligament tracking hand motion. My hand is in the specific gesture that allows it to be tracked. When my hand is 
                    open, it is not tracked. Currently working on a second degree of freedom, video hopefully up soon. While both can move, the exact location is not 
                    precise and needs more testing.
                </Typography>
                <Container style={{justifyContent: 'center', padding: "10px", display: 'flex'}}>
                    <div className={"player-wrapper-vertical"}>
                        <ReactPlayer width={"100%"} height={"100%"} controls={true} url={'/roboticArm/arm2TestVid.mp4'} />
                    </div>
                </Container>
                <Typography gutterBottom>
                    Video demonstration of both segments of the arm working. The position of the user's hand is converted to a coordinate that can then be used to  
                    find the angles needed for the servo motors to change to. The video also shows how the arm does not track when the specific gesture is not shown. 
                    Need to adjust the scalars from the object tracking to make it more thesible to use the camera for closer range objects.
                </Typography>
                <Container style={{minHeight: '4vh',}}/>
                <MockFooter/>
            </Container>
        </CustomStyles>
    )
}
