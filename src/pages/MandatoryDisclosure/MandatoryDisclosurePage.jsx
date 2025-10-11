// src/pages/admissions/MandatoryDisclosurePage.jsx

import React from 'react';

// Data for Mandatory Disclosure documents, organized by category
const mandatoryDisclosureData = [
  {
    categoryTitle: "Mandatory Disclosures",
    documents: [
      { title: "Mandatory Disclosure 2024-25", link: "https://mgmcen.ac.in/pdf/Mandatory%20Disclousre%20_2024-25%20new.pdf" },
      { title: "Mandatory Disclosure 2025-26", link: "https://mgmcen.ac.in/pdf/Mandatory%20Disclousre%20AY%202025-26.pdf" },
    ]
  },
  {
    categoryTitle: "UGC Recognition",
    documents: [
      { title: "2F recognition certificate", link: "https://mgmcen.ac.in/pdf/2F%20Recognition%20Certificate.pdf" },
    ]
  },
  {
    categoryTitle: "Faculty List",
    documents: [
      { title: "Faculty List 2024-25", link: "https://mgmcen.ac.in/pdf/Faculty%20Details%20AY%202024-25.pdf" },
      { title: "Faculty List 2023-24", link: "http://mgmcen.ac.in/pdf/Faculty%20List_240508_122412.pdf" },
    ]
  }
];

const MandatoryDisclosurePage = () => {
  return (
    // Outer container matching established theme
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with other pages */}
        <header className="mb-8" aria-labelledby="mandatory-disclosure-title">
          <h1 id="mandatory-disclosure-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            Mandatory Disclosure
          </h1>
        </header>

        {/* Main content section - Consistent with other pages' content wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="Mandatory Disclosure Documents">
          <div className="space-y-8">
            {mandatoryDisclosureData.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {category.categoryTitle}
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {category.documents.map((doc, docIndex) => (
                    <li key={docIndex} className="flex items-center">
                      <a 
                        href={doc.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline flex items-center gap-2"
                      >
                        {/* Using FontAwesome for consistency, assuming it's available */}
                        <i className="fas fa-file-pdf text-lg"></i>
                        <span>{doc.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MandatoryDisclosurePage;