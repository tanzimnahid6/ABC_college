import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import CollegeCard from "../components/CollegeCard";
import Gallery from "./collegeInfo/Gallery/Gallery";
import ResearchPaper from "./collegeInfo/ResearchPaper/ResearchPaper";
import Review from "./collegeInfo/Review/Review";

const Body = () => {
  const [search, setSearch] = useState("");
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on component mount
  useEffect(() => {
    setLoading(true);

    fetch("https://abc-college-backend-76ka.vercel.app/api/colleges")
      .then(res => res.json())
      .then(data => {
        setColleges(data);
        setFilteredColleges(data); // Show all colleges initially
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Filter colleges whenever search changes
  useEffect(() => {
    const filtered = colleges.filter(college =>
      college.name.toLowerCase().includes(search.toLowerCase())
    );

    // Show only 3 colleges when search is empty
    setFilteredColleges(search ? filtered : filtered.slice(0, 3));
  }, [search, colleges]);

  return (
    <div className="space-y-10 ">
      <Banner setSearch={setSearch} search={search} />

      {/* College Cards Section */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {!search ? "Popular Colleges" : "Search Result"}
        </h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college,i) => (
              <CollegeCard key={i} college={college} />
            ))}
          </div>
        )}
      </section>

      {/* College Image Gallery */}
      <Gallery />

      {/* Research Paper Links */}
      <ResearchPaper />

      {/* Review Section */}
      <Review />
    </div>
  );
};

export default Body;
