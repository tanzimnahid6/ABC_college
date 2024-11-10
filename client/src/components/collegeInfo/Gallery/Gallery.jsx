

const Gallery = () => {
  return (
    <section className="bg-gray-50 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        College Image Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {/* Replace these with your image URLs */}
        <img
          src="https://www.thoughtco.com/thmb/WeZTn-IMR0RqlNB4THgDxMFL__c=/2779x1852/filters:fill(auto,1)/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg"
          alt="Graduate Group"
          className="h-40 w-full object-cover rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8Y29sbGVnZSUyMGNhbXB1c3x8MHx8fHwxNjI3MDg3OTEw&ixlib=rb-1.2.1&q=80&w=1080"
          alt="Graduate Group"
          className="h-40 w-full object-cover rounded-lg"
        />
        <img
          src="https://offloadmedia.feverup.com/parissecret.com/wp-content/uploads/2020/11/04044022/Copie-de-Design-sans-titre-2.png"
          alt="Graduate Group"
          className="h-40 w-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default Gallery;
