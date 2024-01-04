import { Container, Typography } from '@mui/material';
import CustomStyles from '../../components/CustomStyles';
import './roboticArmPage.css';
import MockFooter from '../../components/mockFooter';

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
                <Container style={{minHeight: '4vh',}}/>
                <MockFooter/>
            </Container>
        </CustomStyles>
    )
}
