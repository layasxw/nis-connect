/* import { useState } from 'react'; */
import {Link , useLocation} from 'react-router-dom'
import {AppBar,  Toolbar, Typography, Button, Tabs, Tab} from '@mui/material'
import ThemeToggleButton from './Buttons/ThemeToggleButton.jsx'
import React from 'react'

export default  function NavBar() {
    const location = useLocation()
    /* const [ activePage, setActivePage ] = useState('/') */
    return(
        <>
            <AppBar color='#0046FF' sx={{ backgroundColor: '#a6add8ff'}}>
                <Toolbar>
                    <Tabs value={location.pathname}>
                        <Tab
                        value='/'
                        component={Link}
                        to='/'
                        textColor='secondary'
                        sx={{
                            color: 'white'
                        }}
                        >
                            NIS Connect
                        </Tab>
                        <Tab
                        value='/collaborations'
                        component={Link}
                        to='/collaborations'
                        >
                            Коллаборации
                        </Tab>
                        <Tab
                        value='/mentorship'
                        component={Link}
                        to='/mentorship'>
                            Менторство
                        </Tab>
                        <Tab
                        value='/study-hub'
                        component={Link}
                        to='/study-hub'>
                            Study Hub
                        </Tab>
                    </Tabs>

                    {/* <Typography
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
                        borderBottom: activePage === '/collaborations' ? '2px solid' : 'none',
                       
                        backgroundColor: 'transparent'
                    }}} onClick={() => setActivePage('/collaborations')}>Коллаборации</Button>
                    <Button color='inherit' component={Link} to='/mentorship' sx={{"&:hover": {
                        color: "#001BB7",
                        textShadow: `
                            0 0 2px #3a6bff,
                            0 0 4px #3a6bff
                        `,
                        borderBottom: activePage === '/mentorship' ? '2px solid' : 'none',
                        transition: 'border-bottom 0.3s ease',
                        backgroundColor: 'transparent'
                    }}} onClick={() => setActivePage('/mentorship')}>Менторство</Button>
                    <Button color='inherit' component={Link} to='/study-hub' sx={{"&:hover": {
                        color: "#001BB7",
                        textShadow: `
                            0 0 2px #3a6bff,
                            0 0 4px #3a6bff
                        `,
                        borderBottom: activePage === '/study-hub' ? '2px solid' : 'none',
                        transition: 'border-bottom 0.3s ease',
                        backgroundColor: 'transparent'
                    }}} onClick={() => setActivePage('/study-hub')}>Study Hub</Button>
                    <ThemeToggleButton></ThemeToggleButton> */}
                </Toolbar>
            </AppBar>
        </>
    )
}