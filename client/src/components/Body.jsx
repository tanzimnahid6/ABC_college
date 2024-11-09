
import Banner from "../components/Banner";
import CollegeCard from "../components/CollegeCard";
import Gallery from "./collegeInfo/Gallery/Gallery";
import ResearchPaper from "./collegeInfo/ResearchPaper/ResearchPaper";
import Review from "./collegeInfo/Review/Review";

// Example college data
const colleges = [
  {
    id: 1,
    name: "Harvard University",
    admissionDate: "Sept 1 - Oct 15",
    events: "Convocation, Seminar",
    researchHistory: "150+ years",
    sports: "Football, Basketball",
    image: "/path/to/image1.jpg",
  },
  {
    id: 2,
    name: "MIT",
    admissionDate: "Aug 15 - Sept 30",
    events: "Tech Expo, Workshop",
    researchHistory: "100+ years",
    sports: "Soccer, Baseball",
    image: "/path/to/image2.jpg",
  },
  {
    id: 3,
    name: "Stanford University",
    admissionDate: "Oct 1 - Nov 15",
    events: "Hackathon, Conference",
    researchHistory: "75+ years",
    sports: "Tennis, Track",
    image: "/path/to/image3.jpg",
  },
];
const Body = () => {
  return (
    <div className="space-y-10">
      <Banner />

      {/* College Cards Section */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Popular Colleges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* {colleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))} */}
        </div>
      </section>

      {/* College Image Gallery */}
      <Gallery></Gallery>

      {/* Research Paper Links */}
      <ResearchPaper></ResearchPaper>

      {/* Review Section */}
      <Review></Review>
    </div>
  );
};

export default Body;
