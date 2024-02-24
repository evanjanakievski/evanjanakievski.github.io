import { Container, Typography, List, ListItem } from '@mui/material';
import CustomStyles from '../../components/CustomStyles';
import './UAVCabin.css';
import MockFooter from '../../components/mockFooter';

export default function UAVCabinPage() {
    return (
        <CustomStyles>
            <Container maxWidth={"md"} style={{justifyContent: "center", minHeight: '100vh'}}>
                <Container style={{justifyContent: "center", padding: "10px"}}>
                    <Typography variant={"h2"} align={'center'} fontWeight={"300"}>
                        Passenger and Cargo Cabin
                    </Typography>
                    <Typography variant={"h4"} gutterBottom>
                        In Development
                    </Typography>
                    <Typography variant={"h6"} fontStyle={"italic"}>
                        Skills and Technologies
                    </Typography>
                    <Typography gutterBottom>
                        SolidWorks, Mechanical Design, Ansys Fluent, Composite Layups, Project Planning
                    </Typography>
                </Container>
                <Container style={{padding: "5px", maxWidth: '1000px' , minWidth: '325px'}}>
                    <img src={"/WARG/WARG_CABIN.jpg"} alt={"Picture of cabin mounted to the drone"} style={{height: 'auto', width: '70%'}}/>
                </Container>
                <Typography align={'center'} gutterBottom>
                    First iteration of the cabin mounted to the drone
                </Typography>
                <Typography variant={'h6'} align={'left'}>
                    Main Ideas
                </Typography>
                <List style={{ listStyleType: 'disc', paddingLeft: '30px' }} dense={true}>
                    <ListItem style={{ display: 'list-item' }}>Designed an urban air mobility drone’s cabin skeleton in SolidWorks to be capable of carrying 4 passengers and additional cargo while maintaining a lightweight and aerodynamic frame using carbon fiber plates, carbon fiber tubes, and PEEK inserts</ListItem>
                    <ListItem style={{ display: 'list-item' }}>Executed CFD simulations in Ansys Fluent, using a variety of CAD designs to influence design decisions of the cabin shape</ListItem>
                    <ListItem style={{ display: 'list-item' }}>Adjusted the angles of attack to replicate the many different flying angles of the drone, from 15 degrees to 45 degrees</ListItem>
                    <ListItem style={{ display: 'list-item' }}>Designed a mounting system to allow service to be done to the cabin or drone with more accessibility and less time wasted</ListItem>
                </List>
                <Typography align={"justify"} gutterBottom>
                    This project is a part of a student design team that I am a part of. Waterloo Aerial Robotics Group competes annually in the Aerial Evolution 
                    of Canada's competition. This year the team has constructed an urban air mobility vehicle, a quadcopter, to compete and it needed the capability of carrying four passengers 
                    (represented as Barbie dolls) and multiple cargo items. This cabin is to contain both the passenger and cargo sections, in which I am a project 
                    manager to oversee and review designs.
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    I designed the skeleton of the cabin using SolidWorks and to be constructed out of carbon fiber plates and tubes with PEEK inserts 
                    to allow assembly. As a team we completed wet carbon fiber layups and had the plates cut on a water jet. Combining this design with the 
                    other team member's designs for seats, cargo compartments, and aerodynamic panels was part of my role as Project Manager. I am currently working 
                    on a mounting method that will allow the cabin to be taken off the drone with ease allowing for more ease of access to the centerblock on the 
                    drone as well as maintenence to the cabin.
                </Typography>
                <Container style={{padding: "5px", maxWidth: '1000px' , minWidth: '325px'}}>
                    <img src={"/WARG/WARG_Skeleton.jpg"} alt={"Skeleton design of the cabin assembly"} style={{height: 'auto', width: '60%'}}/>
                </Container>
                <Typography align={'center'} gutterBottom>
                    Skeleton design allowing incorporation of chairs, cargo, windows, and panels
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    The aerodynamic panels were designed by another member for this first iteration and currently are installed. I am working on designing the 
                    second iteration of panels and to supplement my design I am using Ansys Fluent to analyze different shapes for the panels. Adjusting the 
                    attack angle on the drone will allow me to look at the drag and lift of the drone. 
                </Typography>
                <Container style={{padding: "5px", maxWidth: '1000px' , minWidth: '325px'}}>
                    <img src={"/WARG/DroneAnalysis.png"} alt={"Ansys Fluent analysis of the drone"} style={{height: 'auto', width: '60%'}}/>
                </Container>
                <Typography align={'center'} gutterBottom>
                    Ansys Fluent analysis of the cabin as a rectangular prism with an attack angle of 30 degrees
                </Typography>
                <Container style={{minHeight: '4vh',}}/>
                <MockFooter/>
            </Container>
        </CustomStyles>
    )
}
