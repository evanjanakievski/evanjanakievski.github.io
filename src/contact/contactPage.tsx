import { Container, Typography, Button, Stack } from '@mui/material'
import CustomStyles from '../../components/CustomStyles.tsx'
import './contact.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

export default function Contact() {
    return (
        <CustomStyles>
            <Container maxWidth={"md"} style={{backgroundColor: '#403e3b', justifyContent: "center", minHeight: '100vh'}}>
                <Container style={{justifyContent: "center", padding: "10px"}}>
                    <Typography variant={"h1"} align={'center'} fontWeight={"300"} gutterBottom>
                        Contact
                    </Typography>
                    <Container style={{minHeight: '10vh',}}/>
                    <Typography align={'justify'} gutterBottom>
                        I am studying at the University of Waterloo, but I am from the United States. I have dual citizenship 
                        and I am open to working throughout North America. My next co-op term is May 2024 - August 2024. Thank 
                        you for looking at my portfolio.
                    </Typography>
                    <Container style={{minHeight: '10vh',}}/>
                    <Typography align={'center'} gutterBottom>
                        I am able to be contacted through the two following links:
                    </Typography>
                </Container>
                <Container style={{justifyContent: "center", width: "350px"}}>
                    <Stack spacing={2}>
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
