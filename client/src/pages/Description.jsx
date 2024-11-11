

const TaskDetailsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
            Description
          </h1>
        </header>

        {/* Task Details Section */}
        <section className="space-y-10">
          <div>
            <h2 className="text-xl font-semibold text-indigo-700">
              Details:
            </h2>
            <p className="mt-2 text-xl text-gray-700">
              I have implemented a college booking web application with the
              following features:
            </p>
          </div>

          <div className="space-y-6">
            {/* Search and College Cards */}
            <div>
              <h3 className="text-xl font-semibold text-purple-600">
                Home Page Features:
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-3  text-gray-700">
                <li>
                  <strong>Search Functionality:</strong> Below the navbar, users
                  can search for college names. After searching, college cards
                  will dynamically appear.
                </li>
                <li>
                  <strong>College Cards:</strong> Displays three college cards
                  with information like name, image, admission dates, events,
                  research history, and sports. Each card has a Details
                  button.
                </li>
                <li>
                  <strong>College Image Gallery:</strong> A gallery of college
                  images, including pictures of graduates and other significant
                  college events.
                </li>
                <li>
                  <strong>Research Papers Section:</strong> Links to research
                  papers published by the college's students.
                </li>
                <li>
                  <strong>Review Section:</strong> Allows users to see reviews
                  and feedback about specific colleges. Reviews are submitted
                  via the "My College" route.
                </li>
              </ul>
            </div>

            {/* College Route */}
            <div>
              <h3 className="text-xl font-semibold text-purple-600">
                College Route:
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-3  text-gray-700">
                <li>
                  The route displays college cards, each showing the name,
                  image, rating, admission date, research count, and a Details
                  button.
                </li>
                <li>
                  Clicking on the Details button takes the user to a page
                  with detailed information about the college, including events
                  and sports offerings.
                </li>
              </ul>
            </div>

            {/* Admission Route */}
            <div>
              <h3 className="text-xl font-semibold text-purple-600">
                Admission Route:
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-3  text-gray-700">
                <li>
                  Users can select a college and fill out a form with details
                  like name, subject, email, phone number, address, and date of
                  birth.
                </li>
                <li>
                  After submitting, the data is saved in the My College route.
                </li>
              </ul>
            </div>

            {/* My College Route */}
            <div>
              <h3 className="text-xl font-semibold text-purple-600">
                My College Route:
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-3  text-gray-700">
                <li>
                  Users can see their selected college details and submit
                  reviews with a rating.
                </li>
                <li>
                  Reviews submitted here are also displayed on the homepage in
                  the review section.
                </li>
              </ul>
            </div>

            {/* Authentication */}
            <div>
              <h3 className="text-xl font-semibold text-purple-600">
                Authentication:
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-3  text-gray-700">
                <li>
                  Users can register and log in using email-password or Google
                  Authentication.
                </li>
                <li>
                  Password reset functionality is also implemented for users who
                  forget their password.
                </li>
                <li>
                  Only logged-in users can view college details and add reviews.
                </li>
                <li>
                  After logging in, users can access their profile to view and
                  manage their account details (name, email, university,
                  address).
                </li>
              </ul>
            </div>

            {/* 404 Route */}
            <div>
              <h3 className="text-xl font-semibold text-purple-600">
                404 Route:
              </h3>
              <p className=" text-gray-700">
                A creative error page that guides users when navigating to a
                non-existent route.
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-semibold text-purple-600">
                Technologies Used:
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-3  text-gray-700">
                <li>
                  Frontend: React.js, Tailwind CSS (for responsive design)
                </li>
                <li>
                  Backend: Node.js, Express, MongoDB (using MVC pattern)
                </li>
                <li>Authentication: Email-password and Google OAuth</li>
                <li>
                  Deployment: Vercel, Netlify (for frontend), custom Express
                  server (for backend)
                </li>
              </ul>
            </div>

            {/* Scalability */}
            <div>
              <h3 className="text-xl font-semibold text-purple-600">
                Scalable and Industry-Standard Design:
              </h3>
              <p className=" text-gray-700">
                The application is built with scalability in mind, ensuring
                future features can be easily added. Industry standards have
                been followed to maintain code quality, structure, and
                flexibility.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="text-center mt-12">
          <p className=" text-gray-600">
            Thank you for reviewing the project. It is built with React,
            Node.js, MongoDB, and Express to create a scalable, user-friendly
            experience for booking college services.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TaskDetailsPage;
