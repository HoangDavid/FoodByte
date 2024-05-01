import axios from 'axios';
import { RecipeType } from '../types/recipe';

const API_ID = 'f3e0ca66';
const API_KEY = '9a6b3d0b7a9eacc36ca1a5881f623115';

const getRecipes = async (query: string): Promise<RecipeType[]> => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const recipes = response.data.hits.map((hit: any) => mapToRecipeType(hit.recipe));
    return recipes;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

const mapToRecipeType = (recipe: any): RecipeType => {
  return {
    uri: recipe.uri,
    label: recipe.label,
    image: recipe.image,
    images: recipe.images,
    source: recipe.source,
    url: recipe.url,
    shareAs: recipe.shareAs,
    yield: recipe.yield,
    dietLabels: recipe.dietLabels,
    healthLabels: recipe.healthLabels,
    cautions: recipe.cautions,
    ingredientLines: recipe.ingredientLines,
    ingredients: recipe.ingredients,
    calories: recipe.calories,
    glycemicIndex: recipe.totalNutrients?.GLYCEMIC_LOAD?.quantity || 0,
    inflammatoryIndex: recipe.totalNutrients?.INFLAMMATORY_INDEX?.quantity || 0,
    totalCO2Emissions: recipe.totalNutrients?.CO2_EMISSIONS?.quantity || 0,
    co2EmissionsClass: recipe.totalNutrients?.CO2_EMISSIONS?.unit || '',
    totalWeight: recipe.totalWeight,
    cuisineType: recipe.cuisineType,
    mealType: recipe.mealType,
    dishType: recipe.dishType,
    instructions: recipe.instructions || [],
    tags: recipe.tags || [],
    externalId: recipe.externalId,
    totalNutrients: recipe.totalNutrients,
    totalDaily: recipe.totalDaily,
    digest: recipe.digest
  };
};

export default getRecipes;