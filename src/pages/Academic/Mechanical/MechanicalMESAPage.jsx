// src/pages/Academic/Mechanical/MechanicalMESAPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  mechanicalDepartmentTabs,
  mesaReports,
  ieStudentChapterReports,
  mesaArchiveData,
} from './mechanicalConstants'; // Import MESA constants

const MechanicalMESAPage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/mechanical-engineering";

  // State to manage accordion sections
  const [openSection, setOpenSection] = useState('mesa-reports'); // Default open: MESA Reports

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          {/* Custom SVG for MESA theme (e.g., gears) */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.44 12.99l-2.14-1.24c-.21-.12-.35-.35-.35-.6v-2.3c0-.25.14-.48.35-.6l2.14-1.24c.32-.18.72-.18.96 0l2.14 1.24c.21.12.35.35.35.6v2.3c0 .25-.14.48-.35.6l-2.14 1.24c-.32.18-.72.18-.96 0zm-14 0l-2.14-1.24c-.21-.12-.35-.35-.35-.6v-2.3c0-.25.14-.48.35-.6l2.14-1.24c.32-.18.72-.18.96 0l2.14 1.24c.21.12.35.35.35.6v2.3c0 .25-.14.48-.35.6l-2.14 1.24c-.32.18-.72.18-.96 0zm7 7.01l-2.14-1.24c-.21-.12-.35-.35-.35-.6v-2.3c0-.25.14-.48.35-.6l2.14-1.24c.32-.18.72-.18.96 0l2.14 1.24c.21.12.35.35.35.6v2.3c0 .25-.14.48-.35.6l-2.14 1.24c-.32.18-.72.18-.96 0z" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">MESA</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Mechanical Engineering Students' Association - fostering growth beyond academics.
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
            const isActive = location.pathname.includes(tab.path);
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h2a2 2 0 002-2V4a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2m4-12l3 3m0 0l3-3m-3 3V2m-2 16h8"></path>
          </svg>
          Mechanical Engineering Students' Association (MESA)
        </h2>

        {/* Accordion Sections */}
        <div className="space-y-4 mb-8">
          {/* MESA Reports Accordion Section */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              onClick={() => toggleSection('mesa-reports')}
            >
              <h3 className="text-xl font-semibold text-blue-700 text-left print:text-lg">
                MESA & IE Student Chapter Reports
              </h3>
              <svg
                className={`w-6 h-6 text-indigo-500 transition-transform duration-200 ${
                  openSection === 'mesa-reports' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {openSection === 'mesa-reports' && (
              <div className="p-4 border-t border-gray-200 bg-white prose prose-lg max-w-none text-gray-700 print:text-sm">
                <h4 className="font-bold text-lg text-indigo-700">MESA Reports</h4>
                <ul className="list-disc pl-8 space-y-2 mb-4">
                  {mesaReports.map((report, index) => (
                    <li key={index}>
                      <a href={report.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-bold print:text-gray-800">
                        MESA {report.year}
                      </a>
                    </li>
                  ))}
                </ul>
                 <h4 className="font-bold text-lg text-indigo-700 mt-4">Institution of Engineers Student Chapter</h4>
                 <ul className="list-disc pl-8 space-y-2">
                  {ieStudentChapterReports.map((report, index) => (
                    <li key={index}>
                      <a href={report.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-bold print:text-gray-800">
                        {report.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Old Archive Data Accordion Section */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              onClick={() => toggleSection('old-archive')}
            >
              <h3 className="text-xl font-semibold text-blue-700 text-left print:text-lg">
                Archive & Activity Details
              </h3>
              <svg
                className={`w-6 h-6 text-indigo-500 transition-transform duration-200 ${
                  openSection === 'old-archive' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {openSection === 'old-archive' && (
              <div className="p-4 border-t border-gray-200 bg-white prose prose-lg max-w-none text-gray-700 print:text-sm">
                <h3 className="text-2xl font-bold text-indigo-800 text-center mb-4 print:text-xl">{mesaArchiveData.title}</h3>
                <p className="text-center italic mb-4 print:text-sm">{mesaArchiveData.subtitle}</p>

                <h4 className="text-xl font-bold text-blue-700 mb-2 print:text-lg">About MESA</h4>
                {mesaArchiveData.about.map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                ))}
                <p className="mb-4 bg-indigo-50 p-3 rounded-lg border border-indigo-200">{mesaArchiveData.guidance}</p>

                <hr className="my-8 border-t-2 border-indigo-100 print:my-4" />

                {/* Events 2015-16 */}
                <h4 className="text-xl font-bold text-blue-700 mb-4 print:text-lg">{mesaArchiveData.events2015_16.title}</h4>
                <ul className="list-disc pl-8 space-y-3 mb-6">
                    {mesaArchiveData.events2015_16.events.map((event, index) => (
                        <li key={index}>
                            <strong>{event.name} ({event.date}):</strong> {event.description}
                        </li>
                    ))}
                </ul>
                
                {/* Expert Lectures 2014-15 */}
                <h4 className="text-xl font-bold text-blue-700 mb-4 print:text-lg">{mesaArchiveData.expertLectures2014_15.title}</h4>
                 <ul className="list-disc pl-8 space-y-2 mb-6">
                    {mesaArchiveData.expertLectures2014_15.lectures.map((lecture, index) => (
                        <li key={index}>{lecture}</li>
                    ))}
                </ul>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
                    {mesaArchiveData.expertLectures2014_15.images.map((img, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img src={img.src} alt={img.alt} className="max-w-full h-auto rounded-md shadow-md border" />
                            <p className="text-sm text-gray-600 mt-2 text-center">{img.alt}</p>
                        </div>
                    ))}
                </div>

                {/* MESA Activities 2014 */}
                <h4 className="text-xl font-bold text-blue-700 mt-8 mb-4 print:text-lg">{mesaArchiveData.mesaActivities2014.title}</h4>
                 <ul className="list-disc pl-8 space-y-2 mb-6">
                    {mesaArchiveData.mesaActivities2014.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                    ))}
                </ul>
                <div className="flex justify-center my-6">
                     <img src={mesaArchiveData.mesaActivities2014.image.src} alt={mesaArchiveData.mesaActivities2014.image.alt} className="max-w-full md:max-w-xl h-auto rounded-md shadow-lg border" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicalMESAPage;