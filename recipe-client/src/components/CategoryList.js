import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/categories/');
                console.log('Fetched categories:', response.data); // Проверка полученных данных
                setCategories(response.data);
            } catch (err) {
                console.error('Error fetching categories:', err);
                setError('Failed to load categories');
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Categories</h1>
            {categories.length === 0 ? (
                <p>No categories available.</p>
            ) : (
                <ul>
                    {categories.map(category => (
                        <li key={category.id}>
                            <Link to={`/categories/${category.id}`}>{category.name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CategoryList;
