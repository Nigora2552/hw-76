import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component={NavLink} to='/' sx={{ flexGrow: 1,textDecoration: 'none', color: 'inherit' }}>
                        Messages
                    </Typography>
                    <Button color="inherit" component={NavLink} to='/'>Home</Button>
                    <Button color="inherit" component={NavLink} to='/add'>Add new message</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;