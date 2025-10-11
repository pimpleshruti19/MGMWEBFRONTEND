// src/pages/Academic/Entc/EntcProgrammesPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  entcDepartmentTabs,
  entcProgrammesCourses,
  entcProgrammesCommitteeLinks,
  entcCourseOutcomesLinks,
} from './entcConstants'; // Import data from constants

const EntcProgrammesPage = () => {
  const location = useLocation();

  // Reusable table rendering function for generic table structure
  const renderTable = (headers, data, keyPrefix) => (
    <div className="overflow-x-auto relative shadow-md rounded-lg my-6 border border-gray-300">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs text-white uppercase bg-indigo-700">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className={`py-3 px-4 md:px-6 ${index === 0 ? 'rounded-tl-lg' : ''} ${index === headers.length - 1 ? 'rounded-tr-lg' : ''} whitespace-nowrap`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={`${keyPrefix}-${rowIndex}`} className={`${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors duration-150`}>
              {Object.values(row).map((value, colIndex) => (
                <td key={`${keyPrefix}-${rowIndex}-${colIndex}`} className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-pre-line">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 mt-32 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Electronics & Telecommunication Engineering Programmes</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          A comprehensive list of undergraduate and postgraduate courses.
          {/* IMPORTANT: The data displayed below is for Civil Engineering. Please update entcConstants.js with actual ENTC data. */}
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className={`mb-8 bg-white rounded-lg shadow-md transition-all duration-300`}>
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2 overflow-x-auto">
          {entcDepartmentTabs.map((tab) => {
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
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-indigo-800 border-b-2 border-indigo-200 pb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Programmes Offered
        </h2>

        {/* UG/PG Course Table */}
        {renderTable(
          ['Sr. No.', 'Course Name', 'Start Year', 'Duration (Years)', 'Type', 'Intake Capacity'],
          entcProgrammesCourses,
          'entc-course'
        )}

        {/* Course Outcomes Links */}
        <div className="my-8 pt-4 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Course Outcomes
          </h2>
          {entcCourseOutcomesLinks.length > 0 ? (
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              {entcCourseOutcomesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-700 hover:text-blue-900 hover:underline transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-10 10"></path></svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 italic text-center">No course outcomes links available.</p>
          )}
        </div>

        {/* Departmental Committee Links */}
        <div className="my-8 pt-4 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-1a1.99 1.99 0 00-1.8-2H18a2 2 0 01-2-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 01-2 2H2v1a1.99 1.99 0 00-1.8 2H22"></path></svg>
            Departmental Committee
          </h2>
          {entcProgrammesCommitteeLinks.length > 0 ? (
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              {entcProgrammesCommitteeLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-700 hover:text-blue-900 hover:underline transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-10 10"></path></svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 italic text-center">No departmental committee links available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EntcProgrammesPage;