import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-black mb-8 font-serif">
          Login
        </h2>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-black mb-1 font-medium"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-black mb-1 font-medium"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-black text-white font-bold font-serif hover:bg-blue-900 transform hover:scale-105 transition duration-300"
          >
            SIGN IN
          </button>

          <div className="flex justify-between text-sm mt-4">
            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
            <Link to="/createaccount" className="text-blue-600 hover:underline">
              Create-account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
