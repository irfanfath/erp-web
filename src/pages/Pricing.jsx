// import { motion } from "framer-motion";

// const Pricing = () => {
//   const tiers = [
//     { name: "TIER 1 / Basic", features: ["Mencatat barang masuk", "Mencatat barang keluar", "Mencatat keuntungan"], price: "Rp 50.000 / bulan" },
//     { name: "TIER 2 / Business", features: ["Semua fitur Basic", "Analisa hasil penjualan (Chart)", "Support 7x24 Jam"], price: "Rp 150.000 / bulan" },
//     { name: "TIER 3 / Entrepreneur", features: ["Semua fitur Business", "Export data ke Excel", "AI Prediksi Penghasilan"], price: "Rp 300.000 / bulan" },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="mt-10 px-10">
//         <h1 className="text-4xl font-bold mb-6">Pricing</h1>
//         <div className="grid md:grid-cols-3 gap-6">
//           {tiers.map((tier, index) => (
//             <div key={index} className="border p-6 rounded-lg shadow-lg bg-white">
//               <h2 className="text-2xl font-bold">{tier.name}</h2>
//               <ul className="mt-4 text-gray-600">
//                 {tier.features.map((feature, i) => (
//                   <li key={i}>✅ {feature}</li>
//                 ))}
//               </ul>
//               <p className="mt-4 text-xl font-semibold">{tier.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Pricing;


import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold">Basic</h2>
            <p className="text-lg text-gray-600">Rp 99.000 / bulan</p>
            <ul className="mt-4 text-gray-700">
              <li>✔ Mencatat barang masuk</li>
              <li>✔ Mencatat barang keluar</li>
              <li>✔ Mencatat hasil keuntungan</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg">Pilih Paket</button>
          </div>

          {/* Business Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold">Business</h2>
            <p className="text-lg text-gray-600">Rp 199.000 / bulan</p>
            <ul className="mt-4 text-gray-700">
              <li>✔ Semua fitur Basic</li>
              <li>✔ Analisa hasil penjualan dengan chart</li>
              <li>✔ Support 7x24 jam</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg">Pilih Paket</button>
          </div>

          {/* Entrepreneur Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold">Entrepreneur</h2>
            <p className="text-lg text-gray-600">Rp 299.000 / bulan</p>
            <ul className="mt-4 text-gray-700">
              <li>✔ Semua fitur Business</li>
              <li>✔ Export data ke Excel</li>
              <li>✔ AI prediksi penghasilan</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg">Pilih Paket</button>
          </div>
        </div>
      </section>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-12 sm:w-full md:w-[90%] mx-auto rounded-md">
        <h1 className="text-4xl font-extrabold">Paket Harga</h1>
        <p className="text-lg mt-2">Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
      </div>

      <section className="text-center py-20 bg-white mb-20">
        <Link to="/dashboard" className="bg-white border-2 border-blue-400 text-blue-600 px-10 py-4 rounded-lg text-xl font-semibold">Coba Sekarang</Link>
      </section>

    </div>
  );
};

export default Pricing;