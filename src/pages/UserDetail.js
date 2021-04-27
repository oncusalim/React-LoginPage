import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Button, TextField, Grid, Container, Avatar, capitalize } from '@material-ui/core';
import { FetchData } from '../helper/FetchData'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { DateConvert } from '../helper/DateConvert'

const stylesFunc = makeStyles((theme) => ({
    wrapper: {
        marginTop: "10rem",
        textAlign: 'flex-start',
        direction: 'row'
    },
    avatar: {
        margin: "1rem auto",
        backgroundColor: theme.palette.secondary.main
    },
    header: {
        margin: "1rem auto",

    }
}));

function UserDetail() {
    const detailStyle = stylesFunc();
    const { id } = useParams();
    const [data, setData] = useState()

    useEffect(() => {
        FetchData(`/user/${id}`)
            .then(value => setData(value))
            .catch()
            .finally();

    }, [id])
    console.log(data)
    return (
        <Container className={detailStyle.wrapper}  bgcolor="primary.main">
            {data?.registerDate && (
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={4}
                   bgcolor="primary.main"
                >
                    <Grid container item xs={3}  >
                        <img src={data?.picture} alt="user" width="100%" />
                    </Grid>
                    <Grid container direction="column" item xs={6} >
                        <Grid item >
                            <Typography variant="subtitle1">{capitalize(data?.title)} {data?.firstName} {data?.lastName}</Typography>
                        </Grid>
                        <Grid  item >
                            <Typography variant="subtitle1">Gender: {capitalize(data?.gender)}</Typography>
                            <Typography variant="subtitle1">Date of Birth: {DateConvert(data?.dateOfBirth)}</Typography>
                            <Typography variant="subtitle1">Register Date: {DateConvert(data?.registerDate)}</Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="subtitle1">E-mail: {data?.email}</Typography>
                            <Typography variant="subtitle1">Phone: {data?.phone}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={3} spacing={3}>
                        harita
                </Grid>
                </Grid>
            )}
        </Container>
    )
}

export default UserDetail
