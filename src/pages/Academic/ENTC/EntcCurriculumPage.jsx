// src/pages/Academic/Entc/EntcCurriculumPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  entcDepartmentTabs,
  entcCurriculumSyllabus,
  entcCurriculumAssignments,
  entcCurriculumResources,
  entcCurriculumOtherDownloads,
} from './entcConstants';

const EntcCurriculumPage = () => {
  const location = useLocation();
  const [openSection, setOpenSection] = useState('syllabus'); // Default to 'syllabus' open

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const renderDownloadTable = (items, keyPrefix) => (
    <div className="overflow-x-auto relative rounded-lg border border-gray-200">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs text-white uppercase bg-indigo-600">
          <tr>
            <th scope="col" className="py-3 px-4 rounded-tl-lg">Sr.No</th>
            <th scope="col" className="py-3 px-4">Heading</th>
            <th scope="col" className="py-3 px-4 rounded-tr-lg text-center">Download</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item, index) => (
              <tr key={`${keyPrefix}-${index}`} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors duration-150`}>
                <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">{item.srNo}</td>
                <td className="py-3 px-4 text-gray-800">{item.heading}</td>
                <td className="py-3 px-4 text-center">
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:underline print:text-gray-700">
                    <img src="/images/download-icon.png" alt="Download Icon" className="w-5 h-5 mr-1" />
                    Download
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="py-4 px-4 text-center text-gray-500 italic">No items available in this section.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Curriculum & Downloads</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Access academic syllabi and other important departmental documents.
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
          Curriculum & Related Downloads
        </h2>

        {/* Syllabus Section */}
        <div className="space-y-4 prose prose-lg max-w-none text-gray-700 mt-10 print:text-sm">
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              onClick={() => toggleSection('syllabus')}
            >
              <h3 className="text-xl font-semibold text-blue-700 text-left print:text-lg">
                Syllabus
              </h3>
              <img
                id="imgsyllabus"
                src={openSection === 'syllabus' ? '/images/details_close.png' : '/images/details_open.png'}
                alt="Toggle"
                className="w-6 h-6"
              />
            </button>
            {openSection === 'syllabus' && (
              <div className="p-4 border-t border-gray-200 bg-white print:p-0 print:border-none">
                {entcCurriculumSyllabus.map((category, catIndex) => (
                  <div key={catIndex} className="mb-6 last:mb-0">
                    <h4 className="text-lg font-bold text-indigo-700 mb-3 border-b border-indigo-100 pb-2 print:text-base">
                      {category.category}
                    </h4>
                    {renderDownloadTable(category.links, `syllabus-cat-${catIndex}`)}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Assignments Section (Empty in source HTML) */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              onClick={() => toggleSection('assignments')}
            >
              <h3 className="text-xl font-semibold text-blue-700 text-left print:text-lg">
                Assignments
              </h3>
              <img
                id="imgassignments"
                src={openSection === 'assignments' ? '/images/details_close.png' : '/images/details_open.png'}
                alt="Toggle"
                className="w-6 h-6"
              />
            </button>
            {openSection === 'assignments' && (
              <div className="p-4 border-t border-gray-200 bg-white print:p-0 print:border-none">
                {renderDownloadTable(entcCurriculumAssignments, 'assignments')}
              </div>
            )}
          </div>

          {/* Resources Section (Empty in source HTML) */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              onClick={() => toggleSection('resources')}
            >
              <h3 className="text-xl font-semibold text-blue-700 text-left print:text-lg">
                Resources
              </h3>
              <img
                id="imgresources"
                src={openSection === 'resources' ? '/images/details_close.png' : '/images/details_open.png'}
                alt="Toggle"
                className="w-6 h-6"
              />
            </button>
            {openSection === 'resources' && (
              <div className="p-4 border-t border-gray-200 bg-white print:p-0 print:border-none">
                {renderDownloadTable(entcCurriculumResources, 'resources')}
              </div>
            )}
          </div>

          {/* Other Downloads Section */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              onClick={() => toggleSection('other-downloads')}
            >
              <h3 className="text-xl font-semibold text-blue-700 text-left print:text-lg">
                Other Downloads
              </h3>
              <img
                id="imgother"
                src={openSection === 'other-downloads' ? '/images/details_close.png' : '/images/details_open.png'}
                alt="Toggle"
                className="w-6 h-6"
              />
            </button>
            {openSection === 'other-downloads' && (
              <div className="p-4 border-t border-gray-200 bg-white print:p-0 print:border-none">
                {renderDownloadTable(entcCurriculumOtherDownloads, 'other-downloads')}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntcCurriculumPage;