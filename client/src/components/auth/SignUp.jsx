import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [university, setUniversity] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const { googlLogin, createUser } = useAuth();
  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Add other form data here
    const userInfo = {
      email,
      password,
      name,
      address,
      subject,
      university,
      phone,
      dob,
    };

    createUser(email, password, name, address, subject, university, phone, dob)
      .then((res) => {
        console.log("Credential login result", res);
        console.log("Additional user info:", userInfo);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="input input-bordered w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="University"
            className="input input-bordered w-full"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            className="input input-bordered w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="input input-bordered w-full"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Sign Up
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full mt-4"
        >
          Sign up with Google
        </button>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
