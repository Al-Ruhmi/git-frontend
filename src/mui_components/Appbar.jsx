import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import { Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

function Appbar() {
    const navigate = useNavigate();
  return (
    <AppBar
    position="fixed"
    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
>
    <Toolbar>

        <Typography position="relative" sx={{ pl: "400px",fontSize: "30px", flexGrow: 2, textDecoration: "none", "&:hover": { color: "red", fontSize: "35px" } }} color="inherit">
            {/* variant="h6" noWrap component="div" */}
            Dashboard
           

        </Typography>
        {/* <Button onClick={() => {
                        navigate("#")
                    }}
                    color="inherit">Login</Button> */}
        
        <Avatar
            alt="Remy Sharp"
            src="\images\me.jpg"
            sx={{ width: 44, height: 44 , color: "red"}}
        />
        <Typography  sx={{  margin: "10px" }} variant="body1" color="inherit">Ahmed Ali </Typography>
    </Toolbar>
</AppBar>
  )
}

export default Appbar