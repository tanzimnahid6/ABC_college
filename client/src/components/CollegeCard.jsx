/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => (
  <div className="card w-full bg-base-100 shadow-md p-5 rounded-lg">
    <img
      src={college.image}
      alt={college.name}
      className="h-40 w-full object-cover mb-4 rounded-lg"
    />
    <h2 className="text-xl font-semibold mb-2">{college.name}</h2>
    <p className="text-gray-600 text-sm mb-1">Rating: {college.rating} ⭐</p>
    <p className="text-gray-600 text-sm mb-1">
      Admission Date: {college.admissionDate}
    </p>
    <p className="text-gray-600 text-sm mb-3">
      Research Count: {college.researchCount}
    </p>
    <Link
      to={`/colleges/${college.id}`}
      className="btn btn-sm btn-outline mt-4"
    >
      Details
    </Link>
  </div>
);

export default CollegeCard;
