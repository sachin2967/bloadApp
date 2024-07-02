import React from "react";
import { useState } from "react";
import { Alert, Spinner } from "flowbite-react";
import { useNavigate,Link } from "react-router-dom";
function Signin() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async () => {
    // console.log(formData);

    if ( !formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      // const res = await fetch("/api/auth/signup", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      // if (res.ok) {
      //   navigate("/");
      // }

      // const data = await res.json();
      navigate('/');

      setLoading(false);

      // console.log(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="h-[85vh] items-center  flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl bg-white  sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-blue-900 text-center hidden md:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                FlowBlog Sign in
              </h1>
              <p className="text-[12px] text-gray-500">
                Hey Sign in into your account
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
              
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  id="email"
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  id="password"
                />

                <div>
                  {error && (
                    <Alert className="mt-4 py-2" color="failure">
                      {error}
                    </Alert>
                  )}
                </div>

                <button
                  className="mt-1 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner aria-label="Default status example" />
                  ) : (
                    <div className="flex">
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-3">Sign in</span>
                    </div>
                  )}
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  New User?{" "}
                  <Link to="/signup">
                    <span className="text-blue-900 font-semibold">Sign up</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
