import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useColleges } from "../context/CollegesContext";
import useFetch from "../hooks/useFetch";

const Admission = () => {
  const { loading, refetch } = useFetch("api/users/createUser", "POST");
  const { user } = useAuth();

  const { colleges: data } = useColleges();
  const [colleges, setColleges] = useState(data || []);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    image: null,
  });

  const handleCollegeClick = (college) => {
    setSelectedCollege(college);
    setFormData({
      name: user?.displayName || "",
      subject: "",
      email: user?.email,
      phone: "",
      address: "",
      dob: "",
      image: null,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = { ...formData, university: selectedCollege.name };
    const formData2 = new FormData();
    formData2.append("name", userInfo.name);
    formData2.append("subject", userInfo.subject);
    formData2.append("email", userInfo.email);
    formData2.append("phone", userInfo.phone);
    formData2.append("address", userInfo.address);
    formData2.append("dob", userInfo.dob);
    formData2.append("university", selectedCollege.name);
    // Append the image file, if available
    if (userInfo.image) {
      formData2.append("image", userInfo.image);
    }

    console.log(formData2.get("image"));

    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/users/createUser`,
        {
          method: "POST",
          // headers: {"Content-Type": "multipart/form-data"},
          body:formData2,
        }
      ).then((res)=>{
        console.log(res)
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log("File uploaded successfully:", result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Admission Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Select a College</h2>
          {colleges?.map((college) => (
            <button
              key={college._id}
              onClick={() => handleCollegeClick(college)}
              className={`btn btn-outline w-full mb-2 ${
                selectedCollege?.name === college?.name ? "bg-blue-200" : ""
              }`}
            >
              {college.name}
            </button>
          ))}
        </div>

        {selectedCollege && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">
              Admission Form for {selectedCollege.name}
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Candidate Name"
              className="input input-bordered w-full"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {/* Subject Dropdown */}
            <select
              name="subject"
              className="input input-bordered w-full"
              value={formData.subject}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Biology">Biology</option>
              <option value="Finance">Finance</option>
              <option value="Management">Management</option>
            </select>
            <input
              type="email"
              name="email"
              placeholder="Candidate Email"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Candidate Phone Number"
              className="input input-bordered w-full"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered w-full"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <input
              type="date"
              name="dob"
              className="input input-bordered w-full"
              value={formData.dob}
              onChange={handleInputChange}
              required
            />
            <input
              type="file"
              name="image"
              className="input input-bordered w-full"
              onChange={handleImageChange}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="btn bg-indigo-400 hover:bg-indigo-500 text-white font-bold w-full"
            >
              submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Admission;
