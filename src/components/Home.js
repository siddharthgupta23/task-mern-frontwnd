import React from "react";

const Home = () => {
  return (
  
    <div className="min-h-screen bg-gray-100">
      <br></br>
      <br></br>
      <header className="bg-cover bg-center h-96 relative" style={{ backgroundImage: "url('image32.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-5xl text-white font-bold">Welcome to  Restaurant</h1>
        </div>
      </header>

      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded">
            <img src="elegated_dining.jpg" alt="Dining" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="font-bold text-xl mb-2">Elegant Dining</h3>
            <p>Experience fine dining with a cozy ambiance and top-notch service.</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <img src="image8.jpg" alt="Menu" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="font-bold text-xl mb-2">Restuarant Menu</h3>
            <p>Explore our wide range of delicious dishes prepared by expert chefs.</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <img src="image9.jpg" alt="Reservation" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="font-bold text-xl mb-2">Easy Reservations</h3>
            <p>Book your table hassle-free and enjoy your time at our restaurant.</p>
          </div>
        </div>
      </section>

      <section className="p-8 bg-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded text-center">
            <h3 className="font-bold text-xl mb-2">Standard</h3>
            <p className="text-2xl font-bold mb-4">$20</p>
            <p>Includes one appetizer, one main course, and one dessert.</p>
          </div>
          <div className="bg-white p-4 shadow rounded text-center">
            <h3 className="font-bold text-xl mb-2">Premium</h3>
            <p className="text-2xl font-bold mb-4">$35</p>
            <p>Includes two appetizers, two main courses, and one dessert.</p>
          </div>
          <div className="bg-white p-4 shadow rounded text-center">
            <h3 className="font-bold text-xl mb-2">Deluxe</h3>
            <p className="text-2xl font-bold mb-4">$50</p>
            <p>Includes unlimited appetizers, main courses, and desserts.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

