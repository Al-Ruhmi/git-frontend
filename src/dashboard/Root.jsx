import React from 'react'
import { Outlet } from 'react-router-dom'




import CssBaseline from '@mui/material/CssBaseline';


import Appbar from 'mui_components/Appbar';
import Drawerr from 'mui_components/Drawer';
import { Container } from '@mui/material';



const drawerWidth = 240;

function Root() {
    return (
        <div>


            <CssBaseline />
            <Appbar />

            <Drawerr />
            


            <Container sx={{ ml: `${drawerWidth}px`, mr: `${drawerWidth}px`, mt: "65px", display: "flex", justifyContent: "center" }} >
                <Outlet />
            </Container>
        </div>
    );
};

export default Root