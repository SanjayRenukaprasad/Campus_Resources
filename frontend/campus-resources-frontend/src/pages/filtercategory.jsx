import { useEffect, useState } from 'react';
import { getCategories } from '../services/api';
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';
import Loader from '../components/Loader';
import Message from '../components/Message';

export default function FilterableCategoryPage() {
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch categories
    useEffect(() => {
        getCategories()
            .then((res) => {
                setCategories(res.data);
                setFilteredCategories(res.data);
            })
            .catch(() => setError('Failed to load categories.'))
            .finally(() => setLoading(false));
    }, []);

    // Filter categories when dropdown changes
    useEffect(() => {
        if (!selectedCategoryId) {
            setFilteredCategories(categories);
        } else {
            const selected = categories.filter(cat => cat.id === selectedCategoryId);
            setFilteredCategories(selected);
        }
    }, [selectedCategoryId, categories]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header title="Campus Resources" />

            {/* Hero Section */}
            <section
                className="relative w-full"
                style={{
                    backgroundImage: "url('/homebg.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingLeft: '5%',
                }}
            >
                <div className="absolute inset-0 bg-white" style={{ opacity: 0.5 }} />
                <div className="relative z-10 text-white px-4 max-w-3xl">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                        Your Gateway to Campus Support
                    </h1>
                </div>
            </section>

            {/* Category Cards + Filter UI */}
            <section className="px-6 py-6 max-w-6xl mx-auto">
                {loading && <Loader />}
                {error && <Message type="error">{error}</Message>}
                {!loading && !error && filteredCategories.length === 0 && (
                    <Message type="info">No categories found.</Message>
                )}
                {!loading && !error && filteredCategories.length > 0 && (
                    <CategoryList
                        categories={filteredCategories}
                        allCategories={categories}
                        activeCategory={selectedCategoryId}
                        onCategoryChange={setSelectedCategoryId}
                    />
                )}
            </section>
        </div>
    );
}
