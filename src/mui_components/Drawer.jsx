import React from 'react'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';

import { Avatar, Button } from '@mui/material';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Create, Home, Logout, Person2, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

function Drawerr() {
    const navigate = useNavigate();
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List >
                
                <ListItem disablePadding>
                    <ListItemButton onClick={() => {
                        navigate("/")
                    }}>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText sx={{ flexGrow: 2, textDecoration: "none", "&:hover": { color: "red", Size: "22px" } }} color="inherit" primary="Home " />
                    </ListItemButton>
                </ListItem>
            
                
                
                <ListItem disablePadding>
                    <ListItemButton onClick={() => {
                        navigate("#")
                    }}>
                        <ListItemIcon>
                            <Create />
                        </ListItemIcon>
                        <ListItemText sx={{ flexGrow: 2, textDecoration: "none", "&:hover": { color: "red", fontSize: "22px" } }} color="inherit" primary="Create " />
                    </ListItemButton>
                </ListItem>
                
               
                <ListItem disablePadding>
                    <ListItemButton onClick={() => {
                        navigate("#")
                    }}>
                        <ListItemIcon>
                            <Person2 />
                        </ListItemIcon>
                        <ListItemText sx={{ flexGrow: 2, textDecoration: "none", "&:hover": { color: "red", fontSize: "22px" } }} color="inherit" primary="Profile " />
                    </ListItemButton>
                </ListItem>
                
                
                <ListItem disablePadding>
                    <ListItemButton onClick={() => {
                        navigate("#")
                    }}>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText sx={{ flexGrow: 2, textDecoration: "none", "&:hover": { color: "red", fontSize: "22px" } }} color="inherit" primary="Settings " />
                    </ListItemButton>
                </ListItem>
                
                <ListItem disablePadding>
                    <ListItemButton onClick={() => {
                        navigate("#")
                    }}>
                        <ListItemIcon>
                            <Logout />
                        </ListItemIcon>
                        <ListItemText sx={{ flexGrow: 2, textDecoration: "none", "&:hover": { color: "red", fontSize: "22px" } }} color="inherit" primary="Logout " />
                    </ListItemButton>
                </ListItem>
                

            </List>

        </Drawer>
    )
}

export default Drawerr