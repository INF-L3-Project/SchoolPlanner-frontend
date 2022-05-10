import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Box, Link, Container, Typography } from '@mui/material';
// hooks
// import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
//import Logo from '../components/Logo';
// sections
import { LoginForm } from '../sections/auth/login';
// import Image from '../log_test.jpg';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  borderRadius: 0,
  // backgroundImage: `url(${Image})`,
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '81vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));

// ----------------------------------------------------------------------

export default function Login() {
  
  return (
    <Page title="Login">
      <RootStyle>
          <SectionStyle>
            <img src="/static/illustrations/log_test.jpg" alt="login" />
          </SectionStyle>

        <Container maxWidth="sm">
          <Box
          component="span"
          sx={{
            width: 125,
            height: 125,
            display: 'flex',
            marginLeft: -30,
            marginTop: 3,
          }}
          >
            <img src="/static/logo2.png" alt="login" />
          </Box>
          <ContentStyle>
            <Typography variant="h4" gutterBottom>
              Connectez-vous
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 5 }}>Connectez-vous et consultez/générez gratuitement vos emplois de temps.</Typography>

            <LoginForm />

            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Vous n'avez pas de compte?{' '}
                <Link variant="subtitle2" component={RouterLink} to="/register">
                  S'inscrire.
                </Link>
            </Typography>
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
