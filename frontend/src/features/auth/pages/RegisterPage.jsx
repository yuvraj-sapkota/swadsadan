import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import { Lock, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { registerUser } from "../../../services/auth/authApi";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("password does not match");
      return;
    }

    try {
      const res = await registerUser(formData);
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

      <div className="bg-gray-100 flex min-h-[90vh]  py-10">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-xl mx-auto px-4">
            <div className="bg-white py-8 px-4 rounded-md border border-gray-200 shadow">
              {/* header text  */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight  mb-1">
                  Create your account
                </h2>
                <p className="text-sm text-gray-400">
                  Start everything digitally
                </p>
              </div>

              {/* form  */}
              <form onSubmit={handleSubmit} className="space-y-4 ">
                {/* <div className="h-[40vh] overflow-y-scroll"> */}
                {/* full name  */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-600  font-medium">
                    Full name{" "}
                  </label>
                  <div className="relative">
                    <User
                      size={15}
                      className="text-gray-400 absolute top-1/2 transform
                    -translate-y-1/2 left-3"
                    />
                    <input
                      onChange={handleChange}
                      name="name"
                      value={formData.name}
                      type="text"
                      placeholder="Ram prasad"
                      className="border border-gray-200 rounded-md py-3 px-9 w-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-amber-500 transition"
                    />
                  </div>
                </div>
                {/* email  */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-600  font-medium">Email </label>
                  <div className="relative">
                    <Mail
                      size={15}
                      className="text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3"
                    />
                    <input
                      onChange={handleChange}
                      value={formData.email}
                      name="email"
                      type="text"
                      placeholder="restaurant@example.com"
                      className="border border-gray-200 rounded-md py-3 px-9 w-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-amber-500 transition"
                    />
                  </div>
                </div>
                {/* password  */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-600  font-medium">Password</label>
                  <div className="relative">
                    <Lock
                      size={15}
                      className="text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3"
                    />
                    <input
                      onChange={handleChange}
                      value={formData.password}
                      name="password"
                      type="password"
                      placeholder="Min. 8 characters"
                      className="border border-gray-200 rounded-md py-3 px-9 w-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-amber-500 transition"
                    />
                  </div>
                </div>
                {/* confirm password  */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-600  font-medium">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock
                      size={15}
                      className="text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3"
                    />
                    <input
                      onChange={handleChange}
                      value={formData.confirmPassword}
                      name="confirmPassword"
                      type="password"
                      placeholder="Min. 8 characters"
                      className="border border-gray-200 rounded-md py-3 px-9 w-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-amber-500 transition"
                    />
                  </div>
                </div>
                {/* phone  */}
                {/* <div className="flex flex-col gap-2">
                    <label className="text-gray-600  font-medium">Phone</label>
                    <div className="relative">
                      <Lock
                        size={15}
                        className="text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3"
                      />
                      <input
                        type="text"
                        placeholder="9876543210"
                        className="border border-gray-200 rounded-md py-3 px-9 w-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-amber-500 transition"
                      />
                    </div>
                  </div> */}
                {/* address  */}
                {/* <div className="flex flex-col gap-2">
                    <label className="text-gray-600  font-medium">
                      address
                    </label>
                    <div className="relative">
                      <Lock
                        size={15}
                        className="text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3"
                      />
                      <input
                        type="text"
                        placeholder="address"
                        className="border border-gray-200 rounded-md py-3 px-9 w-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-amber-500 transition"
                      />
                    </div>
                  </div> */}
                {/* gender  */}
                {/* <div className="flex flex-col gap-2">
                    <label className="text-gray-600  font-medium">Gender</label>
                    <div className="relative">
                      <Lock
                        size={15}
                        className="text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3"
                      />
                      <input
                        type="text"
                        placeholder="address"
                        className="border border-gray-200 rounded-md py-3 px-9 w-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-amber-500 transition"
                      />
                    </div>
                  </div> */}
                {/* </div> */}

                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-500 font-semibold rounded-md transition-colors mt-2 text-white w-full  py-3  text"
                >
                  Create account
                </button>
              </form>

              {/* divider  */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-400 text-xs md:text-sm">or</span>
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
                Already have an account?
                <Link to="/login" className="text-orange-500 font-medium ml-1">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
