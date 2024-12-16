import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    const minLength = /.{6,}/; // কমপক্ষে ৬ ডিজিট
    const uppercase = /[A-Z]/; // বড় হাতের অক্ষর
    const number = /\d/; // সংখ্যা
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/; // স্পেশাল ক্যারেক্টার

    if (!minLength.test(password)) {
      return "Password must be at least 6 characters long.";
    }
    if (!uppercase.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!number.test(password)) {
      return "Password must contain at least one number.";
    }
    if (!specialChar.test(password)) {
      return "Password must contain at least one special character.";
    }
    return "";
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const form = { name, email, password };

    // const error = validatePassword(password);
    // if (error) {
    //   setPasswordError(error);
    // } else {
    //   setPasswordError("");
    //   console.log("Registration successful:", form);
    //   // এখানে API কল বা ফর্ম সাবমিট করতে পারেন
    // }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Register
          </h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-medium mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Register
            </button>
          </form>
          <p className="text-sm text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
