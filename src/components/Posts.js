import React, { useEffect, useState } from 'react'
import { FetchData } from '../helper/FetchData'
import Typography from '@material-ui/core/Typography';
import { Button, TextField, Grid, Container, Avatar, capitalize } from '@material-ui/core'

function Posts({ id }) {
    const [data, setData] = useState([])

    useEffect(() => {
        FetchData(`/post/${id}/comment?limit=10`)
            .then(value => setData(value?.data))
            .catch()
            .finally();

    }, [])

    //     [{"owner":{"id":"nye7EW8urdTCL9IhuIjL","title":"mr","lastName":"Rocha","email":"mem.rocha@example.com",
    //        "firstName":"Mem","picture":"https://randomuser.me/api/portraits/men/59.jpg"
    //    },
    //     "id":"yVaqowDoer4ODHMurDQV","message":"🥰🥰🥰 Perfect picture","publishDate":"2020-04-15T09:04:31.689Z"}]
    return (
        <div>
            {data?.map((comment) => {
                return (
                    <React.Fragment key={comment.id}>
                        <Grid container spacing={1}>
                            <Grid item sm={4} xs={6}>
                                <Avatar aria-label="recipe" src={comment.owner.picture} />
                            </Grid>
                            <Grid item sm={4} xs={6}>


                                <Typography paragraph>
                                    {comment.owner.firstName + " " + comment.owner.lastName}
                                </Typography>
                                <Typography paragraph>
                                    {comment.owner.email}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography paragraph>
                            {comment.message}
                        </Typography>
                        <Typography paragraph>
                            {comment.publishDate}
                        </Typography>
                        <hr />
                    </React.Fragment>
                )
            })}

        </div>
    )
}

export default Posts
