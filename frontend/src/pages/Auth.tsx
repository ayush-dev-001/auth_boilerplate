import { Routes, Route, Link } from "react-router-dom";
import { Login } from "../components/login";
import { Signup } from "../components/signup";
import { Banner } from "../components/banner";
// 1. The selection component displayed when someone visits /auth
function AuthSelection() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="max-w-md w-full text-center space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Welcome</h2>
          <p className="mt-2 text-sm text-gray-600">Choose how you would like to proceed</p>
        </div>

        <div className="flex flex-col gap-4">
          <Link
            to="login"
            className="w-full py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-center transition-colors shadow-sm"
          >
            Sign In / Login
          </Link>

          <Link
            to="signup"
            className="w-full py-3 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium text-center transition-colors shadow-sm"
          >
            Create an Account (Sign Up)
          </Link>
        </div>
      </div>
    </div>
  );
}

// 2. The main Auth page wrapper
export function Auth() {
  return (
    <div className="flex h-screen">
      <Banner />
      
      {/* Nested routes inside /auth */}
      <Routes>
        {/* Visiting /auth renders AuthSelection */}
        <Route index element={<AuthSelection />} />

        {/* Visiting /auth/login renders Login */}
        <Route path="login" element={<Login />} />

        {/* Visiting /auth/signup renders Signup */}
        <Route path="signup" element={<Signup />} />
      
      </Routes>
    </div>
  );
}
