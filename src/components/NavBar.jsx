import {Link} from 'react-router-dom'
import {AppBar,  Toolbar, Typography, Button} from '@mui/material'

export default  function NavBar() {
    return(
        <>
            <AppBar>
                <Toolbar>
                <Typography>NIS Connect</Typography>
                <Button color='inherit' component={Link} to='/'>Главная</Button>
                <Button color='inherit' component={Link} to='/collab'>Коллаборации</Button>
                <Button color='inherit' component={Link} to='/mentoring'>Менторство</Button>
                <Button color='inherit' component={Link} to='/study-hub'>Study Hub</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}