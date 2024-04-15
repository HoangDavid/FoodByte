import {useState}  from 'react';
import getRecipes from "../services/recipeAPI";

export const Recipe = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
  
    const handleSearch = async () => {
      const data = await getRecipes(query);
      if (data) setRecipes(data.hits); // Assuming the API returns an object with a 'hits' array
    };

    return (
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes"
        />
        <button onClick={handleSearch}>Search</button>
        <ul>
          {recipes.map((item, index) => (
            <li key={index}>{item.recipe.label}</li> // Display recipe titles
          ))}
        </ul>
      </div>
    );
};
export default Recipe;