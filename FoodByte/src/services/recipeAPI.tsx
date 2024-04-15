import axios from 'axios';

const API_ID = 'f3e0ca66';
const API_KEY = '9a6b3d0b7a9eacc36ca1a5881f623115';

const getRecipes = async (query: string) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return null;
  }
};

export default getRecipes;