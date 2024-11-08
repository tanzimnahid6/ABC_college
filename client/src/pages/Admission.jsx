    
import  { useState } from 'react';

const colleges = [
  { id: 1, name: 'Harvard University' },
  { id: 2, name: 'MIT' },
  { id: 3, name: 'Stanford University' },
  { id: 4, name: 'Yale University' }
];

const Admission = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [formData, setFormData] = useState({
    candidateName: '',
    subject: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    image: null
  });

  const handleCollegeClick = (college) => {
    setSelectedCollege(college);
    setFormData({
      candidateName: '',
      subject: '',
      email: '',
      phone: '',
      address: '',
      dob: '',
      image: null
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send formData to an API or save it to local storage for "My College"
    localStorage.setItem('myCollege', JSON.stringify({ college: selectedCollege, ...formData }));
    alert('Admission form submitted!');
    setSelectedCollege(null); // Reset selected college after submission
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Admission Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Select a College</h2>
          {colleges.map((college) => (
            <button
              key={college.id}
              onClick={() => handleCollegeClick(college)}
              className="btn btn-outline w-full mb-2"
            >
              {college.name}
            </button>
          ))}
        </div>

        {selectedCollege && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Admission Form for {selectedCollege.name}</h2>
            <input type="text" name="candidateName" placeholder="Candidate Name" className="input input-bordered w-full" value={formData.candidateName} onChange={handleInputChange} required />
            <input type="text" name="subject" placeholder="Subject" className="input input-bordered w-full" value={formData.subject} onChange={handleInputChange} required />
            <input type="email" name="email" placeholder="Candidate Email" className="input input-bordered w-full" value={formData.email} onChange={handleInputChange} required />
            <input type="tel" name="phone" placeholder="Candidate Phone Number" className="input input-bordered w-full" value={formData.phone} onChange={handleInputChange} required />
            <input type="text" name="address" placeholder="Address" className="input input-bordered w-full" value={formData.address} onChange={handleInputChange} required />
            <input type="date" name="dob" className="input input-bordered w-full" value={formData.dob} onChange={handleInputChange} required />
            <input type="file" name="image" className="input input-bordered w-full" onChange={handleImageChange} required />
            <button type="submit" className="btn btn-primary w-full">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Admission;
