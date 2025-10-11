// src/pages/Academic/Entc/EntcResearchPublicationPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  entcDepartmentTabs,
  entcResearchPublicationsSummary,
  entcResearchPublications,
} from './entcConstants'; // Import research data

const EntcResearchPublicationPage = () => {
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset to account for fixed headers or sticky elements
      const offset = 100; // Adjust as needed
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const renderJournalTable = (papers, keyPrefix) => (
    <div className="overflow-x-auto relative shadow-md rounded-lg mb-6 border border-gray-200">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs text-white uppercase bg-indigo-600">
          <tr>
            <th scope="col" className="py-3 px-4 rounded-tl-lg">Sr. No.</th>
            <th scope="col" className="py-3 px-4">Name of Author(s)</th>
            <th scope="col" className="py-3 px-4">Full Title of the Paper</th>
            <th scope="col" className="py-3 px-4">Journal Name</th>
            <th scope="col" className="py-3 px-4">Volume No</th>
            <th scope="col" className="py-3 px-4">Issue No.</th>
            <th scope="col" className="py-3 px-4">Year of Publication</th>
            <th scope="col" className="py-3 px-4 rounded-tr-lg">From Page To Page (pp)</th>
          </tr>
        </thead>
        <tbody>
          {papers.map((paper, index) => (
            <tr key={`${keyPrefix}-${index}`} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors duration-150`}>
              <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">{paper.srNo}</td>
              <td className="py-3 px-4 text-gray-800 whitespace-pre-line">{paper.authors}</td>
              <td className="py-3 px-4 text-gray-800">{paper.title}</td>
              <td className="py-3 px-4 text-gray-800">{paper.journalName}</td>
              <td className="py-3 px-4 text-gray-800">{paper.volumeNo}</td>
              <td className="py-3 px-4 text-gray-800">{paper.issueNo}</td>
              <td className="py-3 px-4 text-gray-800">{paper.year}</td>
              <td className="py-3 px-4 text-gray-800">{paper.pageRange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderConferenceTable = (papers, keyPrefix) => (
    <div className="overflow-x-auto relative shadow-md rounded-lg mb-6 border border-gray-200">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs text-white uppercase bg-indigo-600">
          <tr>
            <th scope="col" className="py-3 px-4 rounded-tl-lg">Sr. No.</th>
            <th scope="col" className="py-3 px-4">Name of Author(s)</th>
            <th scope="col" className="py-3 px-4">Full Title of the Paper</th>
            <th scope="col" className="py-3 px-4">Conference Name</th>
            <th scope="col" className="py-3 px-4">Conference Held At</th>
            <th scope="col" className="py-3 px-4 rounded-tr-lg">Duration / Date</th>
            {papers.some(p => p.isbnNo) && <th scope="col" className="py-3 px-4">ISBN No.</th>}
          </tr>
        </thead>
        <tbody>
          {papers.map((paper, index) => (
            <tr key={`${keyPrefix}-${index}`} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors duration-150`}>
              <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">{paper.srNo}</td>
              <td className="py-3 px-4 text-gray-800 whitespace-pre-line">{paper.authors}</td>
              <td className="py-3 px-4 text-gray-800">{paper.title}</td>
              <td className="py-3 px-4 text-gray-800">{paper.conferenceName}</td>
              <td className="py-3 px-4 text-gray-800 whitespace-pre-line">{paper.heldAt}</td>
              <td className="py-3 px-4 text-gray-800 whitespace-pre-line">{paper.duration}</td>
              {papers.some(p => p.isbnNo) && <td className="py-3 px-4 text-gray-800">{paper.isbnNo || 'N/A'}</td>}
            </tr>
          ))}
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Research & Publication</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Scholarly contributions and research output from the Electronics & Telecommunication Engineering Department.
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
          Department Research & Publications
        </h2>

        {/* Publication Summary */}
        <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-100 print:bg-white print:border print:p-4">
          <p className="text-gray-700 mb-4 font-semibold text-center text-lg print:text-base">
            * Please click on number to scroll down
          </p>
          <ul className="list-none space-y-3 text-gray-800 font-medium text-lg md:text-xl text-center">
            {entcResearchPublicationsSummary.map((summary, index) => (
              <li key={index}>
                <strong>{summary.label}:{' '}
                  <a
                    href={`#${summary.anchor}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(summary.anchor); }}
                    className="text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer"
                  >
                    {summary.count}
                  </a>
                </strong>
              </li>
            ))}
          </ul>
        </div>

        {/* Dynamic Publication Sections */}
        {entcResearchPublications.map((section) => (
          <section key={section.id} id={section.id} className="mb-10 scroll-mt-24"> {/* scroll-mt-24 to adjust for sticky header */}
            <h3 className="text-2xl font-bold text-indigo-700 mb-6 border-b-2 border-indigo-50 pb-2 print:text-xl">
              {section.category}
            </h3>

            {section.facultyPublications.map((faculty, facIndex) => (
              <div key={facIndex} className="bg-gray-50 rounded-lg shadow-sm p-5 mb-6 border border-gray-100 print:shadow-none print:border print:p-3">
                <h4 className="text-xl font-semibold text-purple-700 mb-4 print:text-lg">
                  {faculty.facultyName}
                </h4>
                {section.category.includes('Journal') ? (
                  renderJournalTable(faculty.papers, `${section.id}-${facIndex}-journal`)
                ) : (
                  renderConferenceTable(faculty.papers, `${section.id}-${facIndex}-conference`)
                )}
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default EntcResearchPublicationPage;