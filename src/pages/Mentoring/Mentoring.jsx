import React from "react"
import MentorCard from "../../components/MentorCard/MentorCard.jsx"
import { mentors } from "../../mock/mockMentors.js"
import { Container, Typography, Grid, Box} from '@mui/material'

export default function Mentoring() {
    return(
        <Box sx={{ py: 8, mt: '80px' }}>
            <Container maxWidth='lg'>
                <Typography variant="h3" component='h1' gutterBottom align='center' fontWeight='bold'>
                    Найти ментора
                </Typography>
                <Typography variant='h6' align='center' color='text.secondary' paragraph>
                    Выберите подходящего ментора, если испытываете трудности в обучении
                </Typography>

                <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 5 }}>
                    {mentors.map((mentor) => (
                        <Grid item key={mentor.id} xs={12} sm={6} md={4}><MentorCard mentor={mentor}/></Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}