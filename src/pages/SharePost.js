import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard';
import { FetchData } from '../helper/FetchData'
import { useParams } from "react-router-dom"
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

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

function SharePost(props) {

    const mainStyle = stylesFunc();
    const [data, setData] = useState()
    const { id } = useParams()

    useEffect(() => {
        FetchData(`/user/${id}/post`)
            .then(value => setData(value?.data))
            .catch()
            .finally();

    }, [])

    // {"owner":
    // {"id":"0F8JIqi4zwvb77FGz6Wt","lastName":"Fiedler","firstName":"Heinz-Georg",
    //         "email":"heinz-georg.fiedler@example.com","title":"mr","picture":"https://randomuser.me/api/portraits/men/81.jpg"
    // },
    //     "id":"h6SMm2IrtKS2voz2tAOq","image":"https://img.dummyapi.io/photo-1568484730668-25478021de14.jpg",
    //     "publishDate":"2020-04-13T06:06:18.751Z","text":"long-coated white dog","tags":["dog","animal","pet"],"link":null,"likes":22},
    return (

        <Container className={mainStyle.wrapper}>
            { !data ? (<CircularProgress />) : null}
            <Grid container spacing={1}>
                {data?.map((post) => {
                    return (
                        <Grid item sm={4} xs={6} key={data?.id}>
                            <PostCard
                                firstName={post.owner.firstName}
                                lastName={post.owner.lastName}
                                email={post.owner.email}
                                picture={post.owner.picture}
                                image={post.image}
                                tags={post.tags}
                                text={post.text}
                                likes={post.likes}
                                publishDate={post.publishDate}
                                postId={post.id}
                            />
                        </Grid>

                    )
                })}
            </Grid>
        </Container>

    )
}

export default SharePost
