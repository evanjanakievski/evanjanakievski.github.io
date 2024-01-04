import { Container, Typography, Button, Stack } from '@mui/material'
import CustomStyles from '../../components/CustomStyles.tsx'
import './contact.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

export default function Contact() {
    return (
        <CustomStyles>
            <Container maxWidth={"md"} style={{justifyContent: "center", minHeight: '100vh'}}>
                <Container style={{justifyContent: "center", padding: "10px"}}>
                    <Typography variant={"h1"} align={'center'} fontWeight={"300"} gutterBottom>
                        Contact
                    </Typography>
                    <Container style={{minHeight: '10vh',}}/>
                    <Typography align={'justify'} gutterBottom>
                        I am studying at the University of Waterloo and part of the co-op program which means I am 
                        constanly looking for another opportunity to grow and learn. I have dual citizenship, so I am 
                        authorized to work in both the United States and Canada. Thank you for taking a look at my portfolio!
                    </Typography>
                    <Container style={{minHeight: '10vh',}}/>
                    <Typography align={'center'} gutterBottom>
                        If you want to add me on LinkedIn or email me, the following links will help you out:
                    </Typography>
                </Container>
                <Container style={{justifyContent: "center", width: "350px"}}>
                    <Stack spacing={.25}>
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
