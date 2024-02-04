import React from 'react'
import './Login.css';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import { Box, Divider, TextField, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

// @ts-ignore
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


function Login() {
  const navigate = useNavigate();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
  return (
    <Card sx={{ maxWidth: 545 , marginTop: "100px" , marginLeft: "500px"}}>
    <CardHeader className='title'
      avatar={
        <Avatar sx={{ bgcolor: red[500] , fontSize: "1.0em"}} aria-label="recipe">
          P
        </Avatar>
      }
      title="Login Page "
 
    />

    <CardContent>
      <Box sx={{  maxWidth: 400 , ml: "50px", mr: "50px",mb: "30px",mt: "80px"}} >
        <TextField sx={{ width: 400 , marginLeft: "17px", marginRight: "10px", marginBottom: "10px", marginTop: "10px"}}
          id="outlined-required"
          label=" Email or User Name"
          type="text"
          
        />
        <Divider light />
        <TextField sx={{ position: "relative",width: 400 , marginLeft: "17px", marginRight: "10px", marginBottom: "10px", marginTop: "10px"}}
          id="outlined-password-input"
          label="Enter Password"
          type="password"
          
        />
        
        <Button sx={{width: 200 , mr: "10px", ml: "120px", mt: "25px", mb:"25px", display: "flex"}} variant="contained">
            Sign In
          
        </Button>
        <Typography sx={{ml: "110px", fontSize: "1.0em" , color: "inherit"}} variant="body2" color="initial">
            Do you forget your password ? Or
        </Typography>
        <Typography onClick={() => {
                        navigate("create")
                    }} sx={{ml: "110px", fontSize: "1.0em" , textDecoration: "underline",color: "blue","&:hover": { color: "green", fontSize: "17px" }} } variant="body2" color="initial">
            Create New Account !
        </Typography>
        
      </Box>
      
    </CardContent>

  </Card>
  )
}

export default Login