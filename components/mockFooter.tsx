import { Container, Button, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

export default function MockFooter() {
    return (
        <Container style={{justifyContent: "center", display: 'flex', borderTop: '2px solid black', maxWidth: 'md'}}>
            <Stack spacing={0.25} style={{ maxWidth: '350px' }}>
                <Button size={'large'} startIcon={<LinkedInIcon/>} target={'_blank'} href={'https://linkedin.com/in/evan-janakievski'}>
                    Evan Janakievski
                </Button>
                <Button size={'large'} startIcon={<MailIcon/>} target={'_blank'} href={'mailto:evanjanakievski@gmail.com'}>
                    evanjanakievski@gmail.com
                </Button>
            </Stack>
        </Container>
    )
}
