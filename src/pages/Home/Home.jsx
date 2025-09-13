import React from "react"
import { Container, Grid, Typography, Card, CardContent, CardActions, Button, Box } from "@mui/material"
import {Link} from 'react-router-dom'

const modules = [
    {
        title: 'Коллаборации',
        description: 'Найдите единомышленников для своих проектов в любой школе НИШ',
        buttonText: 'Найти команду',
        link: '/collaborations'
    },
    {
        title: 'Менторство',
        description: 'Получить совет от выпускников. поступивших в лучшие вузы мира',
        buttonText: 'Найти ментора',
        link: '/mentorship'
    },
    {
        title: 'Study Hub',
        description: 'Все учебные материалы, тесты, полезные ресурсы в одном месте',
        buttonText: 'Найти ресурсы',
        link: '/study-hub'
    }
]
export default function Home() {
    return(
        <Box sx={{mt: '100px', mb: '100px'}}>
            <Container maxWidth='lg'>
                <Typography variant="h2">NIS Connect</Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                    Платформа для совместных проектов, менторства и эффективного обучения для школьников НИШ
                </Typography>

                {/**Сетка для карточек */}
                <Grid container spacing={4} sx={{ mt: 5, width: '100%', display: 'flex', alignItems: 'center' }}>
                    {modules.map((module) => (
                        <Grid item key={module.title} xs={12} md={4}>
                            <Card sx={{height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '16px', boxShadow: 3}}>
                                <CardContent sc={{ flexGrow: 1}}>
                                    <Typography gutterBottom variant="h5" component='h2' fontWeight='500'>
                                        { module.title }
                                    </Typography>
                                    <Typography>
                                        { module.description }
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Link to={module.link}>
                                        <Button
                                            size="medium"
                                            variant='contained'
                                            sx={{
                                                m: 1,
                                                backgroundColor: '#FF8040',
                                                color: '#fff',
                                                fontWeight: 'bold',
                                                boxShadow: 2,
                                                '&:hover': {
                                                    backgroundColor: '#ff944d',
                                                    color: '#fff',
                                                },
                                            }}
                                        >
                                            { module.buttonText }
                                        </Button>
                                    </Link>
                                    
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}