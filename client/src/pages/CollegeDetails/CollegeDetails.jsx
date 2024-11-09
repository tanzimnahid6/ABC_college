import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";

// Sample college data
const collegeData = [
  {
    id: 1,
    name: "Green Valley College",
    image: "/images/green_valley_college.jpg",
    rating: 4.5,
    admissionDates: "August 1 - September 30",
    admissionProcess:
      "Submit application forms, complete interviews, and wait for acceptance.",
    events: ["Science Fair", "Annual Sports Meet", "Cultural Fest"],
    researchHistory: [
      { title: "Environmental Studies on Green Habitats", year: 2022 },
      { title: "Renewable Energy Applications", year: 2021 },
    ],
    sports: ["Basketball", "Football", "Swimming"],
  },
  // Add more college objects as needed
];

const CollegeDetails = () => {
  const { id } = useParams();
  const { data: college, loading, error } = useFetch(`api/colleges/${id}`);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!college) {
    return <p>College not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-center">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{college.name}</h1>
        <p className="text-gray-600 mb-4">Rating: {college.rating}</p>
        <p className="text-gray-600 mb-4">
          Admission Dates: {college.admissionDates}
        </p>
        <p className="text-gray-600 mb-8">
          {/* Admission Process: {college.admissionProcess} */}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Events</h2>
        <ul className="list-disc list-inside pl-4">
          {college?.events?.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Research History</h2>
        <ul className="list-disc list-inside pl-4">
          {college?.researchHistory?.map((research, index) => (
            <li key={index}>
              {research.title} ({research.year})
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Sports Categories</h2>
        <ul className="list-disc list-inside pl-4">
          {college?.sports?.map((sport, index) => (
            <li key={index}>{sport}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollegeDetails;
