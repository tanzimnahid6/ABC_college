

const Review = () => {
    return (
        <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Reviews</h2>
        <div className="max-w-4xl mx-auto space-y-6 px-4">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-gray-700">
              &quot;Harvard University is truly a transformative experience!&quot;
            </p>
            <p className="text-sm text-gray-500 mt-2">- Alex Smith</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-gray-700">
              &quot;MIT&apos;s curriculum pushes boundaries and fosters innovation.&quot;
            </p>
            <p className="text-sm text-gray-500 mt-2">- Jamie Lee</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-gray-700">
              &quot;Stanford&lsquo;s campus culture and networking opportunities are
              unparalleled.&quot;
            </p>
            <p className="text-sm text-gray-500 mt-2">- Taylor Brown</p>
          </div>
        </div>
      </section>
    );
};

export default Review;