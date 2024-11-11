import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthProvider";

const Review = () => {
  const [reviews, setReviews] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user?.email) {
      fetch(` https://abc-college-backend-76ka.vercel.app/api/reviews/getReviewWithMine/${user.email}`)
        .then((res) => res.json())
        .then((data) => setReviews(data))
        .catch((err) => console.error("Failed to fetch reviews:", err));
    }
  }, [user?.email]);

  return (
    <section className="bg-indigo-100 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Student Reviews</h2>
      <div className="max-w-4xl mx-auto space-y-6 px-4">
        {reviews && reviews.length > 0 ? (
          reviews.slice(0,3).map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <p className="text-gray-700">&quot;{item?.comment}&quot;</p>
              <p className="text-sm text-gray-500 mt-2">- {item?.name}</p>
            </div>
          ))
        ) : (
          <div className="space-y-6">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <p className="text-gray-700">
                &quot;Harvard University is truly a transformative experience!&quot;
              </p>
              <p className="text-sm text-gray-500 mt-2">- Alex Smith</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <p className="text-gray-700">
                &quot;MIT&apos;s curriculum pushes boundaries and fosters innovation.&quot;
              </p>
              <p className="text-sm text-gray-500 mt-2">- Jamie Lee</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <p className="text-gray-700">
                &quot;Stanford&apos;s campus culture and networking opportunities are unparalleled.&quot;
              </p>
              <p className="text-sm text-gray-500 mt-2">- Taylor Brown</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Review;
