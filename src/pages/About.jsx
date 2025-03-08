import React from "react";
import about from "../assets/about.svg"

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-semibold mb-4 py-5 text-blue-500">Siapa Kami?</h2>
            <p className="text-lg text-gray-700">
              ERP Startup adalah platform inovatif yang membantu pengusaha dalam mengelola bisnis mereka dengan lebih efisien.
              Kami menyediakan solusi pencatatan barang, analisa keuntungan, dan prediksi bisnis berbasis AI.
            </p>
          </div>
          <div>
            <img src={about} alt="About Illustration" className="w-full mt-10" />
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-4 text-blue-500">Visi Kami</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Menjadi penyedia ERP terdepan yang memberdayakan bisnis dalam mengambil keputusan berbasis data
            dengan teknologi modern dan user-friendly.
          </p>
        </div>
      </section>
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white text-center py-20 mb-20 mx-auto">
        <h1 className="text-4xl font-extrabold">Tentang Kami</h1>
        <p className="text-lg mt-2">Solusi ERP modern untuk bisnis Anda</p>
      </div>
    </div>
  );
};

export default About;
