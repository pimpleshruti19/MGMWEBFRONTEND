import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const ManageEvents = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    
    // Form state
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [type, setType] = useState('news');
    const [imageFile, setImageFile] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);

    const { token } = useAuth();

    // THIS IS THE FUNCTION THAT IS CURRENTLY BROKEN
    const fetchEvents = async () => {
        try {
            // Ensure this line uses the environment variable and backticks
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/events`);
            setEvents(res.data);
        } catch (err) {
            setError('Failed to fetch events.');
            console.error("Fetch Events Error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const formData = new FormData();
        formData.append('title', title);
        formData.append('date', date);
        formData.append('description', description);
        formData.append('link', link);
        formData.append('type', type);
        if (imageFile) {
            formData.append('image', imageFile);
        }
        if (pdfFile) {
            formData.append('pdf', pdfFile);
        }
        
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/events`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            setEvents([res.data, ...events]);
            setTitle(''); setDate(''); setDescription(''); setLink(''); setType('news');
            setImageFile(null); setPdfFile(null);
            document.getElementById('image-input').value = null;
            document.getElementById('pdf-input').value = null;

        } catch (err) {
            setError('Failed to add event. Please try again.');
            console.error("Submit Event Error:", err);
        }
    };

    // THIS FUNCTION ALSO NEEDS TO BE CHECKED
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            try {
                // Ensure this line uses the environment variable and backticks
                await axios.delete(`${import.meta.env.VITE_API_URL}/api/events/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setEvents(events.filter(event => event._id !== id));
            } catch (err) {
                setError('Failed to delete event.');
                console.error("Delete Event Error:", err);
            }
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Manage News & Events</h1>

            {/* Add New Event Form */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div><label className="block text-sm font-medium text-gray-700">Title</label><input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" /></div>
                    <div><label className="block text-sm font-medium text-gray-700">Date</label><input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" /></div>
                    <div><label className="block text-sm font-medium text-gray-700">Description</label><textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows="3" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea></div>
                    <div><label className="block text-sm font-medium text-gray-700">Link (Optional)</label><input type="url" value={link} onChange={(e) => setLink(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" /></div>
                    <div><label className="block text-sm font-medium text-gray-700">Type</label><select value={type} onChange={(e) => setType(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"><option value="news">News</option><option value="event">Event</option></select></div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image (Optional, jpg/png)</label>
                        <input id="image-input" type="file" accept="image/jpeg, image/png" onChange={(e) => setImageFile(e.target.files[0])} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">PDF Document (Optional)</label>
                        <input id="pdf-input" type="file" accept="application/pdf" onChange={(e) => setPdfFile(e.target.files[0])} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                    </div>

                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add Item</button>
                </form>
            </div>

            {/* Current Events List */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Current Items</h2>
                {isLoading ? <p>Loading...</p> : (
                    <div className="space-y-4">
                        {events.map(event => (
                            <div key={event._id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold">{event.title} <span className="text-xs font-normal text-gray-500 uppercase bg-gray-100 p-1 rounded">{event.type}</span></h3>
                                    <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                                    <div className="flex gap-4 mt-2">
                                        {event.imageUrl && <a href={event.imageUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">View Image</a>}
                                        {event.pdfUrl && <a href={event.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-red-500 hover:underline">View PDF</a>}
                                    </div>
                                </div>
                                <button onClick={() => handleDelete(event._id)} className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600">Delete</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageEvents;