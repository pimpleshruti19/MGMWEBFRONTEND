// src/pages/admin/ManagePages.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ManagePages = () => {
    const [pages, setPages] = useState([]); // Default to an empty array
    const [isLoading, setIsLoading] = useState(true); // Start in a loading state
    const [error, setError] = useState('');

useEffect(() => {
        const fetchPages = async () => {
            const apiUrl = `${import.meta.env.VITE_API_URL}/api/pages`;
            
            // --- DEBUG LOG 1 ---
            console.log("Attempting to fetch from URL:", apiUrl);

            try {
                const res = await axios.get(apiUrl);

                // --- DEBUG LOG 2 ---
                console.log("SUCCESS: Full axios response object:", res);
                
                // --- DEBUG LOG 3 ---
                console.log("SUCCESS: Data received from API:", res.data);

                setPages(res.data);
            } catch (err) {
                // --- DEBUG LOG 4 (if it fails) ---
                console.error("ERROR: The API call failed. Error object:", err);
                setError('Failed to fetch the list of pages.');
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchPages();
    }, []);
 // The empty dependency array ensures this runs only once on mount

    // Render a loading message
    if (isLoading) {
        return <p>Loading manageable pages...</p>;
    }

    // Render an error message
    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    // Main render when data is available
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Manage Page Content</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Select a Page to Edit</h2>
                <div className="space-y-3">
                    {pages.length > 0 ? (
                        pages.map(page => (
                            <div key={page._id} className="flex justify-between items-center p-3 border rounded-md hover:bg-gray-50">
                                <span className="font-medium">{page.pageTitle}</span>
                                <Link
                                    to={`/admin/pages/edit/${page.pageIdentifier}`}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm"
                                >
                                    Edit
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No manageable pages found in the database.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManagePages;