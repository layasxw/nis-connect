import {Link} from 'react-router-dom'
import {AppBar,  Toolbar, Typography, Button} from '@mui/material'

export default  function NavBar() {
    return(
        <>
            <AppBar color='#0046FF' sx={{ backgroundColor: '#a6add8ff'}}>
                <Toolbar>
                    <Typography
                        component={Link}
                        to='/'
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            color: '#001BB7',
                            minHeight: '64px',
                            px: 4,
                            alignItems: 'center',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            textDecoration: 'none',
                            transition: 'text-shadow 0.2s, color 0.2s',
                            '&:hover': {
                                color: '#001BB7',
                                textShadow: `
                                    0 0 2px #3a6bff,
                                    0 0 4px #3a6bff
                                `,
                                backgroundColor: 'transparent',
                            },
                        }}
                    >
                        NIS Connect
                    </Typography>
                    <Button color='inherit' component={Link} to='/collaborations' sx={{"&:hover": {
                        color: "#001BB7",
                        textShadow: `
                            0 0 2px #3a6bff,
                            0 0 4px #3a6bff
                        `,
                        backgroundColor: 'transparent'
                    }}}>Коллаборации</Button>
                    <Button color='inherit' component={Link} to='/mentorship' sx={{"&:hover": {
                        color: "#001BB7",
                        textShadow: `
                            0 0 2px #3a6bff,
                            0 0 4px #3a6bff
                        `,
                        backgroundColor: 'transparent'
                    }}}>Менторство</Button>
                    <Button color='inherit' component={Link} to='/study-hub' sx={{"&:hover": {
                        color: "#001BB7",
                        textShadow: `
                            0 0 2px #3a6bff,
                            0 0 4px #3a6bff
                        `,
                        backgroundColor: 'transparent'
                    }}}>Study Hub</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}