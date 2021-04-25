import React, {useEffect, useState} from 'react'
import { Button, TextField, Grid, Container, Avatar } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import axios from 'axios'
import MediaCard from '../components/MediaCard'

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
function Main() {

    const mainStyle = stylesFunc();
    const {REACT_APP_BASE_URL, REACT_APP_DUMMY_API_KEY} = process.env;
    const [data, setData] = useState([]);

    const fetchData=async()=>{
       const {data} = await axios.get(`${REACT_APP_BASE_URL}/user`, {
            headers : {
                "app-id" : REACT_APP_DUMMY_API_KEY
            }
        })
        setData(data?.data)
        console.log(data?.data)
    }



    useEffect(() => {

        fetchData();
       
    }, [])
    return (
        <Container className={mainStyle.wrapper}>
            {data?.map((data)=>{
                return(
                    <MediaCard 
                        userImage={data?.picture}
                        userName ={`${data?.title} ${data?.firstName} ${data?.lastName}`}
                        userEmail={data?.email}
                        
                        />
                )
            })}
       </Container>
    )
}

export default Main
