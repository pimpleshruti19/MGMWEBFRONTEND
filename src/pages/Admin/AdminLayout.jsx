import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <div className="flex h-screen bg-gray-100 pt-28"> {/* pt-28 to account for your header */}
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="p-4 text-2xl font-semibold border-b border-gray-700">Admin Panel</div>
                <nav className="flex-1 p-4 space-y-2">
                    <NavLink 
                        to="/admin/dashboard" 
                        className={({ isActive }) => `block px-4 py-2 rounded-md hover:bg-gray-700 ${isActive ? 'bg-indigo-600' : ''}`}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink 
                        to="/admin/events" 
                        className={({ isActive }) => `block px-4 py-2 rounded-md hover:bg-gray-700 ${isActive ? 'bg-indigo-600' : ''}`}
                    >
                        Manage Events
                    </NavLink>
                    <NavLink 
                        to="/admin/faculty" 
                        className={({ isActive }) => `block px-4 py-2 rounded-md hover:bg-gray-700 ${isActive ? 'bg-indigo-600' : ''}`}
                    >
                        Manage Faculty
                    </NavLink>
                    <NavLink 
    to="/admin/pages" 
    className={({ isActive }) => `block px-4 py-2 rounded-md hover:bg-gray-700 ${isActive ? 'bg-indigo-600' : ''}`}
>
    Manage Page Content
</NavLink>
                    {/* Add more admin links here */}
                </nav>
                <div className="p-4 border-t border-gray-700">
                    <button 
                        onClick={handleLogout}
                        className="w-full px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 overflow-y-auto">
                <Outlet /> {/* Child routes will be rendered here */}
            </main>
        </div>
    );
};

export default AdminLayout;