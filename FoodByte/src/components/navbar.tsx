import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import KitchenIcon from '@mui/icons-material/Kitchen'; // Icon for Fridge
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Icon for Recipe
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Icon for Shopping
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                anchor="left"
            >
                <div style={{ width: '10vw', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <AppBar position="static" sx={{alignItems: 'center', padding: '3vh', background: 'orange'}}>
                        <Toolbar>
                            <Typography variant="h3" noWrap>
                                FoodByte
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <List style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <ListItem button onClick={() => navigate('/fridge')} style={{ flexGrow: 1, flexDirection: 'column', color:  location.pathname === '/fridge' ? '#65b3a2' : 'black'}}>
                            <KitchenIcon style={{ fontSize: '7vh', paddingTop: '7vh', paddingBottom: '1vh'}} />
                            <ListItemText primary="Fridge" />
                        </ListItem>
                        <ListItem button onClick={() => navigate('/recipe')} style={{ flexGrow: 1, flexDirection: 'column', color: location.pathname === '/recipe' ? '#65b3a2' : 'black'}}>
                            <MenuBookIcon style={{ fontSize: '7vh', paddingTop: '7vh', paddingBottom: '1vh' }} />
                            <ListItemText primary="Recipe"  />
                        </ListItem>
                        <ListItem button onClick={() => navigate('/shopping')} style={{ flexGrow: 1, flexDirection: 'column', color: location.pathname === '/shopping' ? '#65b3a2' : 'black'}}>
                            <ShoppingCartIcon style={{ fontSize: '7vh', paddingTop: '7vh', paddingBottom: '1vh'}} />
                            <ListItemText primary="Shopping"  />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
};

export default Navbar;