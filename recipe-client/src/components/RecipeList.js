import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const RecipeList = () => {
    const { id } = useParams();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/categories/${id}/recipes/`) // Полный URL
        .then(response => setRecipes(response.data))
        .catch(error => console.error('Error fetching recipes:', error));
      }, [id]);

    return (
        <div>
            <h1>Recipes</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
