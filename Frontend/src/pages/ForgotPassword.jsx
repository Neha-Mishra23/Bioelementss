// src/pages/ForgotPassword.jsx

import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Forgot Password</h2>
        <p className="text-gray-700 mb-6">
          Enter your email to reset your password
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <button
            type="submit"
            className="w-full h-12 bg-black text-white font-bold hover:bg-blue-900 transition duration-300"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
