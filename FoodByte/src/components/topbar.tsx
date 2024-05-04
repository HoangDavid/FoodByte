import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { signOut } from "firebase/auth";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {auth} from "../services/firebase"
import { useState } from 'react';
import logo from '../../public/logo.png'

export const Topbar = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            handleClose();
            navigate('/')       
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    return (
        <div style={{ display: 'flex'}}>
            <Drawer
                variant="permanent"
                anchor="top"
                sx={{
                    '& .MuiDrawer-paper': {
                        background: '#65b3a2',
                        justifyContent: 'space-between',
                        display: 'flex',
                        flexDirection: 'row',
                    }
                }}
            >
                    <List sx={{alignItems: 'center', padding: '0px', background: '#65b3a2', color: 'white'}}>
                        <Toolbar>
                        <img 
                            src={logo}
                            alt="Logo"
                            style={{width:'30%', height: '30%'}}/>
                        </Toolbar>
                    </List>

                    <div aria-label="Account options" title="View account options">
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    onKeyDown={(e) => e.key === "Enter" && handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle sx={{fontSize: '7vh', padding: '2vh'}}/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem>Profile</MenuItem>
                                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                </Menu>
                            </div>
            </Drawer>
        </div>
    );
};

export default Topbar;