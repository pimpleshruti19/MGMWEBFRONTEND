import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    entcDepartmentTabs,
    entcCovidWarriorAchievement,
    entcJondhaleKC_Achievements,
    entcToppersByYear,
    entcStudentPaperPresentations,
    entcGateQualifiedStudents,
    entcSportsParticipation,
} from './entcConstants'; // Import all achievement data

const EntcAchievementPage = () => {
    const location = useLocation();

    // Reusable table rendering function for generic table structure
    const renderTable = (headers, data, keyPrefix, colWidths = []) => (
        <div className="overflow-x-auto relative shadow-md rounded-lg my-6 border border-gray-200">
            <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs text-white uppercase bg-indigo-600">
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                scope="col"
                                className={`py-3 px-4 ${index === 0 ? 'rounded-tl-lg' : ''} ${index === headers.length - 1 ? 'rounded-tr-lg' : ''} whitespace-nowrap`}
                                style={colWidths[index] ? { width: colWidths[index] } : {}}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={`${keyPrefix}-${rowIndex}`} className={`${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors duration-150`}>
                            {Object.values(row).map((value, colIndex) => (
                                <td key={`${keyPrefix}-${rowIndex}-${colIndex}`} className="py-3 px-4 font-medium text-gray-900 whitespace-pre-line">
                                    {value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    // Special renderer for Toppers table to handle nested structure and rowspan
    const renderToppersTable = (toppersData) => (
        <div className="overflow-x-auto relative shadow-md rounded-lg my-6 border border-gray-200">
            <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs text-white uppercase bg-indigo-600">
                    <tr>
                        <th className="py-3 px-4">YEAR</th>
                        <th className="py-3 px-4">Discipline</th>
                        <th className="py-3 px-4">Rank</th>
                        <th className="py-3 px-4">Name of Student</th>
                        <th className="py-3 px-4">Marks (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {toppersData.map((yearEntry, yearIndex) => (
                        yearEntry.disciplines ? ( // New structured format with disciplines
                            yearEntry.disciplines.map((discipline, discIndex) => (
                                discipline.students.map((student, studentIndex) => (
                                    <tr key={`topper-${yearIndex}-${discIndex}-${studentIndex}`} className={(studentIndex + discIndex) % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                        {discIndex === 0 && studentIndex === 0 && (
                                            <td rowSpan={yearEntry.disciplines.reduce((sum, d) => sum + d.students.length, 0)} className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap border-r border-gray-200">
                                                {yearEntry.year}
                                            </td>
                                        )}
                                        {studentIndex === 0 && (
                                            <td rowSpan={discipline.students.length} className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap border-r border-gray-200">
                                                {discipline.name}
                                            </td>
                                        )}
                                        {studentIndex === 0 && (
                                            <td rowSpan={discipline.students.length} className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap border-r border-gray-200">
                                                {discipline.rank}
                                            </td>
                                        )}
                                        <td className="py-3 px-4 text-gray-800 whitespace-pre-line">{student.name}</td>
                                        <td className="py-3 px-4 text-gray-800 whitespace-nowrap">{student.marks}</td>
                                    </tr>
                                ))
                            ))
                        ) : ( // Old unstructured format directly under yearEntry.entries
                            yearEntry.entries.map((entry, entryIndex) => (
                                <tr key={`topper-old-${yearIndex}-${entryIndex}`} className={entryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                    {entryIndex === 0 && (
                                        <td rowSpan={yearEntry.entries.length} className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap border-r border-gray-200">
                                            {yearEntry.year}
                                        </td>
                                    )}
                                    <td className="py-3 px-4 text-gray-800 whitespace-nowrap border-r border-gray-200">{entry.discipline}</td>
                                    <td className="py-3 px-4 text-gray-800 whitespace-nowrap border-r border-gray-200">{entry.srNo}</td>
                                    <td className="py-3 px-4 text-gray-800 whitespace-pre-line">{entry.name}</td>
                                    <td className="py-3 px-4 text-gray-800 whitespace-nowrap">{entry.marks}</td>
                                </tr>
                            ))
                        )
                    ))}
                </tbody>
            </table>
        </div>
    );

    // Special renderer for Sports Participation table to handle nested structure and rowspan
    const renderSportsTable = (sportsData) => (
        <div className="overflow-x-auto relative shadow-md rounded-lg my-6 border border-gray-200">
            <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs text-white uppercase bg-indigo-600">
                    <tr>
                        <th className="py-3 px-4">Sr. No.</th>
                        <th className="py-3 px-4">Year</th>
                        <th className="py-3 px-4">Name of Student</th>
                        <th className="py-3 px-4">Event</th>
                        <th className="py-3 px-4">Place</th>
                        <th className="py-3 px-4">Rank</th>
                        <th className="py-3 px-4">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {sportsData.map((yearEntry, yearIndex) => (
                        yearEntry.entries.map((entry, entryIndex) => (
                            <tr key={`sports-${yearIndex}-${entryIndex}`} className={entryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">{entry.srNo}</td>
                                {entryIndex === 0 && (
                                    <td rowSpan={yearEntry.entries.length} className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap border-r border-gray-200">
                                        {yearEntry.year}
                                    </td>
                                )}
                                <td className="py-3 px-4 text-gray-800 whitespace-pre-line">{entry.name}</td>
                                <td className="py-3 px-4 text-gray-800">{entry.event}</td>
                                <td className="py-3 px-4 text-gray-800">{entry.place}</td>
                                <td className="py-3 px-4 text-gray-800">{entry.rank}</td>
                                {entryIndex === 0 && yearEntry.total && (
                                    <td rowSpan={yearEntry.entries.length} className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">
                                        {yearEntry.total}
                                    </td>
                                )}
                            </tr>
                        ))
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Achievements</h1>
                <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
                    Recognizing the outstanding accomplishments of the Electronics & Telecommunication Engineering Department.
                    <span className="text-sm block mt-2 text-yellow-200">
                        (Note: Content below is currently populated with Civil Engineering data from the provided source HTML. Please update `entcConstants.js` for ENTC-specific details.)
                    </span>
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
                    Departmental Achievements
                </h2>

                {/* COVID-19 Warriors Section */}
                {entcCovidWarriorAchievement && (
                    <section className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-100 print:bg-white print:border print:p-4">
                        <h3 className="text-2xl font-bold text-center text-purple-700 mb-4 print:text-xl">
                            {entcCovidWarriorAchievement.title}
                        </h3>
                        <div className="prose prose-lg max-w-none text-gray-700 mb-6 print:text-sm">
                            {entcCovidWarriorAchievement.paragraphs.map((para, index) => (
                                <p key={index} className="leading-relaxed mb-4 text-justify">{para.trim()}</p>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                            {entcCovidWarriorAchievement.images.map((img, index) => (
                                <div key={index} className="flex flex-col items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-auto rounded-md object-cover"
                                        style={{ maxWidth: '650px', height: 'auto' }} // Adjust width as per source
                                        loading="lazy"
                                    />
                                    {img.caption && (
                                        <p className="text-gray-500 text-sm mt-2 text-center italic print:text-xs">{img.caption}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Dr. Jondhale K.C. Achievements */}
                {entcJondhaleKC_Achievements && (
                    <section className="mb-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100 print:bg-white print:border print:p-4">
                        <h3 className="text-2xl font-bold text-center text-purple-700 mb-4 print:text-xl">
                            {entcJondhaleKC_Achievements.title}
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 pl-4 print:text-sm print:space-y-1">
                            {entcJondhaleKC_Achievements.listItems.map((item, index) => (
                                <li key={index} className="pl-2">{item}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Topper Students List */}
                {entcToppersByYear.length > 0 && (
                    <section className="mb-8 p-6 bg-green-50 rounded-xl border border-green-100 print:bg-white print:border print:p-4">
                        <h3 className="text-2xl font-bold text-center text-purple-700 mb-4 print:text-xl">Topper Students List</h3>
                        {renderToppersTable(entcToppersByYear)}
                    </section>
                )}

                {/* Paper Presented by Students */}
                {entcStudentPaperPresentations.length > 0 && (
                    <section className="mb-8 p-6 bg-yellow-50 rounded-xl border border-yellow-100 print:bg-white print:border print:p-4">
                        <h3 className="text-2xl font-bold text-center text-purple-700 mb-4 print:text-xl">Paper Presented by Students</h3>
                        {renderTable(
                            ['Sr. No', 'Name of student', 'Event', 'Prize', 'Topic'],
                            entcStudentPaperPresentations,
                            'student-papers'
                        )}
                    </section>
                )}

                {/* GATE Qualified Students */}
                {entcGateQualifiedStudents.length > 0 && (
                    <section className="mb-8 p-6 bg-purple-50 rounded-xl border border-purple-100 print:bg-white print:border print:p-4">
                        <h3 className="text-2xl font-bold text-center text-purple-700 mb-4 print:text-xl">GATE Qualified Students</h3>
                        {renderTable(
                            ['Sr. No', 'Name of student', 'Marks', 'Qualifying year'],
                            entcGateQualifiedStudents,
                            'gate-qualified'
                        )}
                    </section>
                )}

                {/* Sports Participation */}
                {entcSportsParticipation.length > 0 && (
                    <section className="mb-8 p-6 bg-red-50 rounded-xl border border-red-100 print:bg-white print:border print:p-4">
                        <h3 className="text-2xl font-bold text-center text-purple-700 mb-4 print:text-xl">Sports Participation By Students</h3>
                        {renderSportsTable(entcSportsParticipation)}
                    </section>
                )}

            </div>
        </div>
    );
};

export default EntcAchievementPage;
