// src/pages/Academic/Mechanical/MechanicalResearchPublicationPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mechanicalDepartmentTabs, mechanicalResearchPublicationsSummary, mechanicalResearchPublications } from './mechanicalConstants'; // Import research data

const MechanicalResearchPublicationPage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/mechanical-engineering";

  // State to manage which accordion section is open
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Optionally open the section after scrolling
      setOpenCategory(id);
    }
  };

  const renderPaperTable = (papers, type) => {
    const isJournal = type.includes('Journal');
    const columns = [
      { header: 'Sr. No.', field: 'srNo', width: '5%', align: 'center' },
      { header: 'Name of Author(s)', field: 'authors', width: '15%', align: 'left' },
      { header: 'Full Title of the Paper', field: 'title', width: '20%', align: 'left' },
      { header: isJournal ? 'Journal Name' : 'Conference Name', field: isJournal ? 'journalName' : 'conferenceName', width: '15%', align: 'left' },
      { header: 'Volume No', field: 'volumeNo', width: '10%', align: 'center' },
      { header: 'Issue No.', field: 'issueNo', width: '10%', align: 'center' },
      { header: 'Year of Publication', field: 'year', width: '10%', align: 'center' },
      { header: 'From Page To Page (pp)', field: 'pageRange', width: '10%', align: 'center' },
    ];

    if (!isJournal) { // Adjust columns for conferences
        const conferenceColumns = [
            { header: 'Sr. No.', field: 'srNo', width: '5%', align: 'center' },
            { header: 'Name of Author(s)', field: 'authors', width: '19%', align: 'left' },
            { header: 'Full Title of the Paper', field: 'title', width: '29%', align: 'left' },
            { header: 'Conference Name', field: 'conferenceName', width: '14%', align: 'left' },
            { header: 'Conference held at', field: 'heldAt', width: '14%', align: 'left' },
            { header: 'Duration of Conference', field: 'duration', width: '14%', align: 'left' },
        ];
        // Handle a specific edge case from HTML data: "Duration of Conference" sometimes includes "pp"
        if (papers.some(p => p.duration && p.duration.includes('pp '))) {
            return (
                <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 mb-6 print:shadow-none print:border print:rounded-none">
                    <table className="w-full text-sm text-left text-gray-700 print:text-xxs">
                        <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800 print:bg-gray-800">
                            <tr>
                                <th scope="col" className="py-2 px-2 print:py-1 print:px-1">Sr. No.</th>
                                <th scope="col" className="py-2 px-2 print:py-1 print:px-1">Name of Author(s)</th>
                                <th scope="col" className="py-2 px-2 print:py-1 print:px-1">Full Title of the Paper</th>
                                <th scope="col" className="py-2 px-2 print:py-1 print:px-1">Conference Name</th>
                                <th scope="col" className="py-2 px-2 print:py-1 print:px-1">Conference held at</th>
                                <th scope="col" className="py-2 px-2 print:py-1 print:px-1">Duration of Conference</th>
                                <th scope="col" className="py-2 px-2 print:py-1 print:px-1">From Page To Page (pp)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {papers.map((paper, i) => (
                                <tr key={i} className={`${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                                    <td className="py-2 px-2 text-center print:py-1 print:px-1">{paper.srNo}</td>
                                    <td className="py-2 px-2 whitespace-pre-line print:py-1 print:px-1">{paper.authors}</td>
                                    <td className="py-2 px-2 whitespace-pre-line print:py-1 print:px-1">{paper.title}</td>
                                    <td className="py-2 px-2 whitespace-pre-line print:py-1 print:px-1">{paper.conferenceName}</td>
                                    <td className="py-2 px-2 whitespace-pre-line print:py-1 print:px-1">{paper.heldAt}</td>
                                    <td className="py-2 px-2 whitespace-pre-line print:py-1 print:px-1">
                                        {paper.duration?.split('\n').filter(line => !line.includes('pp ')).join('\n') || ''}
                                    </td>
                                    <td className="py-2 px-2 whitespace-pre-line text-center print:py-1 print:px-1">
                                        {paper.duration?.split('\n').find(line => line.includes('pp '))?.replace('pp ', '') || ''}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        } else { // Standard conference layout
            return (
                <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 mb-6 print:shadow-none print:border print:rounded-none">
                    <table className="w-full text-sm text-left text-gray-700 print:text-xxs">
                        <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800 print:bg-gray-800">
                            <tr>
                                {conferenceColumns.map((col, i) => (
                                    <th key={i} scope="col" className={`py-2 px-2 print:py-1 print:px-1 ${col.align === 'center' ? 'text-center' : ''}`} style={{ width: col.width }}>
                                        {col.header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {papers.map((paper, i) => (
                                <tr key={i} className={`${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                                    <td className="py-2 px-2 text-center print:py-1 print:px-1">{paper.srNo}</td>
                                    <td className="py-2 px-2 whitespace-pre-line print:py-1 print:px-1">{paper.authors}</td>
                                    <td className="py-2 px-2 whitespace-pre-line print:py-1 print:px-1">{paper.title}</td>
                                    <td className="py-2 px-2 whitespace-pre-line print:py-1 print:px-1">{paper.conferenceName}</td>
                                    <td className="py-2 px-2 whitespace-pre-line print:py-1 print:px-1">{paper.heldAt}</td>
                                    <td className="py-2 px-2 whitespace-pre-line print:py-1 print:px-1">{paper.duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
    }

    // Standard journal layout
    return (
      <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 mb-6 print:shadow-none print:border print:rounded-none">
        <table className="w-full text-sm text-left text-gray-700 print:text-xxs">
          <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800 print:bg-gray-800">
            <tr>
              {columns.map((col, i) => (
                <th key={i} scope="col" className={`py-2 px-2 print:py-1 print:px-1 ${col.align === 'center' ? 'text-center' : ''}`} style={{ width: col.width }}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {papers.map((paper, i) => (
              <tr key={i} className={`${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                <td className="py-2 px-2 text-center print:py-1 print:px-1">{paper.srNo}</td>
                <td className="py-2 px-2 whitespace-pre-line print:py-1 print:px-1">{paper.authors}</td>
                <td className="py-2 px-2 whitespace-pre-line print:py-1 print:px-1">{paper.title}</td>
                <td className="py-2 px-2 whitespace-pre-line print:py-1 print:px-1">{paper.journalName}</td>
                <td className="py-2 px-2 text-center print:py-1 print:px-1">{paper.volumeNo}</td>
                <td className="py-2 px-2 text-center print:py-1 print:px-1">{paper.issueNo}</td>
                <td className="py-2 px-2 text-center print:py-1 print:px-1">{paper.year}</td>
                <td className="py-2 px-2 text-center print:py-1 print:px-1">{paper.pageRange}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          {/* Custom SVG for Research & Publication theme (e.g., scroll, magnifying glass) */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.88-7-7.93s3.05-7.44 7-7.93v15.86z"></path>
            <path d="M12 11h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c-.55 0-1 .45-1 1s-.45-1-1-1z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Research & Publication</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Showcasing scholarly work and contributions of our faculty.
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.205 5 7.5 5S4.168 5.477 3 6.253M12 6.253c1.168.804 2.152 1.987 2.872 3.345M12 6.253v13m0-13C13.168 5.477 14.795 5 16.5 5s3.332.477 4.5 1.253m-12 13C9.205 18.523 10.832 19 12 19s2.795-.477 4.5-1.253m-12 0c-1.168-.804-2.152-1.987-2.872-3.345m12 3.345c-1.168-.804-2.152-1.987-2.872-3.345"></path>
          </svg>
          Mechanical Engineering Research & Publication
        </h2>

        {/* Summary Links */}
        <div className="mb-8 p-4 bg-blue-50 rounded-lg shadow-sm border border-blue-100 print:bg-white print:p-0 print:border-none print:shadow-none">
          <h3 className="text-xl font-bold text-blue-800 mb-3 print:text-lg">Publication Summary:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {mechanicalResearchPublicationsSummary.map((summary, index) => (
              <li key={index}>
                <strong>Total Number of Papers in {summary.label}: </strong>
                <a
                  href={`#${summary.anchor}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(summary.anchor); }}
                  className="text-indigo-600 hover:underline cursor-pointer font-semibold print:text-gray-800"
                >
                  {summary.count.toString().padStart(2, '0')}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Accordion for each Publication Category */}
        <div className="space-y-6">
          {mechanicalResearchPublications.map((categoryData) => (
            <div key={categoryData.id} id={categoryData.id} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden anchor-target">
              <button
                className="flex justify-between items-center w-full p-4 bg-blue-100 hover:bg-blue-200 focus:outline-none transition-colors duration-200"
                onClick={() => toggleCategory(categoryData.id)}
              >
                <h3 className="text-xl font-bold text-blue-800 text-left print:text-lg">
                  Papers Published in {categoryData.category}
                </h3>
                <svg
                  className={`w-6 h-6 text-indigo-500 transition-transform duration-200 ${
                    openCategory === categoryData.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {openCategory === categoryData.id && (
                <div className="p-4 border-t border-gray-200 bg-white prose prose-lg max-w-none text-gray-700 print:text-sm">
                  {categoryData.facultyPublications.map((facultyPub, facultyIndex) => (
                    <div key={facultyIndex} className="mb-8">
                      <h4 className="text-lg font-bold text-indigo-700 mb-3 mt-4 print:text-base">{facultyPub.facultyName}</h4>
                      {renderPaperTable(facultyPub.papers, categoryData.category)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MechanicalResearchPublicationPage;