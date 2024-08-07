"use client";

import FadeInSection from "@/components/FadeInSection";
import { FaBook, FaShieldAlt, FaRegClock, FaExclamationCircle, FaRegSmile } from "react-icons/fa";

export default function Rules() {
  return (
    <div id="rules" className="min-h-screen py-20 bg-animated-gradient">
      <div className="container mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Aturan dan Ketentuan
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12">
              Berikut adalah aturan dan ketentuan yang harus diperhatikan saat menggunakan layanan pembelian Instagram kami.
            </p>
          </FadeInSection>
        </div>

        {/* Rules List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Rule 1 */}
          <FadeInSection>
            <div className="p-8 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <FaBook className="text-5xl text-blue-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Pilih Paket yang Tepat</h2>
              <p className="text-gray-700 text-center">
                Pilih paket layanan Instagram yang sesuai dengan kebutuhan Anda. Pastikan untuk membaca deskripsi setiap paket dengan teliti.
              </p>
            </div>
          </FadeInSection>

          {/* Rule 2 */}
          <FadeInSection>
            <div className="p-8 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <FaShieldAlt className="text-5xl text-green-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Keamanan Akun</h2>
              <p className="text-gray-700 text-center">
                Kami menjaga keamanan akun Instagram Anda dengan sangat serius. Pastikan Anda tidak membagikan informasi login kepada pihak ketiga.
              </p>
            </div>
          </FadeInSection>

          {/* Rule 3 */}
          <FadeInSection>
            <div className="p-8 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <FaRegClock className="text-5xl text-yellow-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Waktu Proses</h2>
              <p className="text-gray-700 text-center">
                Waktu proses untuk setiap paket dapat bervariasi. Kami akan memberikan update secara berkala tentang status pesanan Anda.
              </p>
            </div>
          </FadeInSection>
        </div>

        <div className="flex justify-center gap-8 mt-8">
          {/* Rule 4 */}
          <FadeInSection>
            <div className="flex-1 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <FaExclamationCircle className="text-5xl text-red-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Kebijakan Pengembalian</h2>
              <p className="text-gray-700 text-center">
                Tidak ada pengembalian dana setelah pesanan dikonfirmasi. Pastikan semua detail sudah benar sebelum melakukan pembayaran.
              </p>
            </div>
          </FadeInSection>

          {/* Rule 5 */}
          <FadeInSection>
            <div className="flex-1 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <FaRegSmile className="text-5xl text-purple-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Dukungan Pelanggan</h2>
              <p className="text-gray-700 text-center">
                Jika Anda memiliki pertanyaan atau masalah, menghubungi kami melalui WhatsApp atau email. Kami siap membantu Anda.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
