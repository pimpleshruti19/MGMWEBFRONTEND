// src/pages/Academic/Mechanical/MechanicalConsultancyPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mechanicalDepartmentTabs, mechanicalConsultancyResources } from './mechanicalConstants'; // Import consultancy data

const MechanicalConsultancyPage = () => {
  const location = useLocation();

  // State to manage which accordion item is open
  const [openSection, setOpenSection] = useState('consultancy-section'); // Default open: Consultancy

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Consultancy & Resources</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Expertise offered and valuable learning resources from the Mechanical Engineering Department.
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9h-3M8 21h8m-4 2v-4"></path>
          </svg>
          Departmental Consultancy & Resources
        </h2>

        <div className="space-y-4 prose prose-lg max-w-none text-gray-700 mt-10 print:text-sm">
          {mechanicalConsultancyResources.map((section) => (
            <div key={section.id} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
                onClick={() => toggleSection(section.id)}
              >
                <h3 className="text-xl font-semibold text-blue-700 text-left print:text-lg">
                  {section.title}
                </h3>
                <svg
                  className={`w-6 h-6 text-indigo-500 transition-transform duration-200 ${
                    openSection === section.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {openSection === section.id && (
                <div className="p-4 border-t border-gray-200 bg-white print:p-0 print:border-none">
                  {section.type === 'iframe' && (
                    <div className="space-y-4">
                      <div className="relative" style={{ paddingTop: '75%' }}> {/* 4:3 aspect ratio */}
                        <iframe
                          src={section.iframeSrc}
                          className="absolute inset-0 w-full h-full border rounded-md"
                          title={section.title}
                          allowFullScreen
                        ></iframe>
                      </div>
                      <p className="text-center print:hidden">
                        <a href={section.iframeSrc} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:underline font-medium">
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-2a1 1 0 10-2 0v2H5V7h2a1 1 0 000-2H5z"></path></svg>
                          {section.linkText || `View ${section.title}`}
                        </a>
                      </p>
                      <p className="hidden print:block text-center text-gray-800 text-sm">
                        <a href={section.iframeSrc} className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">
                          {section.linkText || `View ${section.title}`} at {section.iframeSrc}
                        </a>
                      </p>
                    </div>
                  )}

                  {section.type === 'table' && section.tableData && (
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                          <tr>
                            {section.tableData.headers.map(header => (
                              <th key={header} scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {section.tableData.rowsByYear.map(yearData => (
                            <React.Fragment key={yearData.year}>
                              <tr className="bg-blue-50">
                                <th colSpan={section.tableData.headers.length} className="px-6 py-2 text-center text-sm font-semibold text-blue-800">
                                  {yearData.year}
                                </th>
                              </tr>
                              {yearData.projects.map(project => (
                                <tr key={`${yearData.year}-${project.srNo}`}>
                                  <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-900">{project.srNo}</td>
                                  <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-700">{project.title}</td>
                                  <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-700">{project.agency}</td>
                                  <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-700">{project.amount}</td>
                                </tr>
                              ))}
                            </React.Fragment>
                          ))}
                          <tr className="bg-gray-200 font-bold">
                            <td colSpan={section.tableData.headers.length - 1} className="px-6 py-4 text-center text-sm text-gray-800">
                              {section.tableData.total.label}
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-800">
                              {section.tableData.total.amount}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MechanicalConsultancyPage;