import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getResourcesByCategory, getCategories } from '../services/api';
import Header from '../components/Header';
import ResourceCard from '../components/ResourceCard';
import Loader from '../components/Loader';
import Message from '../components/Message';

export default function CategoryDetail() {
    const { id } = useParams();
    const [resources, setResources] = useState([]);
    const [categoryName, setCategoryName] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        getCategories()
            .then((res) => {
                const cat = res.data.find((c) => c.id === parseInt(id));
                setCategoryName(cat ? cat.name : 'Category');
            });

        getResourcesByCategory(id)
            .then((res) => setResources(res.data))
            .catch(() => setError('Failed to load resources'))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header title={`Resources: ${categoryName}`} showBack />

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 pt-10 pb-16">
                {/* Resource Content */}
                {loading && <Loader />}
                {error && <Message type="error">{error}</Message>}
                {!loading && !resources.length && !error && (
                    <Message type="info">No resources found for this category.</Message>
                )}
                {!loading && resources.length > 0 && (
                    <div className="grid gap-4 md:grid-cols-2">
                        {resources.map((res, index) => (
                            <ResourceCard key={res.id} resource={res} number={index + 1} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
