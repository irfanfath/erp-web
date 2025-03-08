// import React from "react";

// const Home = () => {
//   return (
//     <div className="mt-10 px-10">
//       <h1 className="text-4xl font-bold">Welcome to ERP Tier</h1>
//       <p className="mt-4 text-gray-700">
//         Solusi manajemen bisnis Anda dengan berbagai fitur pencatatan barang dan analisis penjualan.
//       </p>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import homeSection from "../assets/home-section.svg"

const Home = () => {
  return (
    <div className="bg-gray-100">
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="mt-10">
            <img src={homeSection} alt="About Illustration" className="w-full" />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold">Sistem ERP untuk Bisnis Anda</h2>
            <p className="text-lg mt-4">Kelola barang, keuntungan, dan analisa penjualan dengan mudah.</p>
            <Link to="/pricing" className="mt-10 inline-block bg-white border-2 border-blue-400 text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold">Lihat Detail</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto pb-20 p-4">
        <h3 className="text-3xl font-semibold text-center">Kenapa Memilih Kami?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md text-center border border-blue-400">
            <h4 className="text-xl font-bold">TIER 1: Basic</h4>
            <p>Mencatat barang masuk, keluar, dan keuntungan.</p>
          </div>
          <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md text-center border border-blue-400">
            <h4 className="text-xl font-bold">TIER 2: Business</h4>
            <p>Analisa penjualan dengan chart dan support 24/7.</p>
          </div>
          <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md text-center border border-blue-400">
            <h4 className="text-xl font-bold">TIER 3: Entrepreneur</h4>
            <p>Export data ke Excel dan AI prediksi penghasilan.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
