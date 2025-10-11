import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationComponent from '../../components/LocationComponent.jsx';

// A simple loading spinner component
const LoadingSpinner = () => (
    <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
);

const AboutUsPage = () => {
    const [pageContent, setPageContent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/pages/about-us`);
                setPageContent(res.data.content); // We store the 'content' object from the API response
            } catch (err) {
                setError('Failed to load page content. Please try again later.');
                console.error("Failed to load page content:", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchContent();
    }, []);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error || !pageContent) {
        return (
            <div className="container mx-auto px-4 py-8 mt-28 text-center">
                <h1 className="text-2xl font-bold text-red-600">Error</h1>
                <p className="text-gray-700">{error || 'Content could not be loaded.'}</p>
            </div>
        );
    }

    // Configuration for timeline colors to ensure Tailwind CSS includes these classes
    const timelineColorConfig = {
        blue: { border: 'border-blue-100', dot: 'border-blue-600', dotBg: 'bg-blue-600', title: 'text-blue-800', descBorder: 'border-blue-600', descBg: 'from-blue-50 to-indigo-50' },
        indigo: { border: 'border-indigo-100', dot: 'border-indigo-600', dotBg: 'bg-indigo-600', title: 'text-indigo-800', descBorder: 'border-indigo-600', descBg: 'from-indigo-50 to-purple-50' },
        purple: { border: 'border-purple-100', dot: 'border-purple-600', dotBg: 'bg-purple-600', title: 'text-purple-800', descBorder: 'border-purple-600', descBg: 'from-purple-50 to-pink-50' }
    };
    const colorKeys = Object.keys(timelineColorConfig);

    return (
        <div className="container mx-auto px-4 py-6 mt-24">
            {/* Compact Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl p-6 text-white mb-8 shadow-lg">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{pageContent.hero?.title}</h1>
                <p className="text-lg opacity-90 leading-relaxed">{pageContent.hero?.subtitle}</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <div className="w-full">
                    {/* SECTION 1: College Overview */}
                    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-indigo-800 border-b border-indigo-200 pb-2">{pageContent.legacy?.title}</h2>
                        <div className="flex flex-col md:flex-row gap-5 items-start mb-6">
                            <div className="md:w-1/3">
                                <img src={pageContent.legacy?.imageUrl} alt="MGM College of Engineering Campus" className="w-full h-48 object-cover rounded-lg shadow-md" />
                            </div>
                            <div className="md:w-2/3">
                                {pageContent.legacy?.paragraphs?.map((para, index) => (
                                    <p key={index} className="text-gray-700 leading-relaxed mb-3 text-sm">{para}</p>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {pageContent.legacy?.infoBoxes?.map((box, index) => (
                                <div key={index} className={`rounded-lg p-4 border-l-4 ${index === 0 ? 'bg-blue-50 border-blue-500' : 'bg-green-50 border-green-500'}`}>
                                    <h3 className={`text-lg font-semibold mb-2 ${index === 0 ? 'text-blue-800' : 'text-green-800'}`}>{box.title}</h3>
                                    <p className="text-gray-700 text-sm">{box.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SECTION 2: Enhanced History and Milestones */}
                    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-indigo-800 border-b border-indigo-200 pb-2">{pageContent.journey?.title}</h2>
                        <div className="text-gray-800 leading-relaxed space-y-4">
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-700">
                                <p className="font-bold text-xl text-blue-800">{pageContent.journey?.sectionTitle}</p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <div className="w-full md:w-2/5">
                                    <img src={pageContent.journey?.imageUrl} alt="About College" className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />
                                </div>
                                <div className="w-full md:w-3/5 space-y-3">
                                    {pageContent.journey?.paragraphs?.map((para, index) => (
                                        <p key={index} className="text-sm" dangerouslySetInnerHTML={{ __html: para }} />
                                    ))}
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg mt-6 text-center">
                                <img src={pageContent.journey?.bannerImage?.url} alt="MGM Campus View" className="w-full max-w-2xl h-48 object-cover mx-auto block rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />
                                <p className="mt-3 text-gray-600 italic text-sm">{pageContent.journey?.bannerImage?.caption}</p>
                            </div>

                            {/* Enhanced Timeline Section */}
                            {pageContent.timeline && (
                                <div className="mt-8 pt-6 border-t border-indigo-100">
                                    <h3 className="text-xl font-semibold text-indigo-700 mb-6 text-center">{pageContent.timeline?.title}</h3>
                                    <div className="relative max-w-4xl mx-auto">
                                        <div className="absolute left-6 md:left-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-600 transform -translate-x-1/2 shadow-lg rounded-full"></div>
                                        <div className="space-y-12">
                                            {pageContent.timeline.items?.map((item, index) => {
                                                const isEven = index % 2 === 0;
                                                const color = timelineColorConfig[colorKeys[index % colorKeys.length]];
                                                return (
                                                    <div key={index} className="relative flex flex-col md:flex-row items-center">
                                                        <div className={`md:w-1/2 mb-4 md:mb-0 ${!isEven ? 'md:order-2 md:pl-12 md:text-left' : 'md:pr-12 md:text-right'}`}>
                                                            <div className={`bg-white p-5 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ${color.border}`}>
                                                                <div className={`flex items-center gap-3 mb-2 ${isEven ? 'justify-end md:justify-start md:flex-row-reverse' : 'justify-start'}`}>
                                                                    <div className={`w-3 h-3 rounded-full ${color.dotBg}`}></div>
                                                                    <h4 className={`text-xl font-bold ${color.title}`}>{item.year}</h4>
                                                                </div>
                                                                <p className="text-gray-700 font-medium">{item.title}</p>
                                                                <p className="text-gray-600 text-sm mt-1">{item.subtitle}</p>
                                                            </div>
                                                        </div>
                                                        <div className={`absolute left-6 md:left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 shadow-xl z-10 ${color.dot}`}></div>
                                                        <div className={`md:w-1/2 ${!isEven ? 'md:order-1 md:pr-12' : 'md:pl-12'}`}>
                                                            <div className={`bg-gradient-to-r p-5 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ${color.descBorder} ${color.descBg}`}>
                                                                <p className="text-gray-800 font-medium">{item.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Location Component */}
            <div className="mt-8">
                <LocationComponent />
            </div>
        </div>
    );
};

export default AboutUsPage;