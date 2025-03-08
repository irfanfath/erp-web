import { useState } from "react";
import { saveAs } from "file-saver";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const Dashboard = () => {
  const [tier, setTier] = useState("Basic");
  const [items, setItems] = useState([]);
  const [profit, setProfit] = useState(0);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{ label: "Penjualan", data: [10, 20, 15, 30, 25, 35], backgroundColor: "blue", borderColor: "blue" }]
  });

  // Fungsi menambah barang
  const handleAddItem = () => {
    if (itemName && itemPrice) {
      setItems([...items, { name: itemName, price: Number(itemPrice) }]);
      setProfit(profit + Number(itemPrice));
      setItemName("");
      setItemPrice("");
    }
  };

  // Fungsi ekspor ke Excel (simulasi)
  const exportToExcel = () => {
    const data = items.map(item => `${item.name}, ${item.price}`).join("\n");
    const blob = new Blob([`Nama Barang, Harga\n${data}`], { type: "text/csv" });
    saveAs(blob, "data_penjualan.csv");
  };

  // Simulasi AI Prediksi Penghasilan
  const predictAI = () => {
    return profit * 1.2; // Simulasi prediksi naik 20%
  };

  return (
    <div className="p-10 mb-10">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <div className="mb-6">
        <label className="block text-gray-700">Pilih TIER Anda:</label>
        <select className="border p-2 rounded" value={tier} onChange={(e) => setTier(e.target.value)}>
          <option value="Basic">TIER 1 - Basic</option>
          <option value="Business">TIER 2 - Business</option>
          <option value="Entrepreneur">TIER 3 - Entrepreneur</option>
        </select>
      </div>

      {/* Fitur TIER 1 - Basic */}
      {(tier === "Basic" || tier === "Business" || tier === "Entrepreneur") && (
        <div className="border p-6 rounded-lg shadow-lg bg-white mb-6">
          <h2 className="text-2xl font-bold">Mencatat Barang Masuk/Keluar</h2>
          <div className="mt-4 mb-2">
            <input type="text" placeholder="Nama Barang" className="border p-2 mr-2 rounded mb-4" value={itemName} onChange={(e) => setItemName(e.target.value)} />
            <input type="number" placeholder="Harga" className="border p-2 mr-2 rounded" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
            <button className="bg-purple-400 text-white px-4 py-2 rounded mt-6" onClick={handleAddItem}>Tambah</button>
          </div>
          <ul className="mt-4">
            {items.map((item, index) => (
              <li key={index} className="text-gray-600">{item.name} - Rp {item.price}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Ringkasan Keuntungan */}
      {(tier === "Basic" || tier === "Business" || tier === "Entrepreneur") && (
        <div className="border p-6 rounded-lg shadow-lg bg-gray-100 mb-6">
          <h2 className="text-2xl font-bold">Ringkasan Keuntungan</h2>
          <p className="text-xl mt-2">Total Keuntungan: <strong>Rp {profit}</strong></p>
        </div>
      )}

      {/* Fitur TIER 2 - Business */}
      {(tier === "Business" || tier === "Entrepreneur") && (
        <div className="border p-6 rounded-lg shadow-lg bg-white mb-6">
          <h2 className="text-2xl font-bold">Analisa Hasil Penjualan</h2>
          <div className="mt-4">
            <Line key={JSON.stringify(chartData)} data={chartData} />
          </div>
        </div>
      )}

      {/* Fitur TIER 3 - Entrepreneur */}
      {tier === "Entrepreneur" && (
        <div className="border p-6 rounded-lg shadow-lg bg-white mb-6">
          <h2 className="text-2xl font-bold">Export Data ke Excel</h2>
          <button className="bg-green-500 text-white px-4 py-2 rounded mt-4" onClick={exportToExcel}>Export ke Excel</button>
        </div>
      )}

      {tier === "Entrepreneur" && (
        <div className="border p-6 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-bold">AI Prediksi Penghasilan</h2>
          <p className="text-xl mt-2">Prediksi Penghasilan: <strong>Rp {predictAI().toFixed(2)}</strong></p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
