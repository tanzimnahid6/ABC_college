/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  
  return(
  <div className="card w-full bg-base-100 shadow-md p-5 rounded-lg">
    <img
      src={college.image}
      alt={college.name}
      className="h-40 w-full object-cover mb-4 rounded-lg"
    />
    <h2 className="text-xl font-semibold mb-2">{college.name}</h2>
    <p className="text-gray-600 text-sm mb-1">
      <strong>Rating:</strong> {college.rating} ⭐
    </p>
    <p className="text-gray-600 text-sm mb-1">
      <strong>Admission Date:</strong> {college.admissionDates}
    </p>
    <p className="text-gray-600 text-sm mb-3">
      <strong>Sports:</strong>{" "}
      {college?.sports?.map((sp, i) => (
        <span key={i}>{sp} </span>
      ))}
    </p>
    <Link
      to={`/colleges/${college._id}`}
      className="btn bg-indigo-400 hover:bg-indigo-500 text-white font-bold btn-sm mt-4"
    >
      Details
    </Link>
  </div>
  )
}

export default CollegeCard;
