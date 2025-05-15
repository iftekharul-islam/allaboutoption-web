import moment from "moment";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import defaultAvatar from "../assets/smart_mentor.png"; // Use actual avatar if available
import Api from "../service/http";

const Profile = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("accessToken") ? true : false
  );

  if (!isLoggedIn) {
    window.location.href = "/signin";
  }

  const getProfile = async() => {
    const res = await Api.get("/web/profile");
    if(res?.data?.user){
      localStorage.setItem("user", JSON.stringify(res?.data?.user));
      setUser(res?.data?.user);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      getProfile();
    }
  }, []);

  return (
    <div className="bg-white px-4 py-10 text-white">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl shadow-xl p-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={user?.dp || defaultAvatar}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-md"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold">{user.first_name}</h2>
            <p className="text-gray-400">{user?.email}</p>
            <p className="text-gray-400 mt-4">Phone: {user?.phone}</p>
            <p className="text-gray-400">Date of Birth: {moment(user?.dob).format('DD MMM YYYY')}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6">
          <h3 className="text-xl font-semibold mb-4">Subscription Details</h3>
          {user?.expired_at ? (
            <span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-400 text-sm">Subscribed by</label>
                  <div className="bg-gray-700 rounded px-4 py-2 mt-1">
                    {user?.subs_gateway
                      ? user.subs_gateway.charAt(0).toUpperCase() +
                        user.subs_gateway.slice(1)
                      : "N/A"}
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-sm">Expiry Date</label>
                  <div className="bg-gray-700 rounded px-4 py-2 mt-1">
                    {user?.expired_at
                      ? moment(user?.expired_at).format("DD MMM YYYY")
                      : "No Expiry"}
                  </div>
                </div>
              </div>

              {/* <div className="mt-8 flex justify-end">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition-all"
                  onClick={() => {
                    // Add your unsubscribe logic here
                    console.log("Unsubscribe clicked");
                    // Example: call API, update state, etc.
                  }}
                >
                  Unsubscribe
                </button>
              </div> */}
            </span>
          ) : (
            <span>
              <div className="bg-gray-700 rounded px-4 py-2 mt-1">
                You are not subscribed to any plan.
              </div>
              <p className="text-gray-400 mt-4">
                Please subscribe to a plan to access premium features.
              </p>
              <HashLink smooth to="/#pricing" className="text-indigo-500">
                Click here to subscribe
              </HashLink>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
