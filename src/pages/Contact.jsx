import React from "react";
import contactImage from "../assets/contact.svg";

const Contact = () => {
  return (
    <div className="text-gray-900">
      <div className="flex items-center justify-center mt-10 mb-10">
        <div className="flex bg-white rounded-lg shadow-lg w-3/4">
          <div className="w-1/2 hidden md:flex items-center justify-center bg-blue-500 rounded-l-lg">
            <img src={contactImage} alt="Contact Illustration" className="w-3/4" />
          </div>
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-center mb-4">Hubungi Kami</h2>
            <p className="text-center text-gray-600 mb-6">Kami siap membantu Anda kapan saja!</p>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Nama</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Masukkan Nama Anda" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Masukkan Email Anda" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Pesan</label>
                <textarea className="w-full px-4 py-2 border rounded-lg" rows="4" placeholder="Tulis pesan Anda"></textarea>
              </div>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full">Kirim</button>
            </form>
          </div>
        </div>
      </div>

      <section className="container mx-auto py-12 text-center mb-20 bg-gray-100 w-full">
        <h2 className="text-2xl font-bold mb-4">Informasi Kontak</h2>
        <p className="text-lg text-gray-700">📍 Alamat: Jl. Startup No. 123, Jakarta</p>
        <p className="text-lg text-gray-700">📧 Email: support@erpstartup.com</p>
        <p className="text-lg text-gray-700">📞 Telepon: +62 812 3456 7890</p>
      </section>

    </div>
  );
};

export default Contact;
