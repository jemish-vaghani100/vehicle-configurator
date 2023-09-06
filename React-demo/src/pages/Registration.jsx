import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Navbar from '../component/Navbar';
import Topbar from '../component/Topbar';
import Footer from '../component/Footer';
import { TextField, Button, Container, Typography, Paper, Stack } from '@mui/material';
import { json, useNavigate } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    emailid:'',
    password: '',
    comp_name: '',
    address: '',
    telephone: 0,
    holding: '',
    name_auth_person: '',
    designation: '',
    auth_tel: 0,
    auth_cell: 0,
    comp_st_no: '',
    vat_no: '',
    pan: '',
  });
let navigate=useNavigate();
  const [passwordError, setPasswordError] = useState('');
  const [telephoneError, setTelephoneError] = useState('');
  const [authphoneError, setAuthphoneError] = useState('');
  const [authcellError, setAuthcellError] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'telephone' ) {
      // Telephone number validation logic
      const phoneNumber = value.replace(/\D/g, ''); // Remove non-digit characters
      if (phoneNumber.length < 10) {
        setTelephoneError('Telephone number must be at least 10 digits long');
      } else {
        setTelephoneError('');
      }
    }
    
    else if (name === 'auth_tel' ) {
      // Telephone number validation logic
      const phoneNumber = value.replace(/\D/g, ''); // Remove non-digit characters
      if (phoneNumber.length < 10) {
        setAuthphoneError('auth_tel number must be at least 10 digits long');
      } else {
        setAuthphoneError('');
      }
    }
    
    else if (name === 'auth_cell' ) {
      // Telephone number validation logic
      const phoneNumber = value.replace(/\D/g, ''); // Remove non-digit characters
      if (phoneNumber.length < 10) {
        setAuthcellError('auth_cell number must be at least 10 digits long');
      } else {
        setAuthcellError('');
      }
    }

    else if (name === 'password') {
      // Password validation logic
      if (value.length < 8) {
        setPasswordError('Password must be at least 8 characters long');
      } else {
        setPasswordError('');
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let demo = JSON.stringify(formData);
    console.log(demo);
    console.log(JSON.parse(demo));

    fetch("http://localhost:8080/api/signup", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: demo,
    });

    alert("New User added");
    navigate("/login");
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Navbar />
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>
          <Topbar />
          <Container maxWidth="false" >
            <Paper elevation={3} sx={{ padding: 3, marginTop: 4, marginBottom: 4 }}>
              <Typography variant="h4" gutterBottom>
                Registration Form
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Email id"
                  type="email" 
                  name="emailid"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                  onChange={handleChange}
                />
                <Stack direction="row" spacing={2} paddingTop={1}>
                  <TextField
                    label="Username"
                    type="text"
                    name="username"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    name="password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    required
                    error={!!passwordError}
                    helperText={passwordError}
                  />
                </Stack>

                <TextField
                  label="address"
                  type="text"
                  name="address"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  required
                />

                <Stack direction="row" spacing={2} paddingTop={1} >
                  <TextField
                    label="comp_name"
                    type="text"
                    name="comp_name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    label="designation"
                    type="text"
                    name="designation"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    required
                  />
                </Stack>


                <TextField
                  label="telephone"
                  type="number"
                  name="telephone"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  required
                  error={!!telephoneError}
                  helperText={telephoneError}
                />

                <Stack direction="row" spacing={2} paddingTop={1}>
                  <TextField
                    label="name_auth_person"
                    type="text"
                    name="name_auth_person"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    required
                  />

                  <TextField
                    label="auth_tel"
                    type="text"
                    name="auth_tel"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    required
                    error={!!authphoneError}
                  helperText={authphoneError}
                  />
                  <TextField
                    label="auth_cell"
                    type="text"
                    name="auth_cell"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    required
                    error={!!authcellError}
                  helperText={authcellError}
                  />
                </Stack>
                <TextField
                  label="holding"
                  type="text"
                  name="holding"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  required
                />

                <TextField
                  label="pan"
                  type="text"
                  name="pan"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  required
                />


                <TextField
                  label="comp_st_no"
                  type="text"
                  name="comp_st_no"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="vat_no"
                  type="text"
                  name="vat_no"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  required
                />
                <Button variant="contained" color="success" type="submit" sx={{ marginTop: 2, minWidth: 150 }}>
                  Submit
                </Button>
              </form>
            </Paper>
          </Container>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
