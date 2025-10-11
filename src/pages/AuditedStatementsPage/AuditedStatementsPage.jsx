// src/pages/admissions/AuditedStatementsPage.jsx

import React from 'react';

// Data for Audited Statements documents
const auditedStatementsData = [
  {
    srNo: 1,
    title: "Balance sheet 2023-24",
    downloadLink: "http://mgmcen.ac.in/images/department/download-20241911174408.pdf"
  },
  {
    srNo: 2,
    title: "Balance sheet 2020-21",
    downloadLink: "http://mgmcen.ac.in/images/department/Balance%20sheet%202020-21.pdf"
  },
  {
    srNo: 3,
    title: "Balance sheet 2021-22",
    downloadLink: "http://mgmcen.ac.in/images/department/Balance%20sheet%202021-22.pdf"
  },
  {
    srNo: 4,
    title: "Balance sheet 2022-23",
    downloadLink: "http://mgmcen.ac.in/images/department/Balance%20sheet%202022-23.pdf"
  }
];

const AuditedStatementsPage = () => {
  return (
    // Outer container matching established theme
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with other pages */}
        <header className="mb-8" aria-labelledby="audited-statements-title">
          <h1 id="audited-statements-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            Audited Statements
          </h1>
        </header>

        {/* Main content section - Consistent with other pages' content wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="Audited Statements Documents">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Download Audited Statements
            </h2>
            
            {/* Documents Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <caption className="sr-only">Table listing various audited statements.</caption>
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="border border-gray-300 p-3 text-center font-semibold text-gray-700 w-[8%]">Sr.No</th>
                    <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[80%]">Title</th>
                    <th scope="col" className="border border-gray-300 p-3 text-center font-semibold text-gray-700 w-[12%]">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {auditedStatementsData.map((doc, index) => (
                    <tr key={doc.srNo} className={`transition-colors duration-150 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                      <td className="border border-gray-300 p-3 text-center font-medium text-gray-600">{doc.srNo}</td>
                      <td className="border border-gray-300 p-3 text-left text-gray-700">{doc.title}</td>
                      <td className="border border-gray-300 p-3 text-center">
                        <a 
                          href={doc.downloadLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:underline inline-flex items-center gap-1"
                          title="Download"
                        >
                          {/* Using FontAwesome for consistency with header, if available. */}
                          <i className="fas fa-download"></i> 
                          <span className="sr-only">Download {doc.title}</span> {/* Accessibility for the icon */}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AuditedStatementsPage;