import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import { Button, TextField, Grid, Container, Avatar, capitalize } from '@material-ui/core';
import {FetchData} from '../helper/FetchData'
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { format as formatDate, parseISO} from 'date-fns'

const stylesFunc = makeStyles((theme)=>({
    wrapper: {
        marginTop: "10rem",
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

function UserDetail() {
    const detailStyle = stylesFunc();
    const { id } =useParams();
    const [data, setData] = useState()

    useEffect(() => {
      FetchData(`/user/${id}`)
      .then(value=>setData(value))
      .catch()
      .finally();
     
    }, [id])
    return (
        <Container className={detailStyle.wrapper}>
            <img src={data?.picture} alt="user" />
        <Typography variant="h4">{data?.firstName} {data?.lastName}</Typography>
        {data?.registerDate && (
        <Typography variant="h5">{formatDate(parseISO(data?.registerDate), "MMM/dd/yyyy")}</Typography>
        )}
        <Typography variant="h5">{data?.phone}</Typography>
  </Container>
    )
}

export default UserDetail
