import { useState } from 'react';
import defaultAvatar from '../assets/smart_mentor.png'; // Use actual avatar if available

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('accessToken') ? true : false);

    if (!isLoggedIn) {   
        window.location.href = "/signin";
    }

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-10 text-white">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl shadow-xl p-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={user.image || defaultAvatar}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-md"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold">{user.first_name}</h2>
            <p className="text-gray-400">{user?.email}</p>
            <p className="text-gray-400">{user?.phone}</p>
            <p className="text-gray-400">Date of Birth: {user?.dob}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6">
          <h3 className="text-xl font-semibold mb-4">Account Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-400 text-sm">Full Name</label>
              <div className="bg-gray-700 rounded px-4 py-2 mt-1">{user?.first_name}</div>
            </div>
            <div>
              <label className="text-gray-400 text-sm">Email</label>
              <div className="bg-gray-700 rounded px-4 py-2 mt-1">{user?.email}</div>
            </div>
            <div>
              <label className="text-gray-400 text-sm">Phone</label>
              <div className="bg-gray-700 rounded px-4 py-2 mt-1">{user?.phone}</div>
            </div>
            <div>
              <label className="text-gray-400 text-sm">Date of Birth</label>
              <div className="bg-gray-700 rounded px-4 py-2 mt-1">{user?.dob}</div>
            </div>
          </div>

          {/* <div className="mt-8 flex justify-end">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg transition-all">
              Edit Profile
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
