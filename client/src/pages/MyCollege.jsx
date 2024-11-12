import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";

const MyCollege = () => {
  const { user } = useAuth();
  const loggedUserEmail = user.email;
  const [collegeData, setCollegeData] = useState({});
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (!loggedUserEmail) return;
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/users/${loggedUserEmail}`
      );
      const data = await response.json();
      console.log(data);
      setCollegeData(data);
    };
    fetchData();
  }, [loggedUserEmail]);

 

  console.log(imageUrl);

  const handleReviewSubmit = () => {
    fetch(`${import.meta.env.VITE_APP_SERVER_URL}/api/reviews/addReview`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating, review, email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    // Handle storing the review (e.g., send it to the server or add it to local storage)
    alert(`Review added! Rating: ${rating} Stars, Review: ${review}`);
    setReview("");
    setRating(0);
  };

  // Display a message if no data is found in localStorage
  if (!collegeData || !collegeData.name) {
    return (
      <p className="text-center text-gray-600 mt-10">
        No college information found. Please submit an admission form.
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">My College</h1>
      <div className="card bg-base-100 shadow-lg p-6 rounded-lg">
        <div className="flex">
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold mb-4">
              {collegeData.university}
            </h2>
            <p>
              <strong>Candidate Name:</strong> {collegeData.name}
            </p>
            <p>
              <strong>Subject:</strong> {collegeData.subject}
            </p>
            <p>
              <strong>Email:</strong> {collegeData.email}
            </p>
            <p>
              <strong>Phone:</strong> {collegeData.phone}
            </p>
            <p>
              <strong>Address:</strong> {collegeData.address}
            </p>
            <p>
              <strong>Date of Birth:</strong> {collegeData.dob}
            </p>
          </div>
          <div className="w-1/2">
            <img src={imageUrl} className=" rounded-xl w-32" alt={collegeData.name} />
          </div>
        </div>

        {/* Add Review Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Add a Review</h3>
          <input
            type="number"
            min="1"
            max="5"
            placeholder="Rating (1-5)"
            className="input input-bordered w-full mb-3"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <textarea
            placeholder="Write your review here..."
            className="textarea textarea-bordered w-full mb-3"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <button
            onClick={handleReviewSubmit}
            className="btn btn-primary w-full"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCollege;
