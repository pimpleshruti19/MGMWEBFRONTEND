// src/pages/admissions/FeeStructurePage.jsx

import React from 'react';

// Data for Fee Structures
const feeStructures = [
  // 2025-26 - First Year Engineering
  {
    year: "2025-26",
    title: "Fee Structure First Year Engineering for the academic year 2025-26",
    headers: ["Sr. No.", "Particulars", "OPEN", "OBC/EWS/SEBC", "TFWS & NT/VJ/SBC", "Female Students whose income below 8 Lakh", "SC/ST"],
    rows: [
      { "Sr. No.": 1, "Particulars": "TUITION FEES", "OPEN": "107080", "OBC/EWS/SEBC": "53540", "TFWS & NT/VJ/SBC": "0", "Female Students whose income below 8 Lakh": "0", "SC/ST": "0" },
      { "Sr. No.": 2, "Particulars": "DEVELOPMENT FEES", "OPEN": "13920", "OBC/EWS/SEBC": "13920", "TFWS & NT/VJ/SBC": "13920", "Female Students whose income below 8 Lakh": "13920", "SC/ST": "0" },
      { "Sr. No.": 3, "Particulars": "Advance Fees (Refundable)", "OPEN": "0", "OBC/EWS/SEBC": "0", "TFWS & NT/VJ/SBC": "0", "Female Students whose income below 8 Lakh": "0", "SC/ST": "1000" },
      { "Sr. No.": 4, "Particulars": "Other Fees", "OPEN": "350", "OBC/EWS/SEBC": "350", "TFWS & NT/VJ/SBC": "350", "Female Students whose income below 8 Lakh": "350", "SC/ST": "350" },
      { "Sr. No.": '', "Particulars": "TOTAL FEES", "OPEN": "121350", "OBC/EWS/SEBC": "67810", "TFWS & NT/VJ/SBC": "14270", "Female Students whose income below 8 Lakh": "14270", "SC/ST": "1350", isTotal: true },
    ],
    notes: []
  },
  // 2025-26 - Direct Second Year Engineering
  {
    year: "2025-26",
    title: "Fee Structure For Direct Second Year Engineering Admission 2025-26",
    headers: ["Sr. No.", "Particulars", "Fees for Open Category & Category students whose parent income is above 8 Lakh", "Fees for OBC/EWS/SEBC", "Fees for TFWS & NT/VJ/SBC Category", "Girls having parent income below 8 Lakh", "Fees for SC/ST Category"],
    rows: [
      { "Sr. No.": 1, "Particulars": "Tuition Fees", "Fees for Open Category & Category students whose parent income is above 8 Lakh": "97346", "Fees for OBC/EWS/SEBC": "48673", "Fees for TFWS & NT/VJ/SBC Category": "0", "Girls having parent income below 8 Lakh": "0", "Fees for SC/ST Category": "0" },
      { "Sr. No.": 2, "Particulars": "Development Fees", "Fees for Open Category & Category students whose parent income is above 8 Lakh": "12654", "Fees for OBC/EWS/SEBC": "12654", "Fees for TFWS & NT/VJ/SBC Category": "12654", "Girls having parent income below 8 Lakh": "12654", "Fees for SC/ST Category": "0" },
      { "Sr. No.": 3, "Particulars": "Advance Fees (Refundable)", "Fees for Open Category & Category students whose parent income is above 8 Lakh": "0", "Fees for OBC/EWS/SEBC": "0", "Fees for TFWS & NT/VJ/SBC Category": "0", "Girls having parent income below 8 Lakh": "0", "Fees for SC/ST Category": "1000" },
      { "Sr. No.": 4, "Particulars": "Other Fees", "Fees for Open Category & Category students whose parent income is above 8 Lakh": "350", "Fees for OBC/EWS/SEBC": "350", "Fees for TFWS & NT/VJ/SBC Category": "350", "Girls having parent income below 8 Lakh": "350", "Fees for SC/ST Category": "350" },
      { "Sr. No.": 5, "Particulars": "Total Fees", "Fees for Open Category & Category students whose parent income is above 8 Lakh": "110350", "Fees for OBC/EWS/SEBC": "61677", "Fees for TFWS & NT/VJ/SBC Category": "13004", "Girls having parent income below 8 Lakh": "13004", "Fees for SC/ST Category": "1350", isTotal: true },
    ],
    notes: []
  },
  // 2025-26 - M. Tech. First Year Engineering
  {
    year: "2025-26",
    title: "Fee Structure for M. Tech. First Year Engineering 2025-26",
    headers: ["Sr. No.", "Particulars", "OPEN", "OBC/EWS/SEBC", "NT/VJ/SBC", "SC/ST"],
    rows: [
      { "Sr. No.": 1, "Particulars": "TUITION FEES", "OPEN": "63636", "OBC/EWS/SEBC": "63636", "NT/VJ/SBC": "63636", "SC/ST": "63636" },
      { "Sr. No.": 2, "Particulars": "DEVELOPMENT FEES", "OPEN": "6364", "OBC/EWS/SEBC": "6364", "NT/VJ/SBC": "6364", "SC/ST": "6364" },
      { "Sr. No.": 3, "Particulars": "OTHER FEES", "OPEN": "350", "OBC/EWS/SEBC": "350", "NT/VJ/SBC": "350", "SC/ST": "350" },
      { "Sr. No.": '', "Particulars": "TOTAL FEES", "OPEN": "70350", "OBC/EWS/SEBC": "70350", "NT/VJ/SBC": "70350", "SC/ST": "70350", isTotal: true },
    ],
    notes: []
  },
  // 2024-25 - B.TECH ( U.G. )
  {
    year: "2024-25",
    title: "FEES B.TECH ( U.G. ) 2024-25",
    headers: ["Sr. No.", "Types of fees", "OPEN / INSTITUTE LEVEL", "OBC", "EBC/EWS", "NT/DT/VJ/SBC", "SC/ST", "TFWS"],
    rows: [
      { "Sr. No.": 1, "Types of fees": "TUITION FEES", "OPEN / INSTITUTE LEVEL": "97346", "OBC": "48673", "EBC/EWS": "48673", "NT/DT/VJ/SBC": "0", "SC/ST": "0", "TFWS": "0" },
      { "Sr. No.": 2, "Types of fees": "DEVELOPMENT FEES", "OPEN / INSTITUTE LEVEL": "12654", "OBC": "12654", "EBC/EWS": "12654", "NT/DT/VJ/SBC": "12654", "SC/ST": "0", "TFWS": "12654" },
      { "Sr. No.": 3, "Types of fees": "OTHER CHARGES", "OPEN / INSTITUTE LEVEL": "350", "OBC": "350", "EBC/EWS": "350", "NT/DT/VJ/SBC": "350", "SC/ST": "350", "TFWS": "350" },
      { "Sr. No.": 4, "Types of fees": "Advance fees Refundable", "OPEN / INSTITUTE LEVEL": "0", "OBC": "0", "EBC/EWS": "0", "NT/DT/VJ/SBC": "0", "SC/ST": "1000", "TFWS": "0" },
      { "Sr. No.": '', "Types of fees": "TOTAL Rs", "OPEN / INSTITUTE LEVEL": "110350", "OBC": "61677", "EBC/EWS": "61677", "NT/DT/VJ/SBC": "13004", "SC/ST": "1350", "TFWS": "13004", isTotal: true },
    ],
    notes: ["* If online Scholarship EBC/EWS/Minority is not filled / Accepted , student will have to pay Toal College fees i.e. Rs 110350/-"]
  },
  // 2024-25 - M.TECH ( P.G. )
  {
    year: "2024-25",
    title: "FEES M.TECH ( P.G. ) 2024-25",
    headers: ["Sr. No.", "Types of fees", "OPEN", "OBC", "SC/ST", "NT/DT/VJ/SBC"],
    rows: [
      { "Sr. No.": 1, "Types of fees": "TUITION FEES", "OPEN": "67400", "OBC": "67400", "SC/ST": "67400", "NT/DT/VJ/SBC": "67400" },
      { "Sr. No.": 2, "Types of fees": "DEVELOPMENT FEES", "OPEN": "9100", "OBC": "9100", "SC/ST": "9100", "NT/DT/VJ/SBC": "9100" },
      { "Sr. No.": 3, "Types of fees": "OTHER CHARGES", "OPEN": "350", "OBC": "350", "SC/ST": "350", "NT/DT/VJ/SBC": "350" },
      { "Sr. No.": '', "Types of fees": "TOTAL Rs", "OPEN": "76850", "OBC": "76850", "SC/ST": "76850", "NT/DT/VJ/SBC": "76850", isTotal: true },
    ],
    notes: []
  },
  // 2024-25 - Direct Second Year
  {
    year: "2024-25",
    title: "FEES Direct Second Year 2024-25",
    headers: ["Sr. No.", "Types of fees", "OPEN", "OBC", "SC/ST", "NT/DT/VJ/SBC"],
    rows: [
      { "Sr. No.": 1, "Types of fees": "TUITION FEES", "OPEN": "88930", "OBC": "44465", "SC/ST": "0", "NT/DT/VJ/SBC": "0" },
      { "Sr. No.": 2, "Types of fees": "DEVELOPMENT FEES", "OPEN": "9070", "OBC": "9070", "SC/ST": "0", "NT/DT/VJ/SBC": "9070" },
      { "Sr. No.": 3, "Types of fees": "OTHER CHARGES", "OPEN": "350", "OBC": "350", "SC/ST": "350", "NT/DT/VJ/SBC": "350" },
      { "Sr. No.": 4, "Types of fees": "ADVANCE FEES", "OPEN": "0", "OBC": "0", "SC/ST": "1000", "NT/DT/VJ/SBC": "0" },
      { "Sr. No.": '', "Types of fees": "TOTAL Rs", "OPEN": "98350", "OBC": "53885", "SC/ST": "1350", "NT/DT/VJ/SBC": "9420", isTotal: true },
    ],
    notes: []
  },
  // 2023-24 - FEES STRUCTURE FOR THE A.Y 2023-2024 (UG)
  {
    year: "2023-24",
    title: "FEES STRUCTURE FOR THE A.Y 2023-2024",
    headers: ["Sr. No.", "Types of fees", "OPEN", "Instititue Level", "SC/ST", "NT/SBC", "OBC/EBC/EWS", "TFWS"],
    rows: [
      { "Sr. No.": 1, "Types of fees": "Total Fees", "OPEN": "98000", "Instititue Level": "98000", "SC/ST": "1000", "NT/SBC": "9070", "OBC/EBC/EWS": "53535", "TFWS": "9070" },
      { "Sr. No.": 2, "Types of fees": "Other Fees", "OPEN": "350", "Instititue Level": "350", "SC/ST": "350", "NT/SBC": "350", "OBC/EBC/EWS": "350", "TFWS": "350" },
      { "Sr. No.": '', "Types of fees": "Total Payable Fees", "OPEN": "98350", "Instititue Level": "98350", "SC/ST": "1350", "NT/SBC": "9420", "OBC/EBC/EWS": "53885", "TFWS": "9420", isTotal: true },
    ],
    notes: []
  },
  // 2023-24 - DIRECT S.Y FEES STRUCTURE 2023-2024
  {
    year: "2023-24",
    title: "DIRECT S.Y FEES STRUCTURE 2023-2024",
    headers: ["Sr. No.", "Types of fees", "OPEN", "Instititue Level", "SC/ST", "NT/SBC", "OBC/EBC/EWS", "TFWS"],
    rows: [
      { "Sr. No.": 1, "Types of fees": "Total Fees", "OPEN": "98000", "Instititue Level": "98000", "SC/ST": "1000", "NT/SBC": "9312", "OBC/EBC/EWS": "53656", "TFWS": "9312" },
      { "Sr. No.": 2, "Types of fees": "Other Fees", "OPEN": "350", "Instititue Level": "350", "SC/ST": "350", "NT/SBC": "350", "OBC/EBC/EWS": "350", "TFWS": "350" },
      { "Sr. No.": '', "Types of fees": "Total Payable Fees", "OPEN": "98350", "Instititue Level": "98350", "SC/ST": "1350", "NT/SBC": "9662", "OBC/EBC/EWS": "54006", "TFWS": "9662", isTotal: true },
    ],
    notes: []
  },
  // 2023-24 - P.G. (2023-2024) M. TECH - I
  {
    year: "2023-24",
    title: "P.G. (2023-2024) M. TECH - I",
    headers: ["Sr. No.", "Types of fees", "OPEN"],
    rows: [
      { "Sr. No.": 1, "Types of fees": "Total Fees", "OPEN": "68500" },
      { "Sr. No.": 2, "Types of fees": "Other Fees", "OPEN": "350" },
      { "Sr. No.": '', "Types of fees": "Total Payable Fees", "OPEN": "68850", isTotal: true },
    ],
    notes: []
  },
];


const FeeStructurePage = () => {
  return (
    // Outer container matching established theme
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with other pages */}
        <header className="mb-8" aria-labelledby="fees-title">
          <h1 id="fees-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            Fee Structure
          </h1>
        </header>

        {/* Main content section - Consistent with other pages' content wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="Fee Structure Information">
          {feeStructures.map((feeStructure, sectionIndex) => (
            <div key={sectionIndex} className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-800 mb-2">
                {feeStructure.year}
              </h2>
              <p className="text-xl font-medium text-gray-700 mb-4">{feeStructure.title}</p>
              
              {/* Fee Structure Table */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <caption className="sr-only">Table showing fee structure for {feeStructure.title} for academic year {feeStructure.year}.</caption>
                  <thead className="bg-gray-100">
                    <tr>
                      {feeStructure.headers.map((header, idx) => (
                        <th 
                          key={idx} 
                          scope="col" 
                          className="border border-gray-300 p-3 text-center font-semibold text-gray-700 whitespace-nowrap"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className={`transition-colors duration-150 ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                        {feeStructure.headers.map((header, colIndex) => (
                          <td 
                            key={`${rowIndex}-${colIndex}`} 
                            className={`border border-gray-300 p-3 ${row.isTotal ? 'font-bold text-gray-800' : 'font-medium text-gray-600'} ${header === 'Particulars' || header === 'Types of fees' ? 'text-left' : 'text-center'}`}
                          >
                            {row[header]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {feeStructure.notes && feeStructure.notes.length > 0 && (
                <div className="mt-4 text-sm text-gray-600 space-y-1">
                  {feeStructure.notes.map((note, noteIndex) => (
                    <p key={noteIndex}>{note}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default FeeStructurePage;