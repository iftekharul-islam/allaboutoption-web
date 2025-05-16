import moment from "moment";
import { Fragment, useEffect, useState } from "react";
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

  const [subscriptions, setSubscriptions] = useState([]);

  if (!isLoggedIn) {
    window.location.href = "/signin";
  }

  const getProfile = async () => {
    const res = await Api.get("/web/profile");
    if (res?.data?.user) {
      localStorage.setItem("user", JSON.stringify(res?.data?.user));
      setUser(res?.data?.user);
      setSubscriptions(res?.data?.subscriptions || []);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      getProfile();
    }
  }, []);

  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-gray-50 px-4 py-10 text-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={user?.dp || defaultAvatar}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-md"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold text-gray-900">
              {user.first_name}
            </h2>
            <p className="text-gray-600">{user?.email}</p>
            <p className="text-gray-600 mt-4">Phone: {user?.phone}</p>
            <p className="text-gray-600">
              Date of Birth: {moment(user?.dob).format("DD MMM YYYY")}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Subscription Details
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300 shadow-sm">
              <thead className="bg-indigo-100">
                <tr>
                  <th className="px-4 py-2 text-left">SL</th>
                  <th className="px-4 py-2 text-left">Subscription ID</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Provider</th>
                  <th className="px-4 py-2 text-left">Period</th>
                  <th className="px-4 py-2 text-left">Start</th>
                  <th className="px-4 py-2 text-left">End</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((sub, index) => {
                  const statusClass =
                    sub?.status == "active" || sub?.status == "ACTIVE"
                      ? " text-green-600"
                      : sub?.status == "canceled" || sub?.status == "CANCELLED"
                      ? " text-red-600"
                      : " text-yellow-600";

                  const status =
                    sub?.status == "active" || sub?.status == "ACTIVE"
                      ? "Active"
                      : sub?.status == "canceled" || sub?.status == "CANCELLED"
                      ? "Canceled"
                      : sub?.status;

                  return (
                    <Fragment key={sub?.id}>
                      <tr className="border-t bg-white hover:bg-gray-50">
                        <td className="px-4 py-2">
                          <button
                            onClick={() => toggleExpand(sub?.id)}
                            className="text-indigo-600 hover:text-indigo-800"
                          >
                            {expandedId === sub?.id ? "▼" : "►"}
                            {index + 1}
                          </button>
                        </td>
                        <td className="px-4 py-2">
                          {sub?.provider_subscription_id}
                        </td>
                        <td
                          className={
                            "px-4 py-2 capitalize font-medium " + statusClass
                          }
                        >
                          {status}
                        </td>
                        <td className="px-4 py-2 capitalize">
                          {sub?.provider}
                        </td>
                        <td className="px-4 py-2">
                          {sub?.period == 1 ? "Monthly" : "Yearly"}
                        </td>
                        <td className="px-4 py-2">
                          {sub?.current_period_start
                            ? new Date(
                                sub?.current_period_start
                              ).toLocaleDateString()
                            : "N/A"}
                        </td>
                        <td className="px-4 py-2">
                          {sub?.current_period_end
                            ? new Date(
                                sub?.current_period_end
                              ).toLocaleDateString()
                            : "N/A"}
                        </td>
                      </tr>
                      {expandedId === sub?.id && (
                        <tr>
                          <td colSpan="7" className="bg-gray-100 px-4 py-4">
                            <h3 className="font-semibold mb-2 text-gray-800">
                              Payment History
                            </h3>
                            {sub?.subscription_histories.length > 0 ? (
                              <table className="w-full text-sm border">
                                <thead>
                                  <tr className="bg-indigo-50">
                                    <th className="px-2 py-1 text-left">
                                      Date
                                    </th>
                                    <th className="px-2 py-1 text-left">
                                      Amount
                                    </th>
                                    <th className="px-2 py-1 text-left">
                                      Invoice
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {sub?.subscription_histories?.map(
                                    (history) => (
                                      <tr
                                        key={history?.id}
                                        className="border-t"
                                      >
                                        <td className="px-2 py-1">
                                          {new Date(
                                            history?.billed_at
                                          ).toLocaleDateString()}
                                        </td>
                                        <td className="px-2 py-1">
                                          ${history?.amount}
                                        </td>
                                        <td className="px-2 py-1">
                                          {history?.data?.data?.object
                                            ?.invoice_pdf ? (
                                            <a
                                              href={
                                                history?.data.data.object
                                                  .invoice_pdf
                                              }
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="text-indigo-600 hover:underline"
                                            >
                                              View PDF
                                            </a>
                                          ) : (
                                            "N/A"
                                          )}
                                        </td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </table>
                            ) : (
                              <p className="text-gray-500">
                                No payment history available.
                              </p>
                            )}
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>

          {!user?.expired_at && (
            <div className="bg-yellow-100 rounded px-4 py-4 mt-6">
              <p className="text-gray-800">
                You are not subscribed to any plan.
              </p>
              <p className="text-gray-600 mt-2">
                Please subscribe to a plan to access premium features.
              </p>
              <HashLink
                smooth
                to="/#pricing"
                className="text-indigo-600 hover:underline"
              >
                Click here to subscribe
              </HashLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;