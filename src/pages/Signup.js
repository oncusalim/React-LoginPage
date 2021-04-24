import React from 'react'
import { Button, TextField, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import firebase from '../firebase/firebase.utils'
console.log("firebase", firebase)

const styles = makeStyles({
    wrapper: {
    marginTop: "5rem",
    },
  });

function Signup() {

    const signupStyles = styles();

    const formik = useFormik({
        initialValues: {
            displayName:'',
            email: '',
            password:'',
        },
        onSubmit: values => {
         // alert(JSON.stringify(values, null, 2));
            firebase.register(values.email, values.password)

        },
      });

      const handleGoogleButtonClick = () =>{
          firebase.useGoogleProvider();
      }

    return (
        
        <div style={{ padding: 20 }}>
            <Container maxWidth="sm" className={signupStyles.wrapper}>
                <form onSubmit={formik.handleSubmit}>
           <Grid container spacing={6}>
            <Grid container item xs={12} spacing={3}>
             <TextField 
                name="displayName"
                label="Display Name" 
                variant="outlined" 
                fullWidth
                value={formik.values.displayName}
                onChange={formik.handleChange}
                />
             </Grid>
             <Grid container item xs={12} spacing={3}>
             <TextField 
                name="email"
                label="E-Mail" 
                variant="outlined" 
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                />
             </Grid>
             <Grid container item xs={12} spacing={3}>
             <TextField 
                name="password"
                label="Password" 
                variant="outlined" 
                type="password"
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                />
             </Grid>
             <Grid container item xs={12} spacing={3}>
            <Button variant="contained" color="primary" fullWidth type="submit">Register</Button>
            </Grid>
            <Grid container item xs={12} spacing={3}>
            <Button variant="contained" color="primary" fullWidth onClick={handleGoogleButtonClick}>SignUp With Google</Button>
            </Grid>
            </Grid>
            </form>
            </Container>
        </div>
    )
}

export default Signup

