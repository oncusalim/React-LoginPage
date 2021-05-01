import React, { useEffect, useState } from 'react'
import { Button, TextField, Grid, Container, Avatar, capitalize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import MediaCard from '../components/MediaCard'
import CircularProgress from '@material-ui/core/CircularProgress';
import { FetchData } from '../helper/FetchData'

const stylesFunc = makeStyles((theme) => ({
    wrapper: {
        marginTop: "5rem",
        textAlign: 'center'
    },
    avatar: {
        margin: "1rem auto",
        backgroundColor: theme.palette.secondary.main
    },
    header: {
        margin: "1rem auto",

    }
}));
function Main() {

    const mainStyle = stylesFunc();
    const { REACT_APP_BASE_URL, REACT_APP_DUMMY_API_KEY } = process.env;
    const [data, setData] = useState();

    useEffect(() => {

        FetchData(`/user`)
            .then(value => setData(value?.data))
            .catch()
            .finally();


    }, [])
    return (
        <Container className={mainStyle.wrapper}>
            { !data ? (<CircularProgress />) : null}
            <Grid container spacing={1}>

                {data?.map((data) => {
                    return (
                        <Grid item sm={4} xs={6} key={data?.id}>

                            <MediaCard
                                userImage={data?.picture}
                                userName={`${capitalize(data?.title)} ${data?.firstName} ${data?.lastName}`}
                                userEmail={data?.email}
                                id={data?.id}

                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default Main
