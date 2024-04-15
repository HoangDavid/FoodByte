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
import { useState } from 'react';

export const Navbar = () => {
    const navigate = useNavigate();
    const [selectedPage, setSelectedPage] = useState<string>("");

    const handleSelectPage = (page: string) => {
        setSelectedPage(page);
        navigate(page)
    };

    return (
        <div style={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                anchor="left"
            >
                <div style={{ width: '20vw', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <AppBar position="static" sx={{alignItems: 'center', padding: '3vh', background: 'grey'}}>
                        <Toolbar>
                            <Typography variant="h3" noWrap>
                                FoodByte
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <List style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <ListItem button onClick={() => handleSelectPage('/fridge')} style={{ flexGrow: 1, flexDirection: 'column'}}>
                            <KitchenIcon style={{ fontSize: '10vh', paddingTop: '7vh'}} />
                            <ListItemText primary="Fridge" primaryTypographyProps={{ variant: 'h5' }} />
                        </ListItem>
                        <ListItem button onClick={() => handleSelectPage('/recipe')} style={{ flexGrow: 1, flexDirection: 'column'}}>
                            <MenuBookIcon style={{ fontSize: '10vh', paddingTop: '7vh' }} />
                            <ListItemText primary="Recipe" primaryTypographyProps={{ variant: 'h5' }} />
                        </ListItem>
                        <ListItem button onClick={() => handleSelectPage('/shopping')} style={{ flexGrow: 1, flexDirection: 'column'}}>
                            <ShoppingCartIcon style={{ fontSize: '10vh', paddingTop: '7vh' }} />
                            <ListItemText primary="Shopping" primaryTypographyProps={{ variant: 'h5' }} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
};

export default Navbar;