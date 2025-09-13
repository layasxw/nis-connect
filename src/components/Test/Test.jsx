import {Typography, Button, Box, Container} from '@mui/material'

export default function Test({test}) {
    return(
        <Box>
            <Container>
                <Typography key={test.n}>{test.q}</Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#FF8040',
                        color: '#fff',
                        fontWeight: 'bold',
                        boxShadow: 2,
                        mt: 2,
                        '&:hover': {
                            backgroundColor: '#ff944d',
                            color: '#fff',
                        },
                    }}
                >
                    Ответить
                </Button>
            </Container>
        </Box>
    )
}