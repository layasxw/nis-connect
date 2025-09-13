import React from 'react'
import { Card, CardContent, Typography, Button, Box, Chip } from '@mui/material'

export default function ProjectCard({project}){
    return(
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '16px', boxShadow: 3}}>
            <CardContent sx={{flexGrow: 1}}>
                <Typography gutterBottom variant='h5' component='h2' fontWeight='bold'>
                    {project.title}
                </Typography>
                <Typography variant='subtitle2' color='text.secondary' sx={{ mb: 2 }}>
                    Автор: {project.author}
                </Typography>

                <Typography>
                    Описание: {project.description}
                </Typography>

                <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                    {project.requiredRole.map((role) => (
                        <Chip key={role} label={role} size='small'></Chip>
                    ))}
                </Box>
            </CardContent>

            <Box sx={{p: 2}}>
                <Button
                    variant='contained'
                    fullWidth
                    sx={{
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
                    Связаться
                </Button>
            </Box>
        </Card>
    )
}