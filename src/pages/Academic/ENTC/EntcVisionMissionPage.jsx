// src/pages/Academic/Entc/EntcVisionMissionPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  entcDepartmentTabs,
  entcVision,
  entcMission,
  entcPEOs,
  entcPSOs,
  entcPOs,
} from './entcConstants'; // Import data from constants

const EntcVisionMissionPage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Vision & Mission</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Guiding principles and objectives of the Electronics & Telecommunication Engineering Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
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
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Vision, Mission & Outcomes
        </h2>

        {/* Vision and Mission Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 print:grid-cols-2 print:gap-4 print:mb-6">
          {/* Vision Section */}
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow print:shadow-none print:border print:p-4">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 mb-3 print:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-700 print:text-xl">Vision</h3>
            </div>
            <p className="text-gray-700 text-center leading-relaxed print:text-sm">
              {entcVision}
            </p>
          </div>

          {/* Mission Section */}
          <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100 hover:shadow-md transition-shadow print:shadow-none print:border print:p-4">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 mb-3 print:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-700 print:text-xl">Mission</h3>
            </div>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 pl-4 print:text-sm print:space-y-2">
              {entcMission.map((item, index) => (
                <li key={index} className="pl-2">
                  <strong>M{index + 1}:</strong> {item}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Program Specific Outcomes (PSOs) Section */}
        <div className="mb-8 p-6 bg-purple-50 rounded-xl border border-purple-100 hover:shadow-md transition-shadow print:shadow-none print:border print:p-4 print:mb-6">
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-700 mb-3 print:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-purple-700 print:text-xl">Program Specific Outcomes (PSOs)</h3>
          </div>
          <p className="text-gray-700 text-center font-semibold mb-4 print:text-sm">
            Graduates will be able to:
          </p>
          <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 pl-4 print:text-sm print:space-y-2">
            {entcPSOs.map((item, index) => (
              <li key={index} className="pl-2">
                <strong>PSO{index + 1}: </strong>{item}
              </li>
            ))}
          </ol>
        </div>

        {/* Program Educational Outcomes (PEOs) Section */}
        <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow print:shadow-none print:border print:p-4 print:mb-6">
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 mb-3 print:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-purple-700 print:text-xl">Program Educational Outcomes (PEOs)</h3>
          </div>
          <p className="text-gray-700 text-center font-semibold mb-4 print:text-sm">
            Graduates of Electronics and Telecommunication employed will:
          </p>
          <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 pl-4 print:text-sm print:space-y-2">
            {entcPEOs.map((item, index) => (
              <li key={index} className="pl-2">
                <strong>PEO {index + 1}:</strong> {item}
              </li>
            ))}
          </ol>
        </div>

        {/* Program Outcomes (POs) Section */}
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow print:shadow-none print:border print:p-4">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 mb-3 print:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-purple-700 print:text-xl">Program Outcomes [PO]</h3>
          </div>
          <ol className="list-decimal list-inside text-gray-700 space-y-4 pl-4 print:text-sm print:space-y-2">
            {entcPOs.map((item, index) => (
              <li key={index} className="pl-2 pb-2 border-b border-gray-200 last:border-b-0 print:border-b print:pb-1">
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default EntcVisionMissionPage;