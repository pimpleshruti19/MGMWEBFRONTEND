// src/pages/Academic/Mechanical/MechanicalDepartmentalActivityPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mechanicalDepartmentTabs, mechanicalDepartmentalActivities } from './mechanicalConstants';

const MechanicalDepartmentalActivityPage = () => {
  const location = useLocation();
  // State to manage which accordion item is open
  const [openActivityId, setOpenActivityId] = useState(null);

  const toggleActivity = (id) => {
    setOpenActivityId(openActivityId === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          {/* Custom SVG for Departmental Activity theme (gears for activity/management) */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Departmental Activities</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Explore the various events, workshops, and initiatives conducted by the Mechanical Engineering Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
          {mechanicalDepartmentTabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={`p-3 text-center rounded-md transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium
                  ${isActive
                    ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-300 shadow-inner'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600 border border-gray-200'
                  }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
          </svg>
          Departmental Activities
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 mt-10 print:text-sm">
          <div className="space-y-4">
            {mechanicalDepartmentalActivities.map((activity) => (
              <div key={activity.id} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
                  onClick={() => toggleActivity(activity.id)}
                >
                  <h3 className="text-xl font-semibold text-blue-700 text-left">
                    {activity.title}
                    {activity.date && <span className="block text-sm text-gray-500 font-normal">({activity.date})</span>}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-indigo-500 transition-transform duration-200 ${
                      openActivityId === activity.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {openActivityId === activity.id && (
                  <div className="p-4 border-t border-gray-200 bg-white">
                    {activity.type === 'pdf' && activity.pdf && (
                      <div className="space-y-4">
                        <iframe
                          src={activity.pdf.src}
                          className="w-full h-96 border rounded-md"
                          title={activity.title}
                        ></iframe>
                        <p className="text-center">
                          <a
                            href={activity.pdf.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-medium"
                          >
                            {activity.pdf.linkText || 'Open PDF in new page'}
                          </a>
                        </p>
                      </div>
                    )}

                    {(activity.type === 'text' || activity.type === 'rich-text') && activity.content && (
                      <div className="space-y-4">
                        <p className="leading-relaxed whitespace-pre-line">{activity.content}</p>
                        {activity.resourcePerson && (
                          <p>
                            <strong className="text-gray-800">Resource Person:</strong>{' '}
                            <span className="whitespace-pre-line">{activity.resourcePerson}</span>
                          </p>
                        )}
                        {activity.images && activity.images.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {activity.images.map((img, imgIndex) => (
                              <div key={imgIndex} className="flex flex-col items-center">
                                <img
                                  src={img.src}
                                  alt={img.alt}
                                  className="max-w-full h-auto rounded-md object-cover border border-gray-200"
                                  style={{ maxHeight: '350px' }}
                                />
                                {img.caption && <p className="text-sm text-gray-500 mt-2 text-center">{img.caption}</p>}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {activity.type === 'long-description-with-gallery' && activity.contentSections && (
                      <div className="space-y-6">
                        {activity.resourcePerson && (
                          <p>
                            <strong className="text-gray-800">Resource Person:</strong>{' '}
                            <span className="whitespace-pre-line">{activity.resourcePerson}</span>
                          </p>
                        )}
                        {activity.contentSections.map((section, secIndex) => (
                          <React.Fragment key={secIndex}>
                            {section.type === 'paragraph' && (
                              <p className="leading-relaxed">{section.text}</p>
                            )}
                            {section.type === 'list' && (
                              <ol className="list-decimal pl-8 space-y-1">
                                {section.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>{item}</li>
                                ))}
                              </ol>
                            )}
                            {section.type === 'image-with-caption' && (
                              <div className="flex flex-col items-center my-4">
                                <img
                                  src={section.src}
                                  alt={section.alt}
                                  className="max-w-full h-auto rounded-md object-cover border border-gray-200"
                                  style={{ maxHeight: '350px' }}
                                />
                                {section.caption && <p className="text-sm text-gray-500 mt-2 text-center">{section.caption}</p>}
                              </div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicalDepartmentalActivityPage;