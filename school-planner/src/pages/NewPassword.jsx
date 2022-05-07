import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Iconify from '../components/Iconify';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
// sections
import AuthSocial from '../sections/auth/AuthSocial';

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
	flexDirection: 'column',
	justifyContent: 'center',
	margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
	maxWidth: 480,
	margin: 'auto',
	minHeight: '100vh',
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
	padding: theme.spacing(12, 0),
}));

	

// ----------------------------------------------------------------------

export default function NewPassword() {

	const navigate = useNavigate();

	const [showPassword, setShowPassword] = useState(false);

	const LoginSchema = Yup.object().shape({
		email: Yup.string().email('Email must be a valid email address').required('Email is required'),
		password: Yup.string().required('Password is required'),
	});

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			remember: true,
		},
		validationSchema: LoginSchema,
		onSubmit: () => {
		  	navigate('/dashboard', { replace: true });
		},
	});

	const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

	const handleShowPassword = () => {
		setShowPassword((show) => !show);
	};

	return (
		<Page title="New Password">
			<RootStyle>

				<Container maxWidth="sm">
					<ContentStyle>
						<Typography variant="h4" gutterBottom>
							Réinitialisez votre mot de passe
						</Typography>

						<Stack spacing={3} sx={{ my: 5 }}>
							<TextField
					            fullWidth
					            autoComplete="username"
					            type="email"
					            label="Email address"
					            {...getFieldProps('email')}
					            error={Boolean(touched.email && errors.email)}
					            helperText={touched.email && errors.email}
					        />

					        <TextField
					            fullWidth
					            autoComplete="current-password"
					            type={showPassword ? 'text' : 'password'}
					            label="Password"
					            {...getFieldProps('password')}
					            InputProps={{
					              endAdornment: (
					                <InputAdornment position="end">
					                  <IconButton onClick={handleShowPassword} edge="end">
					                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
					                  </IconButton>
					                </InputAdornment>
					              ),
					            }}
					            error={Boolean(touched.password && errors.password)}
					            helperText={touched.password && errors.password}
					        />
					    </Stack>

					    <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
				          	Réinitialiser
				        </LoadingButton>

					</ContentStyle>
				</Container>
			</RootStyle>
		</Page>
	);
}
