import React from 'react'
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import { mockProjects } from "../../mock/mockData.js"
import { Container, Grid, Typography, Box } from '@mui/material'

export default function Collab() {
    return(
        <Box sx={{ py: 8, mt: '80px' }}>
            <Container maxWidth='lg'>
                <Typography variant="h3" component='h1' gutterBottom align='center' fontWeight='bold'>
                    Найти проект
                </Typography>
                <Typography variant='h6' align='center' color='text.secondary' paragraph>
                    Посмотрите проекты учеников НИШ и присоединяйтесь к команде
                </Typography>

                {/** отображение всех карточек проектов */}
                <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 5 }}>
                    {mockProjects.map((project) => (
                        <Grid item key={project.id} xs={12} sm={6} md={4}><ProjectCard project={project}/></Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}