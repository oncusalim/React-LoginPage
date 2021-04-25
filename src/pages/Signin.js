import React from 'react'
import { Button, TextField, Grid, Container, Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import firebase from '../firebase/firebase.utils'
import { Formik } from 'formik';
import * as Yup from 'yup';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';



const styles = makeStyles((theme)=>({
    wrapper: {
        marginTop: "5rem",
        textAlign:'center'
    },
    avatar: {
        margin: "1rem auto",
        backgroundColor: theme.palette.secondary.main
    },
    header:{
        margin: "1rem auto",
        
    }
}));

function Signin() {

    const signinStyles = styles();
    const initialValues = {
        email: '',
        password: '',
    }
    const SigninSchema = Yup.object().shape({
        email: Yup.string().email('Invalid Email').required('Required'),
        password: Yup.string()
            .min(6, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required')

    })
    const handleFormSubmit = (values) => {
        //alert(JSON.stringify(values, null, 2));
        firebase.signin(values.email, values.password)
    }


    const handleGoogleButtonClick = () => {
        firebase.useGoogleProvider();
    }

    return (

        <div style={{ padding: 20 }}>
            <Container maxWidth="sm" className={signinStyles.wrapper}>
                <Avatar className={signinStyles.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h4" className={signinStyles.header}>
                       Signin
                </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={SigninSchema}
                    onSubmit={handleFormSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={6}>

                                <Grid container item xs={12} spacing={3}>
                                    <TextField
                                        name="email"
                                        label="E-Mail"
                                        variant="outlined"
                                        fullWidth
                                        value={values.email}
                                        onChange={handleChange}
                                        error={errors.email}
                                        helperText={errors.email}
                                    />
                                </Grid>
                                <Grid container item xs={12} spacing={3}>
                                    <TextField
                                        name="password"
                                        label="Password"
                                        variant="outlined"
                                        type="password"
                                        fullWidth
                                        value={values.password}
                                        onChange={handleChange}
                                        error={errors.password}
                                        helperText={errors.password}
                                    />
                                </Grid>
                                <Grid container item xs={12} spacing={3}>
                                    <Button variant="contained" color="primary" fullWidth type="submit">Login</Button>
                                </Grid>
                                <Grid container item xs={12} spacing={3}>
                                    <Button variant="contained" color="primary" fullWidth onClick={handleGoogleButtonClick}>SignUp With Google</Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </Container>
        </div>
    )
}

export default Signin

