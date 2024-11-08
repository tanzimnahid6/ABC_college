
import CollegeCard from "../components/CollegeCard";

const colleges = [
  {
    id: 1,
    name: "Harvard University",
    rating: 4.8,
    admissionDate: "Sept 1 - Oct 15",
    researchCount: 120,
    image: "/path/to/image1.jpg",
  },
  {
    id: 2,
    name: "MIT",
    rating: 4.9,
    admissionDate: "Aug 15 - Sept 30",
    researchCount: 100,
    image: "/path/to/image2.jpg",
  },
  {
    id: 3,
    name: "Stanford University",
    rating: 4.7,
    admissionDate: "Oct 1 - Nov 15",
    researchCount: 85,
    image: "/path/to/image3.jpg",
  },
  {
    id: 4,
    name: "Yale University",
    rating: 4.6,
    admissionDate: "Sept 10 - Oct 20",
    researchCount: 90,
    image: "/path/to/image4.jpg",
  },
  {
    id: 5,
    name: "Princeton University",
    rating: 4.5,
    admissionDate: "Aug 5 - Sept 25",
    researchCount: 95,
    image: "/path/to/image5.jpg",
  },
  {
    id: 6,
    name: "Columbia University",
    rating: 4.6,
    admissionDate: "Oct 1 - Nov 10",
    researchCount: 110,
    image: "/path/to/image6.jpg",
  },
];
const Colleges = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Colleges</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default Colleges;
