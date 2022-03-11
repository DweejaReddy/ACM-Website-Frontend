import Box from '@mui/material/Box';
import React, { useState } from "react";
import Toolbar from '@mui/material/Toolbar';
import { Button, TextField } from '@mui/material';
import { useParams } from 'react-router';
import axios from 'axios';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import homeStyle from "./home.module.css";
const NavBar = () => {
    const [name, setName] = useState('');
    const { username } = useParams();
    const token = localStorage.getItem("accessToken");
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    }
    const handleNewproject = () => {
        
            const params = JSON.stringify({
                "name": name
            });
            axios
                .post("/api/codepen/newProject", params, {
                    "headers": {
                        "content-type": "application/json",
                        "Authorization": "Bearer " + token,
                    },
                })
                .then(res => {
                    window.location.href = '/codepen/projects/' + res.data.id;
                })
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return (
        <div className={`${homeStyle.Navbar}`} style={{height: '0vh'}}>
             
            

            <Box sx={{ flexGrow: 1 }}>
                <Toolbar variant="dense">
                    <div>
                    <Button className={`${homeStyle.btnCreate} `} style={{position: 'relative',letterSpacing: '0.25em',margin: '2rem auto',padding: '1rem 2.5rem',background: 'transparent',outline: 'none',fontSize: '16px',color: '#fff'}} onClick={handleClickOpen}>{"Create now"}<AddBoxIcon></AddBoxIcon></Button>
                    
                    <div className="homebuttons">
                        <Dialog open={open} className='text-center' onClose={handleClose}>
                            <DialogTitle style={{background: 'linear-gradient(to right, #BE5869, #7b4397)',color:'#fff'}}>New Project</DialogTitle>
                            <DialogContent style={{background: 'linear-gradient(to right, #BE5869, #7b4397)'}}>
                                <TextField type="text" placeholder="Name of Project" variant="outlined" color="warning"
                                    onChange={(e) => setName(e.target.value)} />
                                <br />
                                <br />
                                
                                <Button style={{color:'#fff'}} variant="text" onClick={handleNewproject}>Create</Button>
                            </DialogContent>
                        </Dialog>
                        {/* <Button variant="outlined" className="codeMode-active" component="span" onClick={handleClickOpen}><AddBoxIcon></AddBoxIcon> </Button> */}
                        
                        
                       
                        </div>
                    </div>
                </Toolbar>
            </Box>
        </div>
    );
}

export default NavBar;