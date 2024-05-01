import { useState } from 'react';
import getRecipes from "../services/recipeAPI";
import { TextField, Button, Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { RecipeType } from '../types/recipe';

export const Recipe = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState<RecipeType[]>([]);

    const handleSearch = async () => {
        const data = await getRecipes(query);
        if (data) setRecipes(data);
    };

    const handleCardClick = (url: string) => {
      window.open(url, '_blank');
    };

    return (
        <div style={{ maxWidth: '90%', marginLeft: '25%'}}>
            <TextField
                label="Search for recipes"
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button
                variant="contained"
                startIcon={<SearchIcon />}
                onClick={handleSearch}
            >
                Search
            </Button>
            <Grid container spacing={2} style={{ marginTop: 20}}>
                {recipes.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card onClick={() => handleCardClick(item.url)} style={{ cursor: 'pointer' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.image}
                                alt={item.label}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.label}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ whiteSpace: 'pre-line' }}>
                                    - {item.ingredients.map(ingredient => ingredient.text).join('\n - ')}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Recipe;