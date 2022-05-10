import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Box, Link, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
// sections
import { RegisterForm } from '../sections/auth/register';

//images
import logo from '../media/logo.png';

import register from '../media/bg/register.jpg';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
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
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  borderRadius: '0',
  margin: theme.spacing(0, 0, 0, 0),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {

  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Register">
      <RootStyle>
        <HeaderStyle>
          
          {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
              <Typography sx={{color: 'white'}}>
                Vous disposez déja d'un compte? {''}
              </Typography>
              <Link variant="subtitle2" component={RouterLink} to="/login">
                Connectez-vous
              </Link>
            </Typography>
          )}
        </HeaderStyle>

        {mdUp && (
          <SectionStyle>
            <img alt="register" src={register} />
          </SectionStyle>
        )}

        <Container>
          <Box sx={{ mx: 1, my: 0, px: 1, mt: 2, width:'150px',bgcolor: 'none', borderRadius: '50%' }}>
           <img src={logo} width="100px" height="100px" />
           </Box>
          <ContentStyle >
            <Typography variant="h4" gutterBottom>
              Créez un compte 
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 5 }}>Gérez votre activité</Typography>

            <RegisterForm />

            {!smUp && (
              <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                Vous disposez déja d'un compte? {''}
                <Link variant="subtitle2" to="/login" component={RouterLink}>
                  Connectez-vous
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}

