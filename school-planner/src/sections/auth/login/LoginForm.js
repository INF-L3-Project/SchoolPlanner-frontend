import * as Yup from 'yup';
import { useState } from 'react';
import axios from 'axios';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Link, Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

axios.create({
  baseUrl : `https://schoolplanner-api.herokuapp.com/api/`
});

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Votre adresse email n\'est pas valide').required('Entrez votre adresse email'),
    password: Yup.string().required('Entrez votre mot de passe'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      // remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    },
  });

  function handleSubmitting(){

    let postOptions = {
      header : {
        Accept : 'application/json',
        'content-Type' : 'application/json'
      }
    }

    axios.post(`https://schoolplanner-api.herokuapp.com/api/login/`, {

        user : {
          email : '',
          password: ''
        },

    }, postOptions)
    .then( res => {
      console.log('this is the response' +res.data);
    })

  }

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmitting()}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Adresse Email"
            onChange = {(e)=> setEmail(e.target.value)}
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Mot de passe"
            onChange = {(e)=> setPassword(e.target.value)}
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

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          {/* <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          /> */}

          <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
            Mot de passe oublié?
          </Link>
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting} onClick={()=>handleSubmitting()}>
            Se connecter
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
