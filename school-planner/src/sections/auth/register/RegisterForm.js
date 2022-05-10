import axios from 'axios';
import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment, Input } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';


// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({

  });

  const { errors, touched, isSubmitting, getFieldProps } = formik;

      const [name, setName] = useState();
      const [lastName, setLastName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [description, setDescription] = useState('');
      const [loading, setLoading] = useState(false);
      const [isError, setIsError] = useState(false);
      const [logo, setLogo] = useState();

      const handleSubmitForm = async (e) =>{
        e.preventDefault();
        try{
            const res = await axios.post(`https://schoolplanner-api.herokuapp.com/api/authentication/accounts/`, 
                      {
                        user: {
                          last_name: lastName,
                          email: email,
                          password: password
                        },
                        name: lastName,
                        logo: logo,
                        description: description
                      });
            console.log('this is the response::  ' + res.data.resul);
        }
        catch(err){
          console.log('this is the catched error::  ' + err.response);
        }
      };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmitForm}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              value={name}
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              onChange={(e)=> setName(e.target.value)}
            />

            <TextField
              fullWidth
              label="Last name"
              value={lastName}
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              onChange={(e)=> setLastName(e.target.value)}
            />
          </Stack>


          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            value={email}
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            onChange={(e)=> setEmail(e.target.value)}
          />

            <TextField
              fullWidth
              label="Description"
              value={description}
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              onChange={(e)=> setDescription(e.target.value)}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            value={email}
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <input type="file" name="logo" id="" value={logo} />

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting} onClick={handleSubmitForm}>
            Register
          </LoadingButton>
          <button type="submit" onClick={handleSubmitForm}>submit</button>
        </Stack>
      </Form>
    </FormikProvider>
  );
}

/*
  


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [postData, SetPostData] = useState(null);

  function handleSubmitForm(){
    setLoading(true);
    setIsError(false);
    const postData = {
        user : {
          last_name : lastName ,
          email : 'rereerr@yahoo.com',
          password: '56789',
        },
        name : 'Flore',
        description: description
    }

    const postOptions = {
      header : {
        Accept : 'application/json',
        'content-Type' : 'application/json'
      }
    }

    axios.post(`https://schoolplanner-api.herokuapp.com/api/authentication/accounts/`, postData, {postOptions})
    .then( res => {

      console.log('this is the response' +res);
      console.log('this is the response two' +res.data);
      console.log('this is the response' +res.status);

    })
    .catch(error => {
      console.log('this is the error' + error)
      setIsError(true);
      setLoading(false);
    })

  }
*/


/*
import React, { useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
 
function App() {
 
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
 
  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const data = {
      name: name,
      job: job
    }
    axios.post('https://reqres.in/api/users', data).then(res => {
      setData(res.data);
      setName('');
      setJob('');
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      setIsError(true);
    });
  }
 
  return (
    <div className="container p-3">
      <h5 className="d-inline-block mb-3">POST request using axios with React Hooks - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h5>
      <div style={{ maxWidth: 350 }}>
        <div classNames="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={e => setName(e.target.value)} />
        </div>
        <div classNames="form-group">
          <label htmlFor="job" className="mt-2">Job</label>
          <input
            type="text"
            className="form-control"
            id="job"
            placeholder="Enter job"
            value={job}
            onChange={e => setJob(e.target.value)} />
        </div>
        {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
          disabled={loading}
        >{loading ? 'Loading...' : 'Submit'}</button>
        {data && <div className="mt-3">
          <strong>Output:</strong><br />
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        }
      </div>
    </div>
  );
}
 
export default App;
*/