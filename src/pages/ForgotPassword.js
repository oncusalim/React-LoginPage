import React from 'react'
import { Button, TextField, Grid, Container, Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import firebase from '../firebase/firebase.utils'
import { Formik } from 'formik';
import * as Yup from 'yup';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useHistory} from "react-router-dom"


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

function ForgotPassword() {

    const history = useHistory();
    const forgotPasswordStyles = styles();
    const initialValues = {
        email: '',
        password: '',
    }
    const forgotPasswordSchema = Yup.object().shape({
        email: Yup.string().email('Invalid Email').required('Required'),
       
    })
    const handleFormSubmit = (values) => {
        //alert(JSON.stringify(values, null, 2));
        firebase.forgotPassword(values.email)
        history.push("/login")
    }

    return (

        <div style={{ padding: 20 }}>
            <Container maxWidth="sm" className={forgotPasswordStyles.wrapper}>
                <Avatar className={forgotPasswordStyles.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h4" className={forgotPasswordStyles.header}>
                       Forgot Password
                </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={forgotPasswordSchema}
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
                                    <Button variant="contained" color="primary" fullWidth type="submit">Submit</Button>
                                </Grid>
                                
                            </Grid>
                        </form>
                    )}
                </Formik>
            </Container>
        </div>
    )
}

export default ForgotPassword

