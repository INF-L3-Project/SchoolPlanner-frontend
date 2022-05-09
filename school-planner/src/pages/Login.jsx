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
// import AuthSocial from '../sections/auth/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

/* const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
})); */

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  borderRadius: 0,
  // margin: theme.spacing(2, 0, 2, 2),
  // shape: { borderRadius: 'none' },
}));

/* const LogoStyle = styled('div')(({ theme }) => ({
  width: '20%',
  maxWidth: 464,
  margin: theme.spacing(0, 0, 0, 0),
})); */

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));

// ----------------------------------------------------------------------

export default function Login() {
  /* const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');
 */
  return (
    <Page title="Login">
      <RootStyle>
        {/* <HeaderStyle>
          <Logo />

          {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
              Don’t have an account? {''}
              <Link variant="subtitle2" component={RouterLink} to="/register">
                Get started
              </Link>
            </Typography>
          )}
        </HeaderStyle> */}

        {/* {mdUp && ( */}
          <SectionStyle>
            {/* <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography> */}
            <img src="/static/illustrations/log_test.jpg" alt="login" />
          </SectionStyle>
        {/* )} */}

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
            <img src="/static/logo.png" alt="login" />
          </Box>
          <ContentStyle>
            <Typography variant="h4" gutterBottom>
              Connectez-vous
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 5 }}>Connectez-vous et consultez/générez gratuitement vos emplois de temps.</Typography>

            {/* <AuthSocial /> */}

            <LoginForm />

            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Vous n'avez pas de compte?{' '}
                <Link variant="subtitle2" component={RouterLink} to="/register">
                  S'inscrire.
                </Link>
            </Typography>

            {/* {!smUp && (
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don’t have an account?{' '}
                <Link variant="subtitle2" component={RouterLink} to="/register">
                  Get started
                </Link>
              </Typography>
            )} */}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
