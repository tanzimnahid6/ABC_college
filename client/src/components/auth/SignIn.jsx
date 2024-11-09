import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const SignIn = () => {
  const navigate = useNavigate();
  const { loginWithEmail, googlLogin, forgotPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false); 
  const [resetEmail, setResetEmail] = useState(""); 

  // Handle Google Login
  const handleGoogleLogin = () => {
    googlLogin()
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    loginWithEmail(email, password)
      .then((res) => {
        console.log("Login successful result: " + res);
        navigate("/");
      })
      .catch((err) => {
        console.log("Login failed error: " + err);
        alert("Login failed");
      });
  };

  // Handle forgot password submission
  const handlePasswordForget = () => {
    forgotPassword(resetEmail)
      .then((res) => {
        console.log("Password reset email sent successfully");
        console.log(res);
        setResetEmail(""); 
        setForgotPasswordModal(false); 
      })
      .catch((err) => {
        console.log("Password reset failed error: " + err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p
            className="link text-blue-400 text-xs cursor-pointer"
            onClick={() => setForgotPasswordModal(true)} // Show modal
          >
            Forgot password?
          </p>
          <button type="submit" className="btn btn-primary w-full">
            Sign In
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full mt-4"
        >
          Sign in with Google
        </button>
        <p className="text-center mt-4">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>

      {/* Forgot Password Modal */}
      {forgotPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold mb-4">Reset Password</h3>
            <p className="text-sm mb-4">
              Enter your email address to receive a password reset link.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full mb-4"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                onClick={handlePasswordForget}
                className="btn btn-primary w-1/2"
              >
                Send Reset Email
              </button>
              <button
                onClick={() => setForgotPasswordModal(false)} // Close modal
                className="btn btn-outline w-1/2 ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
