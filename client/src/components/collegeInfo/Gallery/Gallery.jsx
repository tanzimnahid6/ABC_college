

const Gallery = () => {
  return (
    <section className="bg-gray-50 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        College Image Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {/* Replace these with your image URLs */}
        <img
          src="/path/to/graduate1.jpg"
          alt="Graduate Group"
          className="h-40 w-full object-cover rounded-lg"
        />
        <img
          src="/path/to/graduate2.jpg"
          alt="Graduate Group"
          className="h-40 w-full object-cover rounded-lg"
        />
        <img
          src="/path/to/graduate3.jpg"
          alt="Graduate Group"
          className="h-40 w-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default Gallery;
