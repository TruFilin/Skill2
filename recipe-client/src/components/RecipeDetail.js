import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/recipes/${id}/`);
                console.log('Fetched recipe:', response.data); // Проверка полученных данных
                setRecipe(response.data);
            } catch (err) {
                console.error('Error fetching recipe:', err);
                setError('Failed to load recipe');
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!recipe) {
        return <div>Recipe not found.</div>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
        </div>
    );
};

export default RecipeDetail;
