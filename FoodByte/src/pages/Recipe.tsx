import { useState } from 'react';
import getRecipes from "../services/recipeAPI";
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import { RecipeType } from '../types/recipe';
import { Col, Row, Space, Input, } from 'antd';
const { Search } = Input;

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
        <div className='container' style={{ minHeight: '100vh'}}>
            <Space direction="vertical" size="large">
            <h1 style={{ fontSize: '40px', color: "#1b4c47"}}>Recipe Finder!</h1>
            <Search
                placeholder="Search for recipes"
                size="large"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onSearch={handleSearch}
                style={{width: '50vh'}}
            />
        </Space>
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