import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";

const CollegeDetails = () => {
  const { id } = useParams();
  const { data: college, loading, error } = useFetch(`api/colleges/${id}`);
  console.log(college);

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <p>Error fetching college data:{error}</p>;
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
          {college?.researchPaperIds?.map((research, index) => (
            <li key={index}>
              <a href={research?.link} className="link text-blue-500">
                {research?.title}
              </a>
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
