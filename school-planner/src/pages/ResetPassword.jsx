import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
import logo from '../media/logo.png';
// sections
import AuthSocial from '../sections/auth/AuthSocial';
// axios
import axios from 'axios';


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

	

// ----------------------------------------



const baseURL = "https://jsonplaceholder.typicode.com/posts/1";



export default function ResetPassword() {

	const [email, setEmail] = useState('');

	const navigate = useNavigate();

	const [showPassword, setShowPassword] = useState(false);

	const LoginSchema = Yup.object().shape({
		email: Yup.string().email('Email must be a valid email address').required('Email is required'),
	});

	const formik = useFormik({
	initialValues: {
		email: '',
		remember: true,
	},
	validationSchema: LoginSchema,
	onSubmit: () => {
	  navigate('/dashboard', { replace: true });
	},
	});

	const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;


	const smUp = useResponsive('up', 'sm');

	const mdUp = useResponsive('up', 'md');

// -------------------  axios requests  ---------------------


    function onSendEmail(e) {

        e.preventDefault();
        const postData = {
            email,
        };

		axios({
			method: "post",
			url: `https://schoolplanner-api.herokuapp.com/api/authentication/request-reset-email/`,
			data: postData,
			headers: { "Content-Type": "application/json" },
		})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (response) {
				console.log("errrrrrrrrrrr");
			});
    }

	return (
		<Page title="Reset Password">
			<RootStyle>
				<HeaderStyle>

					{smUp && (
						<Typography variant="body2" sx={{ mt: { md: -2 } }}>
							Vous souvenez vous de votre mot de passe? {''}
							<Link variant="subtitle2" component={RouterLink} to="/register">
								Se connecter
							</Link>
						</Typography>
					)}
				</HeaderStyle>

				{mdUp && (
					<SectionStyle>
						<Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
							Réinitialisez votre mot de passe
						</Typography>
						<img src="/static/illustrations/illustration_login.png" alt="login" />
					</SectionStyle>
				)}

				<Container maxWidth="sm">
					<ContentStyle>
						<Typography variant="h4" gutterBottom>
							Entrez votre adresse mail
						</Typography>
						<form onSubmit={onSendEmail}>
							<Stack spacing={3} sx={{ my: 5 }}>
								<TextField
						            fullWidth
						            type="email"
						            value={email}
						            onChange={(e) => setEmail(e.target.value)}
						            label="Email address"
						            {...getFieldProps('email')}
						            error={Boolean(touched.email && errors.email)}
						            helperText={touched.email && errors.email}
						        />
						    </Stack>

						    <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
					          	Envoyer
					        </LoadingButton>

						</form>
				        

						{!smUp && (
							<Typography variant="body2" align="center" sx={{ mt: 3 }}>
								Don’t have an account?{' '}
								<Link variant="subtitle2" component={RouterLink} to="/register">
									Get started
								</Link>
							</Typography>
						)}

					</ContentStyle>
				</Container>
			</RootStyle>
		</Page>
	);
}
