import React, { useState } from "react";

import { Lock, Mail } from "lucide-react";
import Navbar from "../../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { loginUser } from "../../../services/auth/authApi";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(formData);
      console.log(res);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 flex min-h-screen">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-sm mx-auto">
            <div className="bg-white py-8 px-4 rounded-md border border-gray-200 shadow">
              {/* header text  */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight  mb-1">
                  Welcome back
                </h2>
                <p className="text-sm text-gray-400">
                  Sign in to your restaurant dashboard
                </p>
              </div>

              {/* form  */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-600  font-medium">Email </label>
                  <div className="relative">
                    <Mail
                      size={15}
                      className="text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3"
                    />
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="restaurant@example.com"
                      className="border border-gray-200 rounded-md py-3 px-9 w-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-amber-500 transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-600  font-medium">Password</label>
                  <div className="relative">
                    <Lock
                      size={15}
                      className="text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3"
                    />
                    <input
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      type="password"
                      placeholder="restaurant@example.com"
                      className="border border-gray-200 rounded-md py-3 px-9 w-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-amber-500 transition"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-sm sm:text-base text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button className="bg-orange-500 hover:bg-orange-500 font-semibold rounded-md transition-colors mt-2 text-white w-full  py-3  text">
                    Sign in
                  </button>
                </div>
              </form>

              {/* divider  */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-400 text-xs md: text-sm">or</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* google button  */}
              <button className="border border-gray-200 rounded-md py-3 w-full font-medium text-gray-800 flex items-center justify-center gap-3 hover:bg-gray-50">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZEZ6fa7bPwCI4HE5583rhd3qiFNmf6kiPg&s"
                  alt=""
                  className="h-6 w-6 "
                />
                <span>Continue with Google</span>
              </button>
            </div>
            {/* bottom text  */}
            <div className="mt-5">
              <p className="text-gray-500 text-center">
                New restaurant?
                <Link to="/register" className="text-orange-500 font-medium">
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
