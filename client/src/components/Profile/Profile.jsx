// src/components/Profile.js
import { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    university: "Example University",
    address: "123 Main St, Example City",
  });

  const [formData, setFormData] = useState({ ...user });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setUser({ ...formData });
    setIsEditing(false);
  };

  return (
    <div className="min-h-14 py-10 flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>

        {!isEditing ? (
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>University:</strong> {user.university}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <button
              onClick={handleEditToggle}
              className="btn btn-primary mt-4"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="university"
              placeholder="University"
              className="input input-bordered w-full"
              value={formData.university}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered w-full"
              value={formData.address}
              onChange={handleChange}
            />
            <button
              onClick={handleSave}
              className="btn btn-success w-full mt-4"
            >
              Save
            </button>
            <button
              onClick={handleEditToggle}
              className="btn btn-outline w-full mt-2"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
