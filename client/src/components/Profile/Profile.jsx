import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const { user: loggedUser } = useAuth();
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/users/${loggedUser?.email}`
      );
      const data = await response.json();
      console.log(data);
      setUser(data);
      setFormData(data);
    };

    fetchData();
  }, [loggedUser?.email]);

  useEffect(() => {
    if (!user.image) return;
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_SERVER_URL}/api/users/image/${user?.image}`
        );
        if (response.ok) {
          const imageBlob = await response.blob();
          const imageObjectURL = URL.createObjectURL(imageBlob); // Create a URL for the blob
          setImageUrl(imageObjectURL);
        } else {
          console.error("Failed to fetch image");
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [user.image]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    setUser({ ...formData });
    fetch(
      `${import.meta.env.VITE_APP_SERVER_URL}/api/users/update/` +
        loggedUser.email,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
    setIsEditing(false);
  };

  return (
    <div className="min-h-14 py-10 flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>

        {/* Display the image if it exists */}
        {imageUrl && (
          <div className="mb-4">
            <img
              src={imageUrl}
              alt="User Profile"
              className="w-32 h-32 rounded-full object-cover mx-auto"
            />
          </div>
        )}

        {!isEditing ? (
          <div>
            <p>
              <strong>Name:</strong> {user?.name}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <p>
              <strong>University:</strong> {user?.university}
            </p>
            <p>
              <strong>Subject:</strong> {user?.subject}
            </p>
            <p>
              <strong>Phone:</strong> {user?.phone}
            </p>
            <p>
              <strong>Address:</strong> {user?.address}
            </p>
            <button
              onClick={handleEditToggle}
              className="btn bg-indigo-400 hover:bg-indigo-500 text-white font-bold mt-4"
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
              name="address"
              placeholder="Address"
              className="input input-bordered w-full"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              value={formData.phone}
              onChange={handleChange}
            />
            <button
              onClick={handleSave}
              className="btn bg-indigo-400 hover:bg-indigo-500 text-white font-bold w-full mt-4"
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
