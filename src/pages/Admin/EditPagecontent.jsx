import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const EditPageContent = () => {
    const { pageIdentifier } = useParams();
    const navigate = useNavigate();
    const { token } = useAuth();

    const [pageData, setPageData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    // Fetch the page content when the component loads
    useEffect(() => {
        const fetchPageContent = async () => {
            try {
                setIsLoading(true);
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/pages/${pageIdentifier}`);
                setPageData(res.data);
            } catch (err) {
                setError('Failed to fetch page content.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPageContent();
    }, [pageIdentifier]);

    // Generic handler for nested properties within the 'content' object
    const handleContentChange = (section, field, value) => {
        setPageData(prevData => ({
            ...prevData,
            content: {
                ...prevData.content,
                [section]: {
                    ...prevData.content[section],
                    [field]: value,
                },
            },
        }));
    };
    
    // Handler for arrays of simple strings (like paragraphs)
    const handleParagraphChange = (section, index, value) => {
        const newParagraphs = [...pageData.content[section].paragraphs];
        newParagraphs[index] = value;
        handleContentChange(section, 'paragraphs', newParagraphs);
    };

    // Handler for arrays of objects (like infoBoxes or timeline items)
    const handleArrayObjectChange = (section, arrayName, index, field, value) => {
        const newArray = [...pageData.content[section][arrayName]];
        newArray[index] = { ...newArray[index], [field]: value };
        handleContentChange(section, arrayName, newArray);
    };


    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        setError('');
        try {
            const payload = {
                pageTitle: pageData.pageTitle,
                content: pageData.content // Send the entire updated content object
            };

            await axios.put(`${import.meta.env.VITE_API_URL}/api/pages/${pageIdentifier}`, payload, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            alert('Page updated successfully!');
            navigate('/admin/pages');

        } catch (err) {
            setError('Failed to update page. Please check the console and try again.');
            console.error(err);
        } finally {
            setIsSaving(false);
        }
    };
    
    if (isLoading) return <p>Loading editor...</p>;
    if (error && !pageData) return <p className="text-red-500">{error}</p>;
    if (!pageData) return <p>No data found for this page.</p>;

    const { content } = pageData; // Destructure for easier access

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Editing: {pageData.pageTitle}</h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-8">
                {/* --- GENERAL SETTINGS --- */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">General Settings</h2>
                    <label className="block text-sm font-medium text-gray-700">Page Title</label>
                    <input 
                        type="text" 
                        value={pageData.pageTitle} 
                        onChange={(e) => setPageData({...pageData, pageTitle: e.target.value})}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-lg font-bold"
                    />
                </div>

                {/* --- HERO SECTION --- */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Hero Section</h2>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input type="text" value={content.hero.title} onChange={(e) => handleContentChange('hero', 'title', e.target.value)} className="mt-1 block w-full p-2 border rounded-md"/>
                    <label className="block text-sm font-medium text-gray-700 mt-2">Subtitle</label>
                    <textarea value={content.hero.subtitle} onChange={(e) => handleContentChange('hero', 'subtitle', e.target.value)} rows="3" className="mt-1 block w-full p-2 border rounded-md"></textarea>
                </div>

                {/* --- LEGACY SECTION --- */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Legacy Section</h2>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input type="text" value={content.legacy.title} onChange={(e) => handleContentChange('legacy', 'title', e.target.value)} className="mt-1 block w-full p-2 border rounded-md"/>
                    <label className="block text-sm font-medium text-gray-700 mt-2">Image URL</label>
                    <input type="text" value={content.legacy.imageUrl} onChange={(e) => handleContentChange('legacy', 'imageUrl', e.target.value)} className="mt-1 block w-full p-2 border rounded-md"/>
                    {content.legacy.paragraphs.map((p, index) => (
                        <div key={index}>
                           <label className="block text-sm font-medium text-gray-700 mt-2">Paragraph {index + 1}</label>
                           <textarea value={p} onChange={(e) => handleParagraphChange('legacy', index, e.target.value)} rows="4" className="mt-1 block w-full p-2 border rounded-md"></textarea>
                        </div>
                    ))}
                    {content.legacy.infoBoxes.map((box, index) => (
                        <div key={index} className="p-3 mt-2 border rounded-md bg-gray-50">
                            <h3 className="font-semibold text-gray-600">Info Box {index + 1}</h3>
                            <label className="block text-xs font-medium text-gray-500 mt-1">Title</label>
                            <input type="text" value={box.title} onChange={(e) => handleArrayObjectChange('legacy', 'infoBoxes', index, 'title', e.target.value)} className="mt-1 block w-full p-2 border rounded-md text-sm"/>
                            <label className="block text-xs font-medium text-gray-500 mt-1">Text</label>
                            <textarea value={box.text} onChange={(e) => handleArrayObjectChange('legacy', 'infoBoxes', index, 'text', e.target.value)} rows="2" className="mt-1 block w-full p-2 border rounded-md text-sm"></textarea>
                        </div>
                    ))}
                </div>

                {/* Add more sections for 'journey' and 'timeline' following the same pattern */}


                {/* --- SUBMIT AREA --- */}
                <div className="pt-5 border-t">
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="flex gap-4">
                        <button type="submit" disabled={isSaving} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300">
                            {isSaving ? 'Saving...' : 'Save Changes'}
                        </button>
                        <button type="button" onClick={() => navigate('/admin/pages')} className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditPageContent;