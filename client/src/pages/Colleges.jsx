
import CollegeCard from "../components/CollegeCard";
import Loading from "../components/Loading";
import { useColleges } from "../context/CollegesContext";


const Colleges = () => {
  const { colleges, loading, error } = useColleges();
  
  if (loading) return <Loading></Loading>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Colleges</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges?.map((college) => (
          <CollegeCard key={college._id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default Colleges;
